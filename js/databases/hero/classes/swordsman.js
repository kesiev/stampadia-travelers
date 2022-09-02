function loadHeroSwordsmanClassAttackSkills(MOD) {
    return [
        { model:"wish", id:"instinct", item1:"attack", item2:"defense" },
        { model:"tierBanner", id:"shout", bannerType:"banner2", subject:"inPlay", tiers:2, item:"attack" },
        { model:"singleTransfer", id:"charge", from:"defense", to:"attack" },
        { model:"cardsCountConditioned",  id:"frenzy", cardsCount:4, subject:"inPlay", item:"attack" },
        { model:"bannerConditioned", id:"agility", bannerType:"banner2", subject:"inPlay", item:"attack" },
        { model:"flowBanner", id:"blitz", bannerType:"banner2", item1:"attack", subject1:"inPlay", item2:"defense", subject2:"inPlay" },
        { model:"combined", id:"daze", item1:"attack", item2:"defense" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"zeroTransfer", id:"momentum", from:"defense", to:"attack" },
        { level:[1,5], model:"fullTransfer", id:"hate", from:"defense", to:"attack" },
    ];
}

function loadHeroSwordsmanClassDefenseSkills(MOD) {
    return [
        { model:"wish", id:"impulse", item1:"defense", item2:"attack" },
        { model:"tierBanner", id:"growl", bannerType:"banner2", subject:"inHand", tiers:2, item:"defense" },
        { model:"singleTransfer", id:"thought", from:"attack", to:"defense" },
        { model:"cardsCountConditioned",  id:"patience", cardsCount:3, subject:"inHand", item:"defense" },
        { model:"bannerConditioned", id:"strategy", bannerType:"banner2", subject:"inHand", item:"defense" },
        { model:"cardsCountConditionedMana", id:"preparation", subject:"inPlay", count:3, asItem:"attack" },
        { model:"flowBanner", id:"lunge", bannerType:"banner2", item1:"defense", item2:"attack" },
        // Transfer skills are gained on lower levels
        { level:[1,5], model:"fullTransfer", id:"protection", from:"attack", to:"defense" },
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
                defense:1.2,
                banner1:0.05,
                banner2:0.05
            }
        }),
        attackSkillsBag=MOD.random.createBag(loadHeroSwordsmanClassAttackSkills(MOD),true),
        defenseSkillsBag=MOD.random.createBag(loadHeroSwordsmanClassDefenseSkills(MOD),true),
        skillsBag=MOD.random.createBag([attackSkillsBag,attackSkillsBag,defenseSkillsBag],true),
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
            { action:"addPerks", times:3 },
            { action:"addElement", toCards:[4,5,6,7] },
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

            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier1",3),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier1",4),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier2",5),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier2",6),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier3",7),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier3",7),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier4",8),
            skillCrafter.craftFromBag(MOD.random,MOD.random.getFromBag(skillsBag),"tier4",8),
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