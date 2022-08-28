if (typeof module != "undefined") {
    const
        PerksLib = require('../databases/hero/perks.js'),
        StargazerLib = require('../databases/hero/classes/stargazer.js'),
        ElementalistLib = require('../databases/hero/classes/elementalist.js'),
        SwordsmanLib = require('../databases/hero/classes/swordsman.js'),
        RandomLib = require('../random.js'),
        ToolsLib = require('../tools.js');
    Random = RandomLib.Random,
    Tools = ToolsLib;
    loadHeroPerks = PerksLib.loadHeroPerks;
    loadHeroElementalistClass = ElementalistLib.loadHeroElementalistClass;
    loadHeroSwordsmanClass = SwordsmanLib.loadHeroSwordsmanClass;
    loadHeroStargazerClass = StargazerLib.loadHeroStargazerClass;
}

function generateHero(modifiers) {

    if (!modifiers) modifiers = {};
    
    function addSkills(cards,side,times,bag) {
        let card=0;
        for (let i=0;i<times;i++) {
            while (cards[card] && cards[card].sides[side]) card++;
            if (cards[card]) {
                let skill=random.getFromBag(bag);
                cards[card].sides[side] = Tools.clone(skill);
            }
        }
    }

    function addPerks(cards,times,bag) {
        let slots=[];
        cards.forEach((card,cardid)=>{
            card.sides.forEach((side,sideid)=>{
                if (side.acceptPerks && (side.options.length==1))
                    slots.push([cardid,sideid]);
            })
        });
        for (let i=0;i<times;i++)
            if (slots.length) {
                let
                    perk=random.getFromBag(bag),
                    slot=random.removeElement(slots),
                    side=cards[slot[0]].sides[slot[1]];
                console.log("perk",perk,"on",slot);
                side.acceptPerks=false;
                side.perkId=perk.id;
                if (perk.option)
                    side.options.push(Tools.clone(perk.option));
                if (perk.gain)
                    for (var k in perk.gain)
                        side.gain[k]=(side.gain[k]||0)+perk.gain[k];
            }
    }

    function applyLowerElement(cards,card,element) {
        if (cards[card])
            cards[card].sides[1].element=element;
    }

    function applyHigherElement(cards,card,element) {
        if (cards[card])
            cards[card].sides[0].element=element;
    }

    function applyElement(cards,card,element) {
        applyLowerElement(cards,card,element);
        applyHigherElement(cards,card,element);
    }

    function applyExhaustModel(cards,card,type) {
        let side = random.getBoolean() ? 1 : 0;
        cards[card].sides[side].exhaustModel = type;
        if (!cards[card].sides[side].perkId) cards[card].sides[side].perkId=type.perkId;
    }

    function createConstellations(len) {
        let out=[], cnt=Math.pow(2,len);
        for (let i=0;i<cnt;i++) {
            let line=[], m=i;
            for (let j=0;j<len;j++) {
                line.push(m%2+1);
                m=Math.floor(m/2);
            }
            out.push(line);
        }
        return out;
    }

    const
        ELEMENTS=[
            { element:"fire", consumedBy:"water", consumes:"air" },
            { element:"earth", consumedBy:"air", consumes:"water" },
            { element:"water", consumedBy:"earth", consumes:"fire" },
            { element:"air", consumedBy:"fire", consumes:"earth" },
        ],
        EASYCONSTELLATIONS=createConstellations(2),
        NORMALCONSTELLATIONS=createConstellations(3),
        HARDCONSTELLATIONS=createConstellations(4);

    let
        random=new Random({
            seed:modifiers.seed,
            noRandom:modifiers.noRandom
        }),
        elementsBag=random.createBag(ELEMENTS,true),
        easyConstellationsBag=random.createBag(EASYCONSTELLATIONS,true),
        normalConstellationsBag=random.createBag(NORMALCONSTELLATIONS,true),
        hardConstellationsBag=random.createBag(HARDCONSTELLATIONS,true),
        cardsBag=random.createBag([4,5,6,7]),
        exhaustModelsBag=random.createBag(EXHAUSTMODELS,true),
        MODIFIERS = {

            // -- Costs
            FREECOST:{ mana:0 },
            LOWCOST:{ mana:1 },

            // -- Gains
            LOWGAIN:{ action:"gain", attribute:"mana", value:1 },
            MIDGAIN:{ action:"gain", attribute:"mana", value:2 },

            // -- Attacks
            LOWATTACK:{ action:"gain", attribute:"attack", value: 1 },

            // -- Defense
            LOWDEFENSE:{ action:"gain", attribute:"defense", value: 1 },

            // Proxy randoms
            random:random,
            elementsBag:elementsBag,
            easyConstellationsBag:easyConstellationsBag,
            normalConstellationsBag:normalConstellationsBag,
            hardConstellationsBag:hardConstellationsBag,
            cardsBag:cardsBag,
            exhaustModelsBag:exhaustModelsBag
        },
        perks=loadHeroPerks(MODIFIERS),
        perksBag = random.createBag(perks),
        playerClass,
        skillsIndex={
            byId:{},
            byType:{}
        },
        skillsBag={},
        cards=[];

    switch (modifiers.classType) {
        case "swordsman":{
            playerClass=loadHeroSwordsmanClass(MODIFIERS)
            break;
        }
        case "elementalist":{
            playerClass=loadHeroElementalistClass(MODIFIERS)
            break;
        }
        case "stargazer":{
            playerClass=loadHeroStargazerClass(MODIFIERS)
            break;
        }
    }

    playerClass.name = random.getLabel("name");
    playerClass.description = random.getLabel("description");

    playerClass.skills.forEach(skill=>{
        skillsIndex.byId[skill.id]=skill;
        if (!skillsIndex.byType[skill.type]) skillsIndex.byType[skill.type]=[];
        skillsIndex.byType[skill.type].push(skill);
    });

    for (var k in skillsIndex.byType)
        skillsBag[k] = random.createBag(skillsIndex.byType[k]);

    playerClass.cards.forEach((card,id)=>{
        let row={
            cardCode:modifiers.setCode+"-H-"+(id+1)+modifiers.setSide,
            sides:[]
        };
        card.forEach(side=>{
            if (side)
                row.sides.push(Tools.clone(skillsIndex.byId[side]));
            else
                row.sides.push(0);
        });
        cards.push(row);
    });

    playerClass.build.forEach(step=>{
        switch (step.action) {
            case "addSkill":{
                if (!modifiers.noSkills)
                    addSkills(cards,step.toSide,step.times,skillsBag[step.type]);
                break;
            }
            case "addPerks":{
                if (!modifiers.noPerks)
                    addPerks(cards,step.times,perksBag);
                break;
            }
            case "addElement":{
                step.toCards.forEach(cardid=>{
                    applyElement(cards,cardid,random.getFromBag(elementsBag).element);
                })
                break;
            }
            case "addLowerElement":{
                step.toCards.forEach(cardid=>{
                    applyLowerElement(cards,cardid,random.getFromBag(elementsBag).element);
                })
                break;
            }
            case "addHigherElement":{
                step.toCards.forEach(cardid=>{
                    applyHigherElement(cards,cardid,random.getFromBag(elementsBag).element);
                })
                break;
            }
            case "addExhaustModel":{
                applyExhaustModel(cards,step.toCard,step.model);
                break;
            }
        }
    });

    if (modifiers.testSkill) {
        cards.sides[8]=[
            Tools.clone(skillsIndex.byId[modifiers.testSkill]),
            Tools.clone(skillsIndex.byId[modifiers.testSkill])
        ];
    }

    // Remove empty cards
    
    cards = cards.filter(card=>card.sides[0]||card.sides[1]);
    
    return {
        id:playerClass.id,
        name:playerClass.name,
        description:playerClass.description,
        heroCardCode:modifiers.setCode+"-H-9A",
        cards:cards
    }

}

if (typeof module != "undefined")
    module.exports={
        generateHero:generateHero
    };