function loadHeroElementalistClassSkills(MOD) {
    return [
        { model:"baseElemental", id:"concentration", item1:"attack", item2:"defense" },
        { model:"baseElemental", id:"concentration", item1:"defense", item2:"attack" },
        { model:"comboElements", id:"balance", item:"attack" },
        { model:"criticalElement", id:"excess", item:"attack" },
        { model:"noElement", id:"emptiness", item:"attack" },
        { model:"base", id:"quiet", item1:"defense", item2:"attack" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"fullTransferElement", id:"compression", from:"defense", to:"attack" },
        { level:[1,5], model:"fullTransferElement", id:"decompression", from:"attack", to:"defense" },
    ];
}

function loadHeroElementalistClassLegacySkills(MOD) {
    return [
        { model:"legacyElemental", id:"legacyElemental",item:"attack" }
    ];
}

function loadHeroElementalistClass(MOD) {

    let
        skillCrafter=new SkillCrafter({
            market:"default",
            elements:MOD.elements,
            value:{
                element:1.5,
                attack:1,
                defense:1.2
            }
        }),
        skillsBag=MOD.random.createBag(loadHeroElementalistClassSkills(MOD),true),
        legacySkillsBag=MOD.random.createBag(loadHeroElementalistClassLegacySkills(MOD),true);

    return {
        id:"elementalist",
        cards:[
            [ "baseAttack1", "strongAttack1" ],
            [ "baseDefense1", "strongDefense1" ],
            [ "baseAttack2", "strongAttack2" ],
            [ "baseDefense2", "strongDefense2" ],
            [ 0, 0 ],
            [ 0, 0 ],
            [ 0, 0 ],
            [ 0, 0 ],
        ],
        build:[
            { action:"addSkill", toSide:0, type:"tier1", times:2 },
            { action:"addSkill", toSide:0, type:"tier2", times:2 },
            { action:"addSkill", toSide:1 ,type:"tier3", times:2 },
            { action:"addSkill", toSide:1, type:"tier4", times:1 },
            { action:"addSkill", toSide:1, type:"legacy", times:1 },
            { action:"addPerks", times:2 },
            { action:"addExhaustModel", model:MOD.random.getFromBag(MOD.exhaustModelsBag), toCard:MOD.random.getFromBag(MOD.cardsBag) }
        ],
        skills:[

            // Base skills
            skillCrafter.baseElemental("baseAttack1","basic","attack","defense",MOD.random.getFromBag(MOD.elementsBag),1),
            skillCrafter.baseElemental("baseDefense1","basic","defense","attack",MOD.random.getFromBag(MOD.elementsBag),1),
            skillCrafter.baseElemental("baseAttack2","basic","attack","defense",MOD.random.getFromBag(MOD.elementsBag),2),
            skillCrafter.baseElemental("baseDefense2","basic","defense","attack",MOD.random.getFromBag(MOD.elementsBag),2),
            skillCrafter.baseElemental("strongAttack1","basic","attack","defense",MOD.random.getFromBag(MOD.elementsBag),3),
            skillCrafter.baseElemental("strongDefense1","basic","defense","attack",MOD.random.getFromBag(MOD.elementsBag),3),
            skillCrafter.baseElemental("strongAttack2","basic","attack","defense",MOD.random.getFromBag(MOD.elementsBag),4),
            skillCrafter.baseElemental("strongDefense2","basic","defense","attack",MOD.random.getFromBag(MOD.elementsBag),4),

            // Basic attacks

            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier1",3,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier1",4,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier2",5,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier2",6,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier3",7,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier3",8,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier4",9,{ element:MOD.random.getFromBag(MOD.elementsBag) }),
            skillCrafter.craftFromBag(MOD.random,legacySkillsBag,"legacy",9,{ element:MOD.random.getFromBag(MOD.elementsBag) }),

        ]
    }
}

if (typeof module != "undefined") {
    const
        SkillsLib = require('../../../generators/skill.js');
    SkillCrafter = SkillsLib.SkillCrafter;
    module.exports={
        loadHeroElementalistClass:loadHeroElementalistClass
    };
}