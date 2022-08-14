function loadDungeonSideQuests(MOD) {
    return [
        {
            id:"sideTheLostTechnique",
            codex:"The Lost Technique: beat the master and get a new card.",
            steps:[
                [
                    {
                        atFarthestPickableRoom:true,
                        id:"treasureRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                {
                                    type:"pick",
                                    isPickingAction:true,
                                    card:"treasureRoom",
                                    checkRoom:"guardianRoom",
                                    bannerType:["banner1","banner2","bannerAny"]
                                }
                            ]
                        ]
                    },
                    {
                        atFarthestVisiblePositionFrom:"treasureRoom",
                        id:"guardianRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                {
                                    type:"enemy",
                                    enemy:[ ["lvl4","hard"] ]
                                },
                                {
                                    type:"text",
                                    textId:"missionEndEnemyShortDefeat"
                                }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheReward",
            codex:"The Reward: eliminate an enemy and get your reward.",
            steps:[
                [
                    {
                        timing:50,
                        id:"missionRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                { type:"enemy", enemy:[ ["lvl4","hardUnbuffed"] ] },
                                ACTIONMODELS.heal
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"sideTheTheft",
            codex:"The Theft: find the guarded treasure.",
            steps:[
                [
                    {
                        timing:50,
                        id:"missionRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                { type:"gainTick", bar:["empty","empty","empty"] },
                            ]
                        ]
                    },
                    {
                        timing:100,
                        id:"keeperRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"emptyIfNotTicked", checkRoom:"missionRoom" },
                                { type:"enemy", enemy:[ ["lvl4","normalUnbuffed"] ] },
                                ACTIONMODELS.heal
                            ]
                        ]
                    },
                ]
            ]
        },{
            id:"sideTheChest",
            codex:"The Chest: a chest with a random treasure.",
            steps:[
                [
                    {
                        timing:80,
                        id:"missionRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["lvl3","hardLock"], ["lvl4","hardLock"] ], avatar:AVATARMODELS.chest },
                                { type:"text", textId:"missionEndShortText" },
                                ACTIONMODELS.loot,
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
                        timing:80,
                        id:"missionRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["lvl3","hardTrap"], ["lvl4","hardTrap"] ], avatar:AVATARMODELS.chest },
                                { type:"text", textId:"missionEndShortText" },
                                ACTIONMODELS.loot,
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
                        atFarthestPickableRoom:true,
                        id:"treasureRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
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
                        timing:50,
                        id:"missionRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["lvl4","hardUnbuffed"] ] },
                                { type:"text", textId:"missionEndShortFireDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "fire" ] ] ], content:LOOTMODELS.support },
                            ],[
                                { type:"enemy", enemy:[ ["lvl4","hardUnbuffed"] ] },
                                { type:"text", textId:"missionEndShortWaterDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "water" ] ] ], content:LOOTMODELS.support },
                            ],[
                                { type:"enemy", enemy:[ ["lvl4","hardUnbuffed"] ] },
                                { type:"text", textId:"missionEndShortEarthDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "earth" ] ] ], content:LOOTMODELS.support },
                            ],[
                                { type:"enemy", enemy:[ ["lvl4","hardUnbuffed"] ] },
                                { type:"text", textId:"missionEndShortAirDescription" },
                                { optionality:[{word:"may"}], type:"action", type:"action", subtype:"helper", modifier:"buff", sequence:[ [ [ 1, "air" ] ] ], content:LOOTMODELS.support },
                            ]
                        ]
                    }
                ]
            ]
        }
       
    ]
}