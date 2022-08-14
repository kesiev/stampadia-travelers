function loadDungeonEvents(MOD) {
    return [
        {
            id:"eventBidirectionalTeleport",
            codex:"The Bidirectional Teleport: teleport on another place in the dungeon.",
            steps:[
                [
                    {
                        timing:20,
                        id:"room1",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },
                    {
                        timing:80,
                        id:"room2",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionEndShortText" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventTeleportTrap",
            codex:"The Teleport Trap: teleports on a room with an enemy.",
            steps:[
                [
                    {
                        timing:50,
                        id:"room1",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortText" }
                            ]
                        ]
                    },
                    {
                        timing:100,
                        id:"trapRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"enemy", enemy:[ ["lvl3","hard"] ] }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventHealer",
            codex:"The Healer: heals one of your cards.",
            steps:[
                [
                    {
                        timing:50,
                        id:"healerRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.heal
                            ]
                        ]
                    }
                ]
            ]   
        },{
            id:"eventShop",
            codex:"The Shop: exchange one card for another.",
            steps:[
                [
                    {
                        timing:20,
                        id:"shopperRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.shop
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventSwap",
            codex:"The Swapper: exchange one card in your hand for one in your deck.",
            steps:[
                [
                    {
                        timing:80,
                        id:"swapRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.swap
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventQuiet",
            codex:"The Quiet Place: a safe place.",
            steps:[
                [
                    {
                        timing:50,
                        id:"safeRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventRecover",
            codex:"The Recover: exchange one removed card for one in your deck.",
            steps:[
                [
                    {
                        timing:80,
                        id:"recoverRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.recover
                            ]
                        ]
                    }
                ]
            ]
        },
        /*
        TODO non si può fare.
        ,{
            id:"eventStatue",
            codex:"The Statue: gives a buff when visible.",
            steps:[
                [
                    {
                        timing:50,
                        id:"statueRoom",
                        trigger:["immediate"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                {
                                    type:"effectOnRoom",
                                    checkRoom:"statueRoom",
                                    amount:[1],
                                    resource:[ "attack", "defense", "mana" ],
                                    optionality:[{word:"may"}]
                                }
                            ]
                        ]
                    }
                ]
            ]
        },*/{
            id:"eventWeakness",
            codex:"The Weakness: step on something that makes you discard cards.",
            steps:[
                [
                    {
                        timing:30,
                        id:"weaknessRoom",
                        trigger:["onwalk"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.weakness
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventCamp",
            codex:"The Camp: discard elements to gain some stamina.",
            steps:[
                [
                    {
                        timing:20,
                        id:"campRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartBurnShortDescription" },
                                ACTIONMODELS.burn
                            ]
                        ]
                    }
                ],[
                    {
                        timing:20,
                        id:"campRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartWaterShortDescription" },
                                ACTIONMODELS.water
                            ]
                        ]
                    }
                ],[
                    {
                        timing:20,
                        id:"campRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartDigShortDescription" },
                                ACTIONMODELS.dig
                            ]
                        ]
                    }
                ],[
                    {
                        timing:20,
                        id:"campRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartBlowShortDescription" },
                                ACTIONMODELS.blow
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventDarkRitual",
            codex:"The Dark Ritual: remove cards to turn others.",
            steps:[
                [
                    {
                        timing:70,
                        id:"ritualRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.ritual
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventObservatory",
            codex:"The Observatory: discard a sequence of stars to gain a buff.",
            steps:[
                [
                    {
                        timing:50,
                        id:"observatoryRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.constellation
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventGambler",
            codex:"The Gambler: select a card, draw a card and compare mana values to win or lose a card from hand.",
            steps:[
                [
                    {
                        timing:50,
                        id:"observatoryRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.gambling
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventSacrifice",
            codex:"The Sacrifice: flip a card from hand to gain a buff.",
            steps:[
                [
                    {
                        timing:60,
                        id:"sacrificeRoom",
                        trigger:["choice"],
                        actions:[
                            [
                                { type:"text", textId:"missionStartShortDescription" },
                                ACTIONMODELS.sacrifice
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
}