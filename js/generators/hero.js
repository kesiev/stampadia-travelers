if (typeof module != "undefined") {
    const
        PerksLib = require('../databases/hero/perks.js'),
        ElementalistLib = require('../databases/hero/classes/elementalist.js'),
        SwordsmanLib = require('../databases/hero/classes/swordsman.js'),
        RandomLib = require('../random.js'),
        ToolsLib = require('../tools.js');
    Random = RandomLib.Random,
    Tools = ToolsLib;
    loadHeroPerks = PerksLib.loadHeroPerks;
    loadHeroElementalistClass = ElementalistLib.loadHeroElementalistClass;
    loadHeroSwordsmanClass = SwordsmanLib.loadHeroSwordsmanClass;
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

    function applyElement(cards,card,element) {
        if (cards[card]) {
            cards[card].sides[0].element=element;
            cards[card].sides[1].element=element;
        }
    }

    const
        ELEMENTS=[
            { element:"fire", consumedBy:"water", consumes:"air" },
            { element:"earth", consumedBy:"air", consumes:"water" },
            { element:"water", consumedBy:"earth", consumes:"fire" },
            { element:"air", consumedBy:"fire", consumes:"earth" },
        ];

    let
        random=new Random({
            seed:modifiers.seed,
            noRandom:modifiers.noRandom
        }),
        elementsBag=random.createBag(ELEMENTS,true),
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
            elementsBag:elementsBag

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