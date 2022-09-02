function loadHeroStargazerClassAttackSkills(MOD) {
    return [
        { model:"wish", id:"bond", item1:"attack", item2:"defense" },
        { model:"noShowConstellation", id:"blindness", place1:"notInPlay", place2:"notInHand", item:"attack" },
        { model:"tierConstellation", id:"asteroid", place:"inPlay", tiers:2, item:"attack" },
        { model:"showConstellation", id:"glare", place:"inPlay", to:"attack" },
        { model:"showConstellation", id:"erasing", place:"inHand", to:"attack" },
        { model:"showConstellationElement", id:"blackHole", elementSubject:"inPlay", place:"inPlay", to:"attack" },
        { model:"flowConstellation", id:"day", place:"inPlay", item1:"attack", item2:"defense" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"fullTransferConstellation", id:"zoomin", place:"inPlay", from:"defense", to:"attack" },
    ];
}

function loadHeroStargazerClassDefenseSkills(MOD) {
    return [
        { model:"wish", id:"pact", item1:"defense", item2:"attack" },
        { model:"noShowConstellation", id:"darkness", place1:"notInPlay", place2:"notInHand", item:"defense" },
        { model:"tierConstellation", id:"comet", place:"inPlay", tiers:2, item:"defense" },
        { model:"showConstellation", id:"gaze", place:"inPlay", to:"defense" },
        { model:"showConstellation", id:"tracing", place:"inHand", to:"defense" },
        { model:"showConstellationElement", id:"nebula", elementSubject:"inPlay", place:"inPlay", to:"defense" },
        { model:"flowConstellation", id:"night", place:"inPlay", item1:"defense", item2:"attack" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"fullTransferConstellation", id:"zoomout", place:"inPlay", from:"attack", to:"defense" },
    ];
}

function loadHeroStargazerClassLegacySkills(MOD) {
    return [
        { model:"legacyConstellation", id:"legacyAttack", place:"inPlay", cards:3, item:"attack" }
    ];    
}

function loadHeroStargazerClass(MOD) {

    let
        skillCrafter=new SkillCrafter({
            market:"default",
            value:{
                attack:1,
                defense:1.2,
                element:1.5,
                constellation:0.05
            }
        }),
        attackSkillsBag=MOD.random.createBag(loadHeroStargazerClassAttackSkills(MOD),true),
        defenseSkillsBag=MOD.random.createBag(loadHeroStargazerClassDefenseSkills(MOD),true),
        skillsBag=MOD.random.createBag([attackSkillsBag,attackSkillsBag,defenseSkillsBag],true),
        legacySkillsBag=MOD.random.createBag(loadHeroStargazerClassLegacySkills(MOD),true);

    return {
        id:"stargazer",
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
            { action:"addPerks", times:1 }, // Less perks to have more stars variety.
            { action:"addElement", toCards:[4,5,6,7] },
            { action:"addLowerElement", toCards:[0,1,2,3] },
            { action:"addDrainModel", model:MOD.random.getFromBag(MOD.drainModelsBag), toCard:MOD.random.getFromBag(MOD.cardsBag) }
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

            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier1",3,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.easyConstellationsBag), cards:1 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier1",4,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.easyConstellationsBag), cards:1 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier2",5,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.easyConstellationsBag), cards:1 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier2",6,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag), cards:2 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier3",7,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag), cards:2 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier3",7,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag), cards:2 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier4",8,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag), cards:1 }),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier4",8,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag), cards:1 }),
            skillCrafter.craftFromBag(MOD.random,legacySkillsBag,"legacy",9,{ element:MOD.random.getFromBag(MOD.elementsBag), constellation:MOD.random.getFromBag(MOD.normalConstellationsBag)}),

        ]
    }
}

if (typeof module != "undefined") {
    const
        SkillsLib = require('../../../generators/skill.js');
    SkillCrafter = SkillsLib.SkillCrafter;
    module.exports={
        loadHeroStargazerClass:loadHeroStargazerClass
    };
}