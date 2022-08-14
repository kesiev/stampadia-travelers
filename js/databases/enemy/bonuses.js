function loadEnemyBonuses(MOD) {
    return {
        balanced:[
            { level:0, attack:0, defense:0 },
            { level:0, attack:1, defense:-1 },
            { level:0, attack:-1, defense:1 },
        ],
        buff:[
            { level:0, attack:1, defense:0 },
            { level:0, attack:0, defense:1 },
            { level:0, attack:1, defense:1 },
        ],
        debuff:[
            { level:0, attack:-1, defense:0 },
            { level:0, attack:0, defense:-1 },
            { level:0, attack:-1, defense:-1 },
        ]
    }
}