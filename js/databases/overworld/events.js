function loadOverworldLowerEvents(MOD) {
    return [
        {
            id:"eventHealer",
            codex:"The Healer: heals one of your cards.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"healerRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text",  textId:"missionStartDescription" },
                                ACTIONMODELS.heal,
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            timing:MOD.timing.secondhalf,
            id:"eventBannerChallenge",
            codex:"The Banner Challenge: how many banners do you have?",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"challengeRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.bannerChallenge,
                                { type:"reveal" },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            timing:MOD.timing.secondhalf,
            id:"eventDarkRitual",
            codex:"The Dark Ritual: remove cards to turn others.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"ritualRoom",
                        atSide:[1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.ritual,
                                { type:"reveal" },
                                { type:"remove" }
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
}

function loadOverworldMidEvents(MOD) {
    return [
        {
            id:"eventShop",
            codex:"The Shop: exchange one card for another.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"shopperRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.shop,
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"swapRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.swap,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"swapRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.recover,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"safeRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ]
                        ]
                    }
                ]
            ]
        }/*
        
        TODO non si può fare.
        ,{
            id:"eventStatue",
            codex:"The Statue: gives a buff when visible.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"statueRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                {
                                    type:"effectOnRoom",
                                    checkRoom:"statueRoom",
                                    amount:[1],
                                    resource:[ "attack", "defense", "mana" ],
                                    optionality:[{word:"may"}]
                                },
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ]
                        ]
                    }
                ]
            ]
        }*/,{
            id:"eventWeakness",
            codex:"The Weakness: step on something that makes you discard cards.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"weaknessRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.weakness,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"campRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartBurnDescription" },
                                ACTIONMODELS.burn,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ],[
                                { type:"text", textId:"missionStartWaterDescription" },
                                ACTIONMODELS.water,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ],[
                                { type:"text", textId:"missionStartDigDescription" },
                                ACTIONMODELS.dig,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ],[
                                { type:"text", textId:"missionStartBlowDescription" },
                                ACTIONMODELS.blow,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventMigration",
            codex:"The Migration: swap 2 cards on map.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"teleportRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.migration,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"observatoryRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.constellation,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"eventGambler",
            codex:"The Gambler: select a card, draw a card, and compare mana values to win or lose a card from hand.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"gamblerRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.gambling,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
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
                        timing:MOD.timing.middle,
                        id:"gamblerRoom",
                        atSide:[0,1],
                        type:"text",
                        sideTitleId:"missionStartTitle",
                        actions:[
                            [
                                { type:"text", textId:"missionStartDescription" },
                                ACTIONMODELS.sacrifice,
                                { type:"reveal" },
                                { type:"remove", ifPossible:true }
                            ]
                        ]
                    }
                ]
            ]
        }

    ]
}
