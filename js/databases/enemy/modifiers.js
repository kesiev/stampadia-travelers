function loadEnemyModifiers(MOD) {
    return {
        debuff:{
            attack:[
                {
                    codex:"The Elemental Weakness: weaker attack when an element is in play.",
                    label:["fearElement"],
                    placeholders:{
                        element:["earth","water","air","fire"],
                        elementLimit:[1]
                    }
                },{
                    codex:"The Ranged Weakness: weaker attack when a number of cards is in play.",
                    label:["close"],
                    placeholders:{
                        actionsLimit:[4]
                    }
                },{
                    codex:"The Banner Weakness: weaker attack when a number of banner cards is in play.",
                    label:["unsecure"],
                    placeholders:{
                        cardsLimit:[2],
                        banner:["banner1","banner2"]
                    }
                }
            ],
            defense:[
                {
                    codex:"The Elemental Vulnerability: weaker defense when an element is in play.",
                    label:["weakToElement"],
                    placeholders:{
                        element:["earth","water","air","fire"],
                        elementLimit:[1]
                    }
                },{
                    codex:"The Ranged Vulnerability: weaker defense when a number of cards is in play.",
                    label:["slowness"],
                    placeholders:{
                        actionsLimit:[4]
                    }
                },{
                    codex:"The Banner Vulnerability: weaker defense when a number of banner cards is in play.",
                    label:["charmed"],
                    placeholders:{
                        cardsLimit:[2],
                        banner:["banner1","banner2"]
                    }
                }
            ]
        },
        buff:{
            attack:[
                {
                    codex:"The Elemental Attack: stronger attack when an element is in play.",
                    label:["affinityElement"],
                    placeholders:{
                        element:["earth","water","air","fire"],
                        elementLimit:[1]
                    }
                },{
                    codex:"The Ranged Attack: stronger attack when a number of cards is in play.",
                    label:["ranged"],
                    placeholders:{
                        actionsLimit:[4]
                    }
                },{
                    codex:"The Banner Attack: stronger attack when a number of banner cards is in play.",
                    label:["envy"],
                    placeholders:{
                        cardsLimit:[2],
                        banner:["banner1","banner2"]
                    }
                }
            ],
            defense:[
                {
                    codex:"The Elemental Defense: stronger defense when an element is in play.",
                    label:["strongToElement"],
                    placeholders:{
                        element:["earth","water","air","fire"],
                        elementLimit:[1],
                        attackBonus:[1]
                    }
                },{
                    codex:"The Ranged Defense: stronger defense when a number of cards is in play.",
                    label:["rapidity"],
                    placeholders:{
                        actionsLimit:[4]
                    }
                },{
                    codex:"The Banner Defense: stronger defense when a number of banner cards is in play.",
                    label:["cautious"],
                    placeholders:{
                        cardsLimit:[2],
                        banner:["banner1","banner2"]
                    }
                }
            ]
        },
        trap:{
            all:[
                {
                    codex:"The Trap: must defend to eliminate the enemy.",
                    label:["trap"]
                }
            ]
        }
    };
}