function loadOverworldMainQuests(MOD) {
    return [
        {
            id:"mainTheMissingKey",
            codex:"The Missing Key: find the key and slay the evil one.",
            steps:[
                [
                    {
                        timing:MOD.timing.beginning,
                        id:"firstRoom",
                        atCard:MOD.cards.starting,
                        atWholeCard:true,
                        atSide:[0],
                        sideTitleId:"missionStartTitle",
                        type:"text",
                        isStartingSide:true,
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.ending,
                        id:"exitRoom",
                        atCard:MOD.cards.starting,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndingTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndingText" },
                                { type:"remove" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.middle,
                        id:"keyRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"keyFoundTitle",
                        actions:[
                            [
                                { type:"text", textId:"keyFoundDescription" },
                                { type:"reveal", id:"bossRoom" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"bossRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["villain"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["boss","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal", id:"exitRoom" },
                                { type:"remove" }
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
                        timing:MOD.timing.beginning,
                        id:"firstRoom",
                        atCard:MOD.cards.starting,
                        atWholeCard:true,
                        atSide:[0],
                        sideTitleId:"missionStartTitle",
                        type:"text",
                        isStartingSide:true,
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.ending,
                        id:"exitRoom",
                        atCard:MOD.cards.starting,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndingTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndingText" },
                                { type:"remove" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.ending,
                        id:"bossRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["villain"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["boss","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal", id:"exitRoom" },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"mainTheGeneral",
            codex:"The General: fight a boss and his general.",
            steps:[
                [
                    {
                        timing:MOD.timing.beginning,
                        id:"firstRoom",
                        atCard:MOD.cards.starting,
                        atWholeCard:true,
                        atSide:[0],
                        sideTitleId:"missionStartTitle",
                        type:"text",
                        isStartingSide:true,
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.ending,
                        id:"exitRoom",
                        atCard:MOD.cards.starting,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndingTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndingText" },
                                { type:"remove" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.middle,
                        id:"generalRoom",
                        atSide:[1],
                        type:"enemy",
                        sideTitleId:"generalFoundTitle",
                        actions:[
                            [
                                { type:"text", textId:"generalIntroText" },
                                { type:"enemy", enemy:[ ["lvl3","hard"] ], descriptionId:"generalDescription", avatar:AVATARMODELS.enemy },
                                { type:"text", textId:"generalDefeatText" },
                                { type:"remove" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"bossRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["villain"],
                        actions:[
                            [
                                { type:"emptyIfRoom", checkRoom:"generalRoom" },
                                { type:"enemy", descriptionId:"bossDescription", enemy:[ ["boss","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal", id:"exitRoom" },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"mainTheFinalForm",
            codex:"The Final Form: beat the evil one... and his final form!",
            steps:[
                [
                    {
                        timing:MOD.timing.beginning,
                        id:"firstRoom",
                        atCard:MOD.cards.starting,
                        atWholeCard:true,
                        atSide:[0],
                        sideTitleId:"missionStartTitle",
                        type:"text",
                        isStartingSide:true,
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" }
                            ]
                        ]
                    },
                    {
                        timing:MOD.timing.ending,
                        id:"exitRoom",
                        atCard:MOD.cards.starting,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndingTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndingText" },
                                { type:"remove" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"bossRoom",
                        atSide:[0],
                        type:"enemy",
                        character:["villain"],
                        sideTitleId:"initialFormTitle",
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl4","hard"] ] },
                                { type:"text", characterValue:"initialFormDefeat" },
                                { type:"reveal", id:"finalFormRoom" },
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"finalFormRoom",
                        atSide:[1],
                        atCardId:"bossRoom",
                        type:"enemy",
                        character:["villain"],
                        actions:[
                            [
                                { type:"text", characterValue:"finalFormIntro" },
                                { type:"enemy", enemy:[ ["boss","normal"] ] },
                                { type:"text", characterValue:"finalFormDefeat" },
                                { type:"reveal", id:"exitRoom" },
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"mainTheCurse",
            codex:"The Curse: face a terrible curse before facing the evil one.",
            steps:[
                [
                    {
                        timing:MOD.timing.beginning,
                        id:"firstRoom",
                        atCard:MOD.cards.starting,
                        atWholeCard:true,
                        atSide:[0],
                        sideTitleId:"missionStartTitle",
                        type:"text",
                        isStartingSide:true,
                        actions:[
                            [
                                { type:"text", textId:"missionStartText" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"exitRoom",
                        atCard:MOD.cards.starting,
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionEndingTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionEndingText" },
                                { type:"remove" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.secondhalf,
                        id:"curseRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"curseTitle",
                        actions:[
                            [
                                { type:"text", textId:"curseDescription" },
                                ACTIONMODELS.curse,
                                { type:"reveal", id:"bossRoom" },
                                { type:"remove" }
                            ]
                        ]
                    },{
                        timing:MOD.timing.ending,
                        id:"bossRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["villain"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["boss","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal", id:"exitRoom" },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
}