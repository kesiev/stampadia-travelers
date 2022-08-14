function loadHeroPerks(MOD) {
    return [
        {
            codex:"The Shield: +1 defense.",
            id:"safe", option:{ cost:MOD.LOWCOST, effects:[ { then: [ MOD.LOWDEFENSE ] } ] }
        },{
            codex:"The Flaming Attack: +1 attack if Fire element is in play.",
            id:"flaming", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"fire", operator:"greaterEqualThan", value:1 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Overwhelming Attack: +1 attack if Earth element is in play.",
            id:"overwhelming", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"earth", operator:"greaterEqualThan", value:1 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Cutting Attack: +1 attack if Air element is in play.",
            id:"cutting", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"air", operator:"greaterEqualThan", value:1 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Erosive Attack: +1 attack if Earth element is in play.",
            id:"erosive", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"water", operator:"greaterEqualThan", value:1 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Efficient: +1 mana.",
            id:"efficient", option:{ cost:MOD.LOWCOST, effects:[ { then: [ MOD.MIDGAIN ] } ] }
        },{
            codex:"The 1-Star combo: +1 defense if previous card has 1 Star.",
            id:"combo", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { subject:"previousCard", action:"check", attribute:"stars", operator:"equal", value:1 } ], then: [ MOD.LOWDEFENSE ] } ] }
        },{
            codex:"The 2-Stars combo: +1 attack if previous card has 2 Stars.",
            id:"combo", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { subject:"previousCard", action:"check", attribute:"stars", operator:"equal", value:2 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Banner Attack: +1 attack if 2 tier-1 banners are in play.",
            id:"banner", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"banner1", operator:"greaterEqualThan", value:2 } ], then: [ MOD.LOWATTACK ] } ] }
        },{
            codex:"The Banner Defense: +1 attack if 2 tier-2 banners are in play.",
            id:"banner", option:{ cost:MOD.LOWCOST, effects:[ {  if: [ { action:"check", attribute:"banner2", operator:"greaterEqualThan", value:2 } ], then: [ MOD.LOWDEFENSE ] } ] }
        }
    ]
}

if (typeof module != "undefined")
    module.exports={
        loadHeroPerks:loadHeroPerks
    };