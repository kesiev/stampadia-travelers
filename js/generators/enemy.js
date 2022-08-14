function EnemyGenerator(random) {

    const
        LEVELCAP=9,
        ENEMYMAP=[0,0,{"atk":[2,4],"def":[3,5]},{"atk":[3,5],"def":[6,6]},{"atk":[7,8],"def":[10,10]},{"atk":[8,8],"def":[12,12]},{"atk":[8,11],"def":[14,17]},{"atk":[8,13],"def":[16,18]},{"atk":[9,14],"def":[16,18]},{"atk":[10,14],"def":[16,27]}],
        ENEMYTIERS={
            lvl1:[[2,0]],
            lvl2:[[2,1],[3,0]],
            lvl3:[[3,1],[4,1]],
            lvl4:[[5,0],[6,0]],
            lvl5:[[7,0],[8,1]],
            miniboss:[[8,0],[9,0]],
            boss:[[9,0],[9,1]]
        };

    let
        generatedTiers={},
        enemyModifiersAll={},
        enemyModifiersBag={},
        enemiesBag={},
        bonusTypesBag=[],
        bonusSlotsBag={},
        bonusBag={},
        bonusTypes=[],
        enemyModifiers=loadEnemyModifiers(),
        bonuses=loadEnemyBonuses(),
        bonusSlots=loadEnemyBonusSlots();    

    // Generate enemy tiers
    for (let k in ENEMYTIERS) {
        let
            tiers=ENEMYTIERS[k],
            enemyTier={
                easy:[],
                normal:[],
                hard:[],
                normalUnbuffed:[],
                hardUnbuffed:[],
                easyLock:[],
                normalLock:[],
                hardLock:[],
                easyTrap:[],
                normalTrap:[],
                hardTrap:[],
            }
            level=0,
            atk={sum:0}
            def={sum:0};

        tiers.forEach(tier=>{
            let
                map=ENEMYMAP[tier[0]],
                mapIndex=tier[1];

            atk.sum+=map.atk[mapIndex];
            if (atk.lowest == undefined) atk.lowest=map.atk[mapIndex];
            atk.highest=map.atk[mapIndex];

            def.sum+=map.def[mapIndex];
            if (def.lowest == undefined) def.lowest=map.def[mapIndex];
            def.highest=map.def[mapIndex];

            level=tier[0];
        });

        level=Math.min(level,LEVELCAP-1);

        atk.avg=Math.round(atk.sum/tiers.length);
        def.avg=Math.round(def.sum/tiers.length);

        // Normal enemies

        enemyTier.easy.push(
            { level:level, atk:atk.lowest-1, def:def.lowest, givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.lowest, def:def.lowest-1, givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.lowest-1, def:def.lowest-1, modifier:["buff"], givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.lowest, def:def.lowest, modifier:["debuff"], givesBonus:true, bonusSlots:"all" },
        );

        enemyTier.normal.push(
            { level:level, atk:atk.avg-1, def:def.avg, givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.avg, def:def.avg-1, givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.avg-1, def:def.avg-1, modifier:["buff"], givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.avg, def:def.avg, modifier:["debuff"], givesBonus:true, bonusSlots:"all" },
        );

        enemyTier.hard.push(
            { level:level, atk:atk.highest-1, def:def.highest, givesBonus:true, bonusSlots:"none" },
            { level:level, atk:atk.highest, def:def.highest-1, givesBonus:true, bonusSlots:"none" },
            { level:level, atk:atk.highest-1, def:def.highest-1, modifier:["buff"], givesBonus:true, bonusSlots:"none" },
            { level:level, atk:atk.highest, def:def.highest, modifier:["debuff"], givesBonus:true, bonusSlots:"none" },
        );

        // Unbuffed enemy - for dungeon rooms with more text

        enemyTier.normalUnbuffed.push(
            { level:level, atk:atk.avg-1, def:def.avg, givesBonus:true, bonusSlots:"all" },
            { level:level, atk:atk.avg, def:def.avg-1, givesBonus:true, bonusSlots:"all" }
        );

        enemyTier.hardUnbuffed.push(
            { level:level, atk:atk.highest-1, def:def.highest, givesBonus:true, bonusSlots:"none" },
            { level:level, atk:atk.highest, def:def.highest-1, givesBonus:true, bonusSlots:"none" },
        );

        // Locks - enemies with no attack

        enemyTier.easyLock.push(
            { level:0, atk:0, def:def.lowest, givesBonus:true, bonusSlots:"none" },
        );

        enemyTier.normalLock.push(
            { level:0, atk:0, def:def.avg, givesBonus:true, bonusSlots:"none" },
        );

        enemyTier.hardLock.push(
            { level:0, atk:0, def:def.highest, givesBonus:true, bonusSlots:"none" },
        );

        // Traps - enemies with no defense (must defend to defeat them)

        enemyTier.easyTrap.push(
            { level:0, atk:atk.lowest, def:"-", givesBonus:true, bonusSlots:"none", modifier:["trap"] },
        );

        enemyTier.normalTrap.push(
            { level:0, atk:atk.avg, def:"-", givesBonus:true, bonusSlots:"none", modifier:["trap"] },
        );

        enemyTier.hardTrap.push(
            { level:0, atk:atk.highest, def:"-", givesBonus:true, bonusSlots:"none", modifier:["trap"] },
        );

        generatedTiers[k]=enemyTier;

    }

    // Generate enemy bags
    for (var k in enemyModifiers) {
        enemyModifiersBag[k]={};
        enemyModifiersAll[k]=[];
        for (var j in enemyModifiers[k]) {
            let bag = random.createBag(enemyModifiers[k][j],true);    
            enemyModifiersBag[k][j]=bag;
            enemyModifiersAll[k].push(bag);
        }
    }

    for (var k in generatedTiers) {
        enemiesBag[k] = {};
        for (var j in generatedTiers[k])
            enemiesBag[k][j] = random.createBag(generatedTiers[k][j],true);
    }
    
    for (var k in bonuses) {
        bonusTypes.push(k);
        bonusBag[k]=random.createBag(bonuses[k],true);
    }
    bonusTypesBag=random.createBag(bonusTypes,true);

    for (var k in bonusSlots)
        bonusSlotsBag[k]=random.createBag(bonusSlots[k],true);
        
    this.generateEnemy=(tier,difficulty)=>{
        let enemy = Tools.clone(random.getFromBag(enemiesBag[tier][difficulty]));
        if (enemy.bonusSlots)
            enemy.bonusSlots=random.getFromBag(bonusSlotsBag[enemy.bonusSlots]);
        if (enemy.givesBonus) {
            let bonusType=random.getFromBag(bonusTypesBag);
            enemy.bonus=random.getFromBag(bonusBag[bonusType]);
            delete enemy.givesBonus;
        }
        if (enemy.modifier) {
            let
                modifier,
                newmodifier;
            if (enemy.modifier[1])
                modifier = random.getFromBag(enemyModifiersBag[enemy.modifier[0]][enemy.modifier[1]]);
            else
                modifier = random.getFromBag(random.getElement(enemyModifiersAll[enemy.modifier[0]]));
            newmodifier={
                label:random.getElement(modifier.label),
                placeholders:{}
            };
            for (var k in modifier.placeholders)
                newmodifier.placeholders[k]=random.getElement(modifier.placeholders[k]);
            enemy.modifier=newmodifier;
        }
        return enemy;
    }

}
