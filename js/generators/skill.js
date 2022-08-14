let SkillCrafter=function(settings) {

    const
        MARKETS={
            default:{
                //                0    1    2    3    4    5    6    7    8    9
                 RESOURCESELL:[   1,   1,0.65,0.65,0.60,0.60,0.55,0.55, 0.5, 0.5 ],
                COMBODISCOUNT:[   0,   1,   0,   1,   0,   1,   0,   1,   0,   1 ],
                  RESOURCEBUY:[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1 ],
                 GIFTRESOURCE:[ 2.5, 2.5, 2.5, 2.5, 2.5, 2.5,   2, 1.5, 0.5,   0 ],
                  EXHAUSTCOST:[   1,   1,   1,   2,   2,   3,   3,   3,   4,   4 ]
            }
        };

    let
        MANALIMIT=9,
        MARKET=MARKETS[settings.market];

        
    function getBase(level,list) {
        let
            effects=[],
            discount=0,
            mana=0;
            
        list.forEach((action,index)=>{

            let
                actualSell,
                gainMana=0,
                sell = action.sell[0],
                buyResourceTypes = [],
                buyResourcesAmount = [];
                sellRatio = MARKET.RESOURCESELL[level]*settings.value[action.sell[1]],
                buyPrice = 0;
            
            if (action.buy)
                action.buy.forEach(buy=>{
                    buyResourceTypes.push(buy[1]);
                    buyResourcesAmount.push(buy[0]);
                    buyPrice += MARKET.RESOURCEBUY[level]*buy[0]*settings.value[buy[1]];
                });

            if (index == 0) {
                actualSell=(Math.max(1,level,sell)+buyPrice)/sellRatio;
                sell=Math.max(sell,actualSell);
            } else
                actualSell=sell;

            let
                sellPrice=sellRatio*actualSell-discount;            
                cost=sellPrice-buyPrice;

            if (cost!=Math.floor(cost)) {
                cost=Math.ceil(cost);
                mana++;
            }

            if (sell!=Math.floor(sell)) {
                sell=Math.floor(sell);
                mana--;
            }

            if (cost<1) {
                mana-=cost-1;
                cost=1;
            } else if (index == 0)
                mana+=cost;

            gainMana+=cost+discount+buyPrice+MARKET.GIFTRESOURCE[level]/MARKET.RESOURCESELL[level];

            if (gainMana!=Math.floor(gainMana)) {
                gainMana=Math.floor(gainMana);
                mana++;
            }

            let price={
                cost:{mana:cost},
                payBanners:Math.ceil(level/4),
                payElements:Math.ceil(level/5),
                payResourceType:buyResourceTypes,
                payResources:buyResourcesAmount,
                gainResourceType:action.sell[1],
                gainResources:sell,
                gainMana:gainMana,
                giftResource:Math.floor(MARKET.GIFTRESOURCE[level])
            };

            discount+=MARKET.COMBODISCOUNT[level];
            effects.push(price);
        });

        mana = Math.ceil(mana);

        if (mana>MANALIMIT) {
            effects[0].gainResources++;
            mana = MANALIMIT;
        }

        return {
            level:level,
            gain:{ mana:mana },
            exhaustCost: { mana: MARKET.EXHAUSTCOST[level] },
            effects:effects
        }

    }

    function gain(attr,value) {
        if (value)
            return { action:"gain", attribute:attr, value: value };
        else
            return null;
    }

    function pay(attr,value) {
        if (value)
            return { action:"pay", attribute:attr, value:value }
        else
            return null;
    }

    function finalize(side) {
        side.options.forEach(option=>{
            option.effects.forEach(effect=>{
                if (effect.then)
                    effect.then=effect.then.filter(action=>!!action);
                if (effect.if)
                    effect.if=effect.if.filter(condition=>!!condition);
            })
        });
        return side;
    }
    
    this.zeroTransfer=(id,type,from,to,level)=>{
        let base=getBase(level,[{buy:[[Math.ceil(level/3),from]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:base.effects[0].payResourceType[0], operator:"greaterEqualThan", value:base.effects[0].payResources } ],
                    then: [ { action:"set", attribute:base.effects[0].payResourceType[0], value:0 }, gain(base.effects[0].gainResourceType, base.effects[0].gainResources) ]
                } ]
            }]
        });
    }

    this.singleTransfer=(id,type,from,to,level)=>{
        let base=getBase(level,[{buy:[[1,from]],sell:[1,to]},{buy:[[1,from]],sell:[2,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            options:[
                {
                    cost:base.effects[0].cost,
                    effects:[ {
                        if: [ pay(base.effects[0].payResourceType[0],base.effects[0].payResources) ],
                        then: [ pay(base.effects[0].payResourceType[0],base.effects[0].payResources), gain(base.effects[0].gainResourceType,base.effects[0].gainResources) ]
                    } ]
                },
                {
                    cost:base.effects[1].cost,
                    effects:[ {
                        if: [ pay(base.effects[1].payResourceType[0],base.effects[1].payResources) ],
                        then: [ pay(base.effects[1].payResourceType[0],base.effects[1].payResources), gain(base.effects[1].gainResourceType,base.effects[1].gainResources) ]
                    } ]
                },
            ]
        });
    }

    this.finalAction=(id,type,itm,level)=>{
        let base=getBase(level,[{sell:[level,itm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:"playedCardsCount", operator:"greaterEqualThan", value:4 } ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources) ]
                } ]
            }]
        });
    }

    this.fullTransfer=(id,type,from,to,level)=>{
        let base=getBase(level,[{buy:[[level,from]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    then: [ { action:"transfer", attribute:from, toAttribute:to }, gain(base.effects[0].payResourceType[0],base.effects[0].giftResource) ]
                } ]
            }]
        });
    }

    this.combined=(id,type,itm1,itm2,level)=>{
        let base=getBase(level,[{sell:[level,itm1]},{sell:[level,itm2]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            options:[
                { cost:base.effects[0].cost, effects:[ { then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ] } ] },
                { cost:base.effects[1].cost, effects:[ { then: [ gain(base.effects[1].gainResourceType,base.effects[1].gainResources ) ] } ] },
            ]
        });
    }

    this.bannerConditioned=(id,type,itm,level)=>{
        let base=getBase(level,[{sell:[level,itm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:"banner2", operator:"greaterEqualThan", value:base.effects[0].payBanners } ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources) ]
                } ]
            }]
        });
    }

    this.startingMana=(id,type,asitm,level)=>{
        let base=getBase(level,[{sell:[1,asitm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:"playedCardsCount", operator:"lessEqualThan", value:3 } ],
                    then: [ gain("mana",base.effects[0].gainMana) ]
                } ]
            }]
        });
    }

    this.comboElements=(id,type,element,item,level)=>{
        let base=getBase(level,[{buy:[[2,"element"]],sell:[level,item]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            exhaustCost:base.exhaustCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements },
                        { action:"check", attribute:element.consumedBy, operator:"greaterEqualThan", value:base.effects[0].payElements }
                    ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ]
                } ]
            }]
        });
    }

    this.fullTransferElement=(id,type,element,from,to,level)=>{
        let base=getBase(level,[{buy:[[level,from],[1,"element"]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            exhaustCost:base.exhaustCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements },
                    ],
                    then: [ { action:"transfer", attribute:from, toAttribute:to }, gain(base.effects[0].payResourceType[0],base.effects[0].giftResource) ]
                } ]
            }]
        });
    }

    this.criticalElement=(id,type,element,item,level)=>{
        let
            base=getBase(level,[{buy:[[1,"element"]],sell:[level,item]}]),
            halfGainResources = Math.ceil(base.effects[0].gainResources/2);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            exhaustCost:base.exhaustCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[  
                    {
                        then: [ gain(base.effects[0].gainResourceType,halfGainResources ) ]
                    },
                    {
                        if: [
                            { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements },
                        ],
                        then: [ gain(base.effects[0].gainResourceType,halfGainResources ) ]
                    }
                ]
            }]
        });
    }

    this.noElement=(id,type,element,item,level)=>{
        let base=getBase(level,[{buy:[[1,"element"]],sell:[level,item]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            exhaustCost:base.exhaustCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"check", attribute:"playedCardsCount", operator:"greaterEqualThan", value:2 },
                        { action:"check", attribute:element.consumedBy, operator:"equal", value:0 }
                    ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ]
                } ]
            }]
        });
    }

    // --- Legacy cards

    this.legacy=(id,type,item,level)=>{
        let base=getBase(level,[{sell:[level,item]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            options:[
                { cost:base.effects[0].cost, effects:[ {
                    then: [
                        { action:"gainTick", bar:["empty","1","0","1","1","2"], endBar:"0", attribute:base.effects[0].gainResourceType },
                        gain(base.effects[0].gainResourceType,base.effects[0].gainResources-1 )
                    ]
                } ] }
            ]
        });
    }

    this.legacyElemental=(id,type,element,item,level)=>{
        let base=getBase(level,[{buy:[[1,"element"]],sell:[level,item]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            exhaustCost:base.exhaustCost,
            perkId:"of2_"+element.element,
            options:[
                { cost:base.effects[0].cost, effects:[ {
                    if:[
                        { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements },
                    ],
                    then: [
                        { action:"gainTick", bar:["empty","1","0","1","1","2"], endBar:"0", attribute:base.effects[0].gainResourceType },
                        gain(base.effects[0].gainResourceType,base.effects[0].gainResources-1 )
                    ]
                } ] }
            ]
        });
    }

    // --- Base cards

    this.base=(id,type,itm1,itm2,level)=>{
        let base=getBase(level,[{sell:[2,itm1]},{sell:[2,itm2]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            exhaustCost:base.exhaustCost,
            options:[
                { cost:base.effects[0].cost, effects:[ { then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ] } ] },
                { cost:base.effects[1].cost, effects:[ { then: [ gain(base.effects[1].gainResourceType,base.effects[1].gainResources ) ] } ] },
            ]
        });
    }

    this.baseElemental=(id,type,itm1,itm2,element,level)=>{
        let base=getBase(level,[{sell:[2,itm1]},{buy:[[1,"element"]],sell:[level,itm2]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            perkId:"of1_"+element.element,
            exhaustCost:base.exhaustCost,
            options:[
                { cost:base.effects[0].cost, effects:[ { then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ] } ] },
                { cost:base.effects[1].cost, effects:[ { if: [ { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[1].payElements } ], then: [ gain(base.effects[1].gainResourceType,base.effects[1].gainResources ) ] } ] },
            ]
        });
    }

    // Constructor by name

    this.craft=(config,type,level,extraconfig)=>{

        let
            skill,
            fullconfig=Tools.clone(config);

        if (extraconfig)
            for (let k in extraconfig)
                fullconfig[k]=extraconfig[k];

        // Base skills
        switch (config.model) {
            case "base":{
                skill = this.base(fullconfig.id,type,fullconfig.item1,fullconfig.item2,level);
                break;
            }
            case "legacy":{
                skill = this.legacy(fullconfig.id,type,fullconfig.item,level);
                break;
            }
            case "legacyElemental":{
                skill = this.legacyElemental(fullconfig.id,type,fullconfig.element,fullconfig.item,level);
                break;
            }
            case "baseElemental":{
                skill = this.baseElemental(fullconfig.id,type,fullconfig.item1,fullconfig.item2,fullconfig.element,level);
                break;
            }
            case "comboElements":{
                skill = this.comboElements(fullconfig.id,type,fullconfig.element,fullconfig.item,level);
                break;
            }
            case "criticalElement":{
                skill = this.criticalElement(fullconfig.id,type,fullconfig.element,fullconfig.item,level);
                break;
            }
            case "noElement":{
                skill = this.noElement(fullconfig.id,type,fullconfig.element,fullconfig.item,level);
                break;
            }
            case "fullTransferElement":{
                skill = this.fullTransferElement(fullconfig.id,type,fullconfig.element,fullconfig.from,fullconfig.to,level);
                break;
            }
            case "zeroTransfer":{
                skill = this.zeroTransfer(fullconfig.id,type,fullconfig.from,fullconfig.to,level);
                break;
            }
            case "singleTransfer":{
                skill = this.singleTransfer(fullconfig.id,type,fullconfig.from,fullconfig.to,level);
                break;
            }
            case "startingMana":{
                skill = this.startingMana(fullconfig.id,type,fullconfig.asItem,level);
                break;
            }
            case "combined":{
                skill = this.combined(fullconfig.id,type,fullconfig.item1,fullconfig.item2,level);
                break;
            }
            case "bannerConditioned":{
                skill = this.bannerConditioned(fullconfig.id,type,fullconfig.item,level);
                break;
            }
            case "finalAction":{
                skill = this.finalAction(fullconfig.id,type,fullconfig.item,level);
                break;
            }
            case "fullTransfer":{
                skill = this.fullTransfer(fullconfig.id,type,fullconfig.from,fullconfig.to,level);
                break;
            }
            default:{
                console.warn("Can't generate skill",fullconfig);
                debugger;
            }
        }

        return skill;
    }

}

if (typeof module != "undefined")
    module.exports={
        SkillCrafter:SkillCrafter
    };