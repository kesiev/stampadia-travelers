function loadDungeonMainQuests(MOD) {
    return [
        {
            id:"mainTheCurse",
            codex:"The Curse: face a terrible curse before facing the evil one.",
            steps:[
                [
                    {
                        timing:0,
                        atStartingCard:true,
                        id:"entranceRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },{
                        timing:100,
                        id:"curseRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"text", textId:"curseShortDescription" },
                                ACTIONMODELS.curse
                            ]
                        ]
                    },{
                        atFarthestVisiblePositionFrom:"curseRoom",
                        id:"bossRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"emptyIfNotRoom", checkRoom:"curseRoom" },
                                { type:"enemy", enemy:[ ["boss","normalUnbuffed"] ] },
                                { type:"text", textId:"bossDefeatShortText" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"mainTheBoss",
            codex:"The Boss: eliminate the bad guy and leave the dungeon.",
            steps:[
                [
                    {
                        timing:0,
                        atStartingCard:true,
                        id:"entranceRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },
                    {
                        timing:100,
                        id:"bossRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["boss","normalUnbuffed"] ] },
                                { type:"text", textId:"bossDefeatShortText" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"mainTheMissingKey",
            codex:"The Missing Key: find the key and slay the evil one.",
            steps:[
                [
                    {
                        timing:0,
                        atStartingCard:true,
                        id:"entranceRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },
                    {
                        timing:100,
                        id:"keyRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"keyFoundShortDescription" }
                            ]
                        ]
                    },
                    {
                        atFarthestVisiblePositionFrom:"keyRoom",
                        id:"bossRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"emptyIfNotRoom", checkRoom:"keyRoom" },
                                { type:"enemy", enemy:[ ["boss","normalUnbuffed"] ] },
                                { type:"text", textId:"bossDefeatShortText" }
                            ]
                        ]
                    },
                ]
            ]
        },{
            id:"mainTheGeneral",
            codex:"The General: fight a boss and his general.",
            steps:[
                [
                    {
                        timing:0,
                        atStartingCard:true,
                        id:"entranceRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },{
                        timing:100,
                        id:"generalRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["lvl2","normalUnbuffed"] ] },
                                { type:"text", textId:"generalDefeatShortText" }
                            ]
                        ]
                    },
                    {
                        atFarthestVisiblePositionFrom:"generalRoom",
                        id:"bossRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"emptyIfNotRoom", checkRoom:"generalRoom" },
                                { type:"enemy", enemy:[ ["boss","normalUnbuffed"] ] },
                                { type:"text", textId:"bossDefeatShortText" }
                            ]
                        ]
                    },
                    
                ]
            ]
        },{
            id:"mainTheFinalForm",
            codex:"The Final Form: beat the evil one... and his final form!",
            steps:[
                [
                    {
                        timing:0,
                        atStartingCard:true,
                        id:"entranceRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },{
                        atFarthestPickableRoom:true,
                        id:"initialFormBossRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                // As picking action, since it manipulates the special pickable card as 2nd stage boss room.
                                { isPickingAction:true, type:"enemy", enemy:[ ["lvl4","normalUnbuffed"] ] },
                                { type:"text", textId:"initalFormDefeatShortText" }
                            ]
                        ]
                    },{
                        atFarthestPickableRoom:true,
                        closeExits:true,
                        id:"finalBossRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["boss","normalUnbuffed"] ] },
                                { type:"text", textId:"finalFormDefeatShortText" }
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
}
