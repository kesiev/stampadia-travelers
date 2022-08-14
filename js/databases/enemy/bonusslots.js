function loadEnemyBonusSlots(MOD) {
    return {
        none:[
            { level:false, attack:false, defense:false },
        ],
        all:[
            { level:false, attack:true, defense:true },
        ],
        balanced:[
            { level:false, attack:true, defense:false },
            { level:false, attack:true, defense:true },
            { level:false, attack:true, defense:true },
        ]
    }
}