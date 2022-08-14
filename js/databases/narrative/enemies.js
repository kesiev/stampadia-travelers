function loadNarrativeEnemies(MOD) {
    return {
        lvl1:[
            {
                codex:"The Goblin: a small weak creature with pointy ears.",
                id:[ "goblin" ], avatar:[ AVATARMODELS.goblin ]
            },{
                codex:"The Feline: a (usually) friendly feline creature.",
                id:[ "feline" ], avatar:[ AVATARMODELS.feline ]
            },{
                codex:"The Zombie: the undead creature.",
                id:[ "zombie" ], avatar:[ AVATARMODELS.zombie ]
            },
        ],
        lvl2:[
            {
                codex:"The Recruit: a young soldier.",
                id:[ "recruit" ], avatar:[ AVATARMODELS.enemy ]
            },{
                codex:"The Mercenary: someone paid good money to kill you.",
                id:[ "mercenary" ], avatar:[ AVATARMODELS.rudeEnemy ]
            },{
                codex:"The Skeleton: weaponized bones.",
                id:[ "skeleton" ], avatar:[ AVATARMODELS.skeleton ]
            }
        ],
        lvl3:[
            {
                codex:"The Guard: a city guard.",
                id:[ "guard" ], avatar:[ AVATARMODELS.guard ]
            },{
                codex:"The Ghost: a scary ethereal creature.",
                id:[ "ghost" ], avatar:[ AVATARMODELS.ghost ]
            },{
                codex:"The Dwarf: a pretty aggressive little guy.",
                id:[ "dwarf" ], avatar:[ AVATARMODELS.dwarf ]
            },
        ],
        lvl4:[
            {
                codex:"The Guards Leader: the leader of the city guards.",
                id:[ "guardsLeader" ], avatar:[ AVATARMODELS.guard ]
            },{
                codex:"The Mage: a mage with huge powers.",
                id:[ "mage" ], avatar:[ AVATARMODELS.mage ]
            },{
                codex:"The Executioner: a head-cutting professional.",
                id:[ "executioner" ], avatar:[ AVATARMODELS.executioner ]
            }
        ],
        lvl5:[
            {
                codex:"The Golem: a huge monster.",
                id:[ "golem" ], avatar:[ AVATARMODELS.golem ]
            },{
                codex:"The Magic Armor: a magic sentient armor.",
                id:[ "magicArmor" ], avatar:[ AVATARMODELS.magicDarkArmor, AVATARMODELS.magicLightArmor ]
            },{
                codex:"The Stampadian Guardian: an enemy from Stampadia coming back.",
                id:[ "stampadianGuardian" ], avatar:[ AVATARMODELS.stampadianGuardian ]
            }

        ]
    };
}
