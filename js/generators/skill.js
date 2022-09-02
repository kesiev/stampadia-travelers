let SkillCrafter=function(settings) {

    const
        MARKETS={
            default:{
                //                0    1    2    3    4    5    6    7    8    9
                 RESOURCESELL:[   1,   1,0.65,0.65,0.60,0.60,0.55,0.55, 0.5, 0.5 ],
                COMBODISCOUNT:[   0,   1,   0,   1,   0,   1,   0,   1,   0,   1 ],
                  RESOURCEBUY:[   1,   1,   1,   1,   1,   1,   1,   1,   1,   1 ],
                 GIFTRESOURCE:[ 2.5, 2.5, 2.5, 2.5, 2.5, 2.5,   2, 1.5, 0.5,   0 ],
                  DRAINCOST:[   1,   1,   1,   2,   2,   3,   3,   3,   4,   4 ]
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
            drainCost: { mana: MARKET.DRAINCOST[level] },
            effects:effects
        }

    }

    function gain(attr,value) {
        if (value)
            return { action:"gain", attribute:attr, value: value };
        else
            return null;
    }

    function pickFrom(from, cards) {
        if (cards)
            return { action:"pickFrom", from:from, cards:cards };
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
            drainCost:base.drainCost,
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
            drainCost:base.drainCost,
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

    this.cardsCountConditioned=(id,type,count,subject,itm,level)=>{
        let base=getBase(level,[{sell:[level,itm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:"cardsCount", operator:"greaterEqualThan", subject:subject, value:count } ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources) ]
                } ]
            }]
        });
    }

    this.showConstellation=(id,type,constellation,place,to,cards,level)=>{
        let base=getBase(level,[{buy:[[constellation.length,"constellation"]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"checkConstellation", constellation:constellation, place:place } ],
                    then: [
                        gain(base.effects[0].gainResourceType,base.effects[0].gainResources),
                        pickFrom("infuse",cards)
                    ]
                } ]
            }]
        });
    }

    this.noShowConstellation=(id,type,constellation,place1,place2,item,level)=>{
        let 
            base=getBase(level,[{buy:[[constellation.length,"constellation"]],sell:[level,item]}]),
            gainResourcesPart=Math.ceil(base.effects[0].gainResources/2);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"checkConstellation", constellation:constellation, place:place1 } ],
                    then: [
                        gain(base.effects[0].gainResourceType,gainResourcesPart)
                    ]
                },{
                    if: [ { action:"checkConstellation", constellation:constellation, place:place2 } ],
                    then: [
                        gain(base.effects[0].gainResourceType,gainResourcesPart)
                    ]
                } ]
            }]
        });
    }

    this.flowConstellation=(id,type,constellation,place,item1,item2,level)=>{
        let
            base=getBase(level,[{sell:[level,item1]}]),
            secondConstellation=Tools.clone(constellation);
        secondConstellation[0]=secondConstellation[0]==1?2:1;
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[  
                    {
                        if: [
                            { action:"checkConstellation", constellation:constellation, place:place }
                        ],
                        then: [ gain(item1,base.effects[0].gainResources ) ]
                    },{
                        if: [
                            { action:"checkConstellation", constellation:secondConstellation, place:place }
                        ],
                        then: [ gain(item2,Math.ceil(base.effects[0].gainResources/3)) ]
                    }
                ]
            }]
        });
    }

    this.tierConstellation=(id,type,constellation,place,tiers,item,level)=>{
        
        let
            constellationFrom=Math.max(1,constellation.length-tiers),
            constellationTo=constellation.length,
            constellations=constellationTo-constellationFrom,
            base=getBase(level,[{buy:[[constellation.length,"constellation"]],sell:[level,item]}]),
            gainResourcesPart=Math.max(1,Math.floor((base.effects[0].gainResources)/(constellations+1))),
            effects=[
                {
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources-gainResourcesPart*tiers) ]
                }
            ];

        for (let i=constellationFrom;i<constellationTo;i++)
            effects.push({
                if: [
                    { action:"checkConstellation", constellation:constellation.slice(0,i+1), place:place }
                ],
                then: [ gain(item, gainResourcesPart) ]
            });

        effects.push({ then:[ pickFrom("infuse",constellation.length-1) ] });

        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:effects
            }]
        });
    }

    this.showConstellationElement=(id,type,constellation,element,elementSubject,place,to,cards,level)=>{
        let base=getBase(level,[{buy:[[1,"element"],[constellation.length,"constellation"]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            perkId:"of3_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"checkConstellation", constellation:constellation, place:place },
                        { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements, subject:elementSubject },
                    ],
                    then: [
                        gain(base.effects[0].gainResourceType,base.effects[0].gainResources),
                        pickFrom("infuse",cards)
                    ]
                } ]
            }]
        });
    }

    this.fullTransferConstellation=(id,type,constellation,place,from,to,cards,level)=>{
        let base=getBase(level,[{buy:[[level,from],[constellation.length,"constellation"]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"checkConstellation", constellation:constellation, place:place } ],
                    then: [
                        { action:"transfer", attribute:from, toAttribute:to },
                        gain(base.effects[0].payResourceType[0],base.effects[0].giftResource),
                        pickFrom("infuse",cards)
                    ]
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
            drainCost:base.drainCost,
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
            drainCost:base.drainCost,
            options:[
                { cost:base.effects[0].cost, effects:[ { then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ] } ] },
                { cost:base.effects[1].cost, effects:[ { then: [ gain(base.effects[1].gainResourceType,base.effects[1].gainResources ) ] } ] },
            ]
        });
    }

    this.bannerConditioned=(id,type,bannertype,subject,itm,level)=>{
        let base=getBase(level,[{sell:[level,itm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:bannertype, operator:"greaterEqualThan", value:base.effects[0].payBanners, subject:subject } ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources) ]
                } ]
            }]
        });
    }

    this.tierBanner=(id,type,bannertype,subject,tiers,item,level)=>{
        let
            base=getBase(level,[{sell:[level,item]}]),
            gainResourcesPart=Math.max(1,Math.floor((base.effects[0].gainResources)/(tiers+1))),
            effects=[
                {
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources-gainResourcesPart*tiers) ]
                }
            ];
        for (let i=0;i<tiers;i++)
            effects.push({
                if: [ { action:"check", attribute:bannertype, operator:"greaterEqualThan", value:i+1, subject:subject } ],
                then: [ gain(base.effects[0].gainResourceType,gainResourcesPart) ]
            });
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:effects
            }]
        });
    }

    this.flowBanner=(id,type,bannertype,item1,subject1,item2,subject2,level)=>{
        let
            base=getBase(level,[{sell:[level,item1]}]),
            secondBannerType=bannertype=="banner1"?"banner2":"banner1";
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[  
                    {
                        if: [
                            { action:"check", attribute:bannertype, operator:"greaterEqualThan", value:base.effects[0].payBanners, subject:subject1 }
                        ],
                        then: [ gain(item1,base.effects[0].gainResources ) ]
                    },{
                        if: [
                            { action:"check", attribute:secondBannerType, operator:"greaterEqualThan", value:base.effects[0].payBanners, subject:subject2 }
                        ],
                        then: [ gain(item2,Math.ceil(base.effects[0].gainResources/3)) ]
                    }
                ]
            }]
        });
    }

    this.wish=(id,type,item1,item2,level)=>{
        let
            loweredLevel=Math.max(1,level-2),
            base=getBase(level,[{sell:[level,item1]}]),
            base2=getBase(loweredLevel,[{sell:[loweredLevel,item2]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[  
                    {
                        if: [
                            { action:"may" }
                        ],
                        then: [ gain(item1,base.effects[0].gainResources ) ]
                    },{
                        if: [
                            { action:"or" }
                        ],
                        then: [ gain(item2,base2.effects[0].gainResources ) ]
                    }
                ]
            }]
        });
    }

    this.cardsCountConditionedMana=(id,type,subject,count,asitm,level)=>{
        let base=getBase(level,[{sell:[1,asitm]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [ { action:"check", attribute:"cardsCount", operator:"lessEqualThan", subject:subject, value:count } ],
                    then: [ gain("mana",base.effects[0].gainMana) ]
                } ]
            }]
        });
    }

    this.comboElements=(id,type,subject1,subject2,element,item,level)=>{
        let
            base=getBase(level,[{buy:[[2,"element"]],sell:[level,item]}]),
            payElements=Math.min(1,Math.floor(base.effects[0].payElements/2));
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            drainCost:base.drainCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:payElements, subject:subject1 },
                        { action:"check", attribute:element.consumedBy, operator:"greaterEqualThan", value:payElements, subject:subject2 }
                    ],
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources ) ]
                } ]
            }]
        });
    }

    this.tierElement=(id,type,element,subject,tiers,item,level)=>{
        let
            base=getBase(level,[{buy:[[Math.ceil(tiers/2),"element"]],sell:[level,item]}]),
            gainResourcesPart=Math.max(1,Math.floor((base.effects[0].gainResources)/(tiers+1))),
            effects=[
                {
                    then: [ gain(base.effects[0].gainResourceType,base.effects[0].gainResources-gainResourcesPart*tiers) ]
                }
            ];
        for (let i=0;i<tiers;i++)
            effects.push({
                if: [ { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:i+1, subject:subject } ],
                then: [ gain(base.effects[0].gainResourceType,gainResourcesPart) ]
            });
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            drainCost:base.drainCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:effects
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
            drainCost:base.drainCost,
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

    this.criticalElement=(id,type,element,subject,item,level)=>{
        let
            base=getBase(level,[{buy:[[1,"element"]],sell:[level,item]}]),
            halfGainResources = Math.ceil(base.effects[0].gainResources/2);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            drainCost:base.drainCost,
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
                            { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements, subject:subject },
                        ],
                        then: [ gain(base.effects[0].gainResourceType,halfGainResources ) ]
                    }
                ]
            }]
        });
    }

    this.flowElement=(id,type,element,item1,subject1,item2,subject2,level)=>{
        let base=getBase(level,[{sell:[level,item1]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            drainCost:base.drainCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[  
                    {
                        if: [
                            { action:"check", attribute:element.consumes, operator:"greaterEqualThan", value:base.effects[0].payElements, subject:subject1 },
                        ],
                        then: [ gain(item1,base.effects[0].gainResources ) ]
                    },{
                        if: [
                            { action:"check", attribute:element.element, operator:"greaterEqualThan", value:base.effects[0].payElements, subject:subject2 },
                        ],
                        then: [ gain(item2,Math.ceil(base.effects[0].gainResources/3) ) ]
                    }
                ]
            }]
        });
    }

    this.noElement=(id,type,cardscount,cardssubject,element,subject,item,level)=>{
        let base=getBase(level,[{buy:[[1,"element"]],sell:[level,item]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            element:element.element,
            drainCost:base.drainCost,
            perkId:"of1_"+element.element,
            acceptPerks:true,
            options:[{
                cost:base.effects[0].cost,
                effects:[ {
                    if: [
                        { action:"check", attribute:"cardsCount", operator:"greaterEqualThan", subject:cardssubject, value:cardscount },
                        { action:"check", attribute:element.consumedBy, subject:subject, operator:"equal", value:0 }
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
            drainCost:base.drainCost,
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
            drainCost:base.drainCost,
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

    this.legacyConstellation=(id,type,constellation,place,cards,to,level)=>{
        let base=getBase(level,[{buy:[[constellation.length,"constellation"]],sell:[level,to]}]);
        return finalize({
            id:id,
            type:type,
            gain:base.gain,
            drainCost:base.drainCost,
            options:[
                { cost:base.effects[0].cost, effects:[ {
                    if: [ { action:"checkConstellation", constellation:constellation, place:place } ],
                    then: [
                        { action:"gainTick", bar:["empty","1","0","1","1","2"], endBar:"0", attribute:base.effects[0].gainResourceType },
                        gain(base.effects[0].gainResourceType,base.effects[0].gainResources-1 ),
                        pickFrom("infuse",cards)
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
            drainCost:base.drainCost,
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
            drainCost:base.drainCost,
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
                if (fullconfig[k] === undefined)
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
            case "legacyConstellation":{
                skill = this.legacyConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place,fullconfig.cards,fullconfig.item,level);
                break;
            }
            case "baseElemental":{
                skill = this.baseElemental(fullconfig.id,type,fullconfig.item1,fullconfig.item2,fullconfig.element,level);
                break;
            }
            case "comboElements":{
                skill = this.comboElements(fullconfig.id,type,fullconfig.subject1,fullconfig.subject2,fullconfig.element,fullconfig.item,level);
                break;
            }
            case "criticalElement":{
                skill = this.criticalElement(fullconfig.id,type,fullconfig.element,fullconfig.subject,fullconfig.item,level);
                break;
            }
            case "tierElement":{
                skill = this.tierElement(fullconfig.id,type,fullconfig.element,fullconfig.subject,fullconfig.tiers,fullconfig.item,level);
                break;
            }
            case "flowElement":{
                skill = this.flowElement(fullconfig.id,type,fullconfig.element,fullconfig.item1,fullconfig.subject1,fullconfig.item2,fullconfig.subject2,level);
                break;
            }
            case "noElement":{
                skill = this.noElement(fullconfig.id,type,fullconfig.cardsCount,fullconfig.cardsSubject,fullconfig.element,fullconfig.subject,fullconfig.item,level);
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
            case "cardsCountConditionedMana":{
                skill = this.cardsCountConditionedMana(fullconfig.id,type,fullconfig.subject,fullconfig.count,fullconfig.asItem,level);
                break;
            }
            case "combined":{
                skill = this.combined(fullconfig.id,type,fullconfig.item1,fullconfig.item2,level);
                break;
            }
            case "bannerConditioned":{
                skill = this.bannerConditioned(fullconfig.id,type,fullconfig.bannerType,fullconfig.subject,fullconfig.item,level);
                break;
            }
            case "flowBanner":{
                skill = this.flowBanner(fullconfig.id,type,fullconfig.bannerType,fullconfig.item1,fullconfig.subject1,fullconfig.item2,fullconfig.subject2,level);
                break;
            }
            case "tierBanner":{
                skill = this.tierBanner(fullconfig.id,type,fullconfig.bannerType,fullconfig.subject,fullconfig.tiers,fullconfig.item,level);
                break;
            }
            case "cardsCountConditioned":{
                skill = this.cardsCountConditioned(fullconfig.id,type,fullconfig.cardsCount,fullconfig.subject,fullconfig.item,level);
                break;
            }
            case "fullTransfer":{
                skill = this.fullTransfer(fullconfig.id,type,fullconfig.from,fullconfig.to,level);
                break;
            }
            case "showConstellation":{
                skill = this.showConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place,fullconfig.to,fullconfig.cards,level);
                break;
            }
            case "noShowConstellation":{
                skill = this.noShowConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place1,fullconfig.place2,fullconfig.item,level);
                break;
            }
            case "flowConstellation":{
                skill = this.flowConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place,fullconfig.item1,fullconfig.item2,fullconfig.cards,level);
                break;
            }
            case "showConstellationElement":{
                skill = this.showConstellationElement(fullconfig.id,type,fullconfig.constellation,fullconfig.element,fullconfig.elementSubject,fullconfig.place,fullconfig.to,fullconfig.cards,level);
                break;
            }
            case "fullTransferConstellation":{
                skill = this.fullTransferConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place,fullconfig.from,fullconfig.to,fullconfig.cards,level);
                break;
            }
            case "tierConstellation":{
                skill = this.tierConstellation(fullconfig.id,type,fullconfig.constellation,fullconfig.place,fullconfig.tiers,fullconfig.item,level);
                break;
            }
            case "wish":{
                skill = this.wish(fullconfig.id,type,fullconfig.item1,fullconfig.item2,level);
                break;
            }
            default:{
                console.warn("Can't generate skill",fullconfig);
                debugger;
            }
        }

        return skill;
    }

    this.craftFromBag=(random,bag,type,level,extraconfig)=>{
        let config=random.getFromBagHaving(bag,{
            level:{
                none:true,
                inRange:level
            }
        });
        return this.craft(config,type,level,extraconfig);
    }

}

if (typeof module != "undefined")
    module.exports={
        SkillCrafter:SkillCrafter
    };