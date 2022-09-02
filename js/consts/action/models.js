let
    LOOTMODELS={
        support:[ "attack", "defense", "mana" ],
        chest:[ "attack", "defense", "mana" ]
    },
    ACTIONMODELS={
        heal:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"heal",
            modifier:"flip",
            cards:[1],
            place:["inHand","inDiscardPile","inHandOrDiscard"],
        },
        shop:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"shop",
            modifier:"flip",
            cards:[1],
            place:["inHand","inDiscardPile"],
        },
        swap:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"swap",
            modifier:"upTo",
            bannerType:["banner1","banner2","bannerAny"],
            bannerTypeTo:["bannerAny"],
            cards:[1,2],
        },
        recover:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"recover",
            modifier:"upTo",
            bannerType:["banner1","banner2","bannerAny"],
            bannerTypeTo:["banner1","banner2","bannerChoice"],
            cards:[1,2],
        },
        weakness:{
            optionality:[{word:"must"}],
            type:"action",
            subtype:"discard",
            modifier:"exactly",
            bannerType:["banner1","banner2","bannerAny"],
            cards:[3,4,5],
        },
        bannerChallenge:{
            optionality:[{word:"must"}],
            type:"action",
            subtype:"bannerChallenge",
            modifier:["comparison"],
            comparison:["more","less","exactly"],
            cards:[2,3],
            cardsPlace:["inHand","inDiscardPile"],
            prizeCards:[1],
            prizePlace:["inHand","inDiscardPile","inHandOrDiscard"],
            punishmentCards:[1],
            punishmentPlace:["inHand","inDiscardPile"],
            bannerType:["banner1","banner2"]
        },
        burn:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"swapSequence",
            modifier:"draw",
            sequence:[
                [ [1, "fire"] ]
            ],
            cards:[ 2 ]
        },
        water:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"swapSequence",
            modifier:"draw",
            sequence:[
                [ [1, "water"] ]
            ],
            cards:[ 2 ]
        },
        dig:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"swapSequence",
            modifier:"draw",
            sequence:[
                [ [1, "earth"] ]
            ],
            cards:[ 2 ]
        },
        blow:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"swapSequence",
            modifier:"draw",
            sequence:[
                [ [1, "air"] ]
            ],
            cards:[ 2 ]
        },
        loot:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"loot",
            modifier:"buff",
            content:LOOTMODELS.chest
        },
        forge:{
            optionality:[{word:"may"}],
            isPickingAction:true,
            type:"action",
            subtype:"forge",
            modifier:"elements",
            bannerType:["banner1","banner2","bannerChoice"],
            sequence:[
                [ [ 1, "fire" ], [ 1, "air" ] ],
                [ [ 1, "earth" ], [ 1, "water" ] ],
                [ [ 1, "water" ], [ 1, "fire" ] ],
                [ [ 1, "air" ], [ 1, "earth" ] ],
            ]
        },
        stopFightAnytime:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"stopFight",
            modifier:"anytime",
        },
        ritual:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"ritual",
            modifier:"remove",
            cards:[1],
            prizeCards:[3,4,5]
        },
        curse:{
            optionality:[{word:"must"}],
            type:"action",
            subtype:"discardHand",
            modifier:"flip"
        },
        migration:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"migration",
            modifier:"swap"
        },
        constellation:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"constellation",
            modifier:"order",
            order:[ "ascending", "descending", "same" ],
            sequence:[
                [ "star1", "star1" ],
                [ "star1", "star2" ],
                [ "star2", "star1" ],
                [ "star2", "star2" ],
            ],
            content:LOOTMODELS.support
        },
        gambling:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"gambling",
            modifier:"drawCard",
            comparison:[ "higher", "lower", "same" ]
        },
        sacrifice:{
            optionality:[{word:"may"}],
            type:"action",
            subtype:"sacrifice",
            modifier:"drain",
            cards:[1],
            content:LOOTMODELS.support,
            place:["inHand","inDiscardPile","inHandOrDiscard"],
        },
    };