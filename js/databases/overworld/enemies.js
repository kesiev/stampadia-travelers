function loadOverworldUpperEnemies(MOD) {
    return [
        {
            id:"upperEnemyLvl1",
            codex:"The Weak Enemy: a weak enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.firsthalf,
                        id:"enemyRoom",
                        atSide:[0],
                        type:"enemy",
                        character:["enemy-lvl1-0"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl1","hard"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"upperEnemyLvl2",
            codex:"The Skilled Enemy: a skilled enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.firsthalf,
                        id:"enemyRoom",
                        atSide:[0],
                        type:"enemy",
                        character:["enemy-lvl2-0"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl2","hard"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        },
    ]
}

function loadOverworldMidEnemies(MOD) {
    return [
        {
            id:"midEnemyLvl3",
            codex:"The Strong Enemy: a very strong enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.middle,
                        id:"enemyRoom",
                        atSide:[0,1],
                        type:"enemy",
                        character:["enemy-lvl3-0"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl3","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        },
    ]
}

function loadOverworldLowerEnemies(MOD) {
    return [
        {
            id:"lowerEnemyLvl2",
            codex:"The Skilled Enemy: a skilled enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"enemyRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["enemy-lvl2-1"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl2","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        },{
            id:"lowerEnemyLvl4",
            codex:"The Very Strong Enemy: a very strong enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.secondhalf,
                        id:"enemyRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["enemy-lvl4-0"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl4","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        }, {
            id:"lowerEnemyLvl5",
            codex:"The Incredible Enemy: an incredible enemy.",
            steps:[
                [
                    {
                        timing:MOD.timing.beforeending,
                        id:"enemyRoom",
                        atSide:[1],
                        type:"enemy",
                        character:["enemy-lvl5-0"],
                        actions:[
                            [
                                { type:"text", characterValue:"intro" },
                                { type:"enemy", enemy:[ ["lvl5","normal"] ] },
                                { type:"text", characterValue:"defeat" },
                                { type:"reveal" }
                            ]
                        ]
                    }
                ]
            ]
        }
    ]
}
