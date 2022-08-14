function loadOverworldSideQuests(MOD) {
    return [
        {
            id:"sideTheReward",
            codex:"The Reward: eliminate an enemy and get your reward.",
            steps:[
                [
                    {
                        timing:MOD.timing.any,
                        id:"missionRoom",
                        atSide:[0],
                        atWholeCard:true,
                        type:"enemy",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                { type:"enemy", descriptionId:"enemyDescription", enemy:[ ["lvl3","normal"] ], avatar:AVATARMODELS.enemy },
                                { type:"text", textId:"enemyDefeat" },
                                { type:"reveal", id:"missionRoom" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.any,
                        id:"rewardRoom",
                        atCardId:"missionRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndDescription" },
                                ACTIONMODELS.heal,
                                { optionality:[{word:"must"}], type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheLostTechnique",
            codex:"The Lost Technique: beat the master and get a new card.",
            steps:[
                [
                    {
                        timing:MOD.timing.any,
                        id:"rewardRoom",
                        atCard:MOD.cards.pickable,
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"missionEndTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndDescription" },
                                { type:"enemy", descriptionId:"missionEndEnemyDescription", enemy:[ ["lvl4","hard"] ], avatar:AVATARMODELS.enemy },
                                { type:"text", textId:"missionEndEnemyDefeat" },
                                { type:"pick", isPickingAction:true, bannerType:["banner1","banner2","bannerChoice"] }
                            ]
                        ]
                    },{
                        timing:MOD.timing.secondhalf,
                        id:"missionRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                { type:"enemy", descriptionId:"missionStartEnemyDescription", enemy:[ ["lvl3","hard"] ], avatar:AVATARMODELS.enemy },
                                { type:"text", textId:"missionStartEnemyDefeat" },
                                { type:"reveal", id:"rewardRoom" }
                            ]
                        ]
                    },
                ]
            ]
        },{
            id:"sideTheTheft",
            codex:"The Theft: find the guarded treasure.",
            steps:[
                [
                    {
                        timing:MOD.timing.beginning,
                        id:"missionRoom",
                        atSide:[0],
                        atWholeCard:true,
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                { type:"gainTick", bar:["empty","A","A","B","A","A"], endBar:"B" },
                                { type:"onTick", ticks:[
                                    { on:"A", reveal:"halfMissionRoom" },
                                    { on:"B", reveal:"keeperRoom", remove:true }
                                ] }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.any,
                        id:"halfMissionRoom",
                        atCardId:"missionRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"halfMissionTitle",
                        actions:[
                            [
                                { type:"text", textId:"halfMissionStartDescription" },
                                { type:"enemy", descriptionId:"halfMissionEnemyDescription", enemy:[ ["lvl2","normal"] ], avatar:AVATARMODELS.guard },
                                { type:"text", textId:"halfMissionDefeat" },
                                { type:"remove" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.secondhalf,
                        id:"keeperRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"bossTitle",
                        actions:[
                            [
                                { type:"text", textId:"bossStartDescription" },
                                { type:"enemy", descriptionId:"enemyDescription", enemy:[ ["lvl3","normal"] ], avatar:AVATARMODELS.enemy },
                                ACTIONMODELS.heal,
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheChest",
            codex:"The Chest: a chest with a random treasure.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"chestRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" },
                                ACTIONMODELS.stopFightAnytime,
                                { type:"enemy", descriptionId:"missionChestDescription", enemy:[ ["lvl3","hardLock"], ["lvl4","hardLock"] ], avatar:AVATARMODELS.chest },
                                ACTIONMODELS.loot,
                                { optionality:[{word:"must"}], type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheTrap",
            codex:"The Trap: a trap that's hiding a random treasure.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"trapRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" },
                                ACTIONMODELS.stopFightAnytime,
                                { type:"enemy", descriptionId:"missionTrapDescription", enemy:[ ["lvl3","hardTrap"], ["lvl4","hardTrap"] ], avatar:AVATARMODELS.trap },
                                ACTIONMODELS.loot,
                                { optionality:[{word:"must"}], type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheForge",
            codex:"The Forge: use two opposing elements to forge a new card.",
            steps:[
                [
                    {
                        timing:MOD.timing.any,
                        id:"chestRoom",
                        atCard:MOD.cards.pickable,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.forge
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheHostage",
            codex:"The Hostage: save the hostage to gain a bonus in combat.",
            steps:[
                [
                    {
                        timing:MOD.timing.any,
                        id:"missionRoom",
                        atSide:[0],
                        atWholeCard:true,
                        type:"enemy",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                { type:"enemy", descriptionId:"enemyDescription", enemy:[ ["lvl3","hard"] ], avatar:AVATARMODELS.rudeEnemy },
                                { type:"text", textId:"enemyDefeat" },
                                { type:"reveal", id:"missionRoom" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.any,
                        id:"rewardRoom",
                        atCardId:"missionRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndFireDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "fire" ] ] ], content:LOOTMODELS.support },
                                { type:"remove" }
                            ],[
                                { type:"text", textId:"missionEndEarthDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "earth" ] ] ], content:LOOTMODELS.support },
                                { type:"remove" }
                            ],[
                                { type:"text", textId:"missionEndWaterDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "water" ] ] ], content:LOOTMODELS.support },
                                { type:"remove" }
                            ],[
                                { type:"text", textId:"missionEndWindDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "wind" ] ] ], content:LOOTMODELS.support },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },
    ];
}