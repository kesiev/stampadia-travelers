function loadHeroSwordsmanClassSkills(MOD) {
    return [
        { model:"singleTransfer", id:"basicAttack2", from:"defense", to:"attack" },
        { model:"startingMana", id:"basicSpecial1", asItem:"attack" },
        { model:"combined", id:"advancedAttack1", item1:"attack", item2:"defense" },
        { model:"finalAction", id:"advancedSpecial1", item:"attack" },
        { model:"bannerConditioned", id:"advancedAttack2", item:"attack" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"fullTransfer", id:"advancedSpecial2", from:"attack", to:"defense" },
        { level:[1,5], model:"zeroTransfer", id:"basicAttack1", from:"defense", to:"attack" },
        { level:[1,5], model:"fullTransfer", id:"basicSpecial2", from:"defense", to:"attack" },
    ];
}

function loadHeroSwordsmanClassLegacySkills(MOD) {
    return [
        { model:"legacy", id:"legacyAttack",item:"attack" }
    ];    
}

function loadHeroSwordsmanClass(MOD) {

    let
        skillCrafter=new SkillCrafter({
            market:"default",
            value:{
                attack:1,
                defense:1.2
            }
        }),
        skillsBag=MOD.random.createBag(loadHeroSwordsmanClassSkills(MOD),true),
        legacySkillsBag=MOD.random.createBag(loadHeroSwordsmanClassLegacySkills(MOD),true);
        
    return {
        id:"swordsman",
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
            { action:"addElement", toCards:[4,5,6,7] },
            { action:"addExhaustModel", model:MOD.random.getFromBag(MOD.exhaustModelsBag), toCard:MOD.random.getFromBag(MOD.cardsBag) }
        ],
        skills:[

            // Base skills
            skillCrafter.base("baseAttack1","basic","attack","defense",1),
            skillCrafter.base("baseDefense1","basic","defense","attack",1),
            skillCrafter.base("baseAttack2","basic","attack","defense",2),
            skillCrafter.base("baseDefense2","basic","defense","attack",2),
            skillCrafter.base("strongAttack1","basic","attack","defense",3),
            skillCrafter.base("strongDefense1","basic","defense","attack",3),
            skillCrafter.base("strongAttack2","basic","attack","defense",4),
            skillCrafter.base("strongDefense2","basic","defense","attack",4),

            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier1",3),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier1",4),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier2",5),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier2",6),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier3",7),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier3",8),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier4",9),
            skillCrafter.craftFromBag(MOD.random,skillsBag,"tier4",9),
            skillCrafter.craftFromBag(MOD.random,legacySkillsBag,"legacy",9),

        ]
    }
}

if (typeof module != "undefined") {
    const
        SkillsLib = require('../../../generators/skill.js');
    SkillCrafter = SkillsLib.SkillCrafter;
    module.exports={
        loadHeroSwordsmanClass:loadHeroSwordsmanClass
    };
}