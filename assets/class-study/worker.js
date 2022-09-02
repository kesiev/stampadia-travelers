const { workerData, parentPort } = require('worker_threads');

let
    DEBUG=workerData.DEBUG,
    config=workerData.config,
    cards=workerData.cards,
    lookForAttack=workerData.lookForAttack;

function clone(a) {
    return JSON.parse(JSON.stringify(a));
}

function capValue(to,cap) {
    if (cap !== undefined)
        if (to>cap) return cap;
        else return to;
    else
        return to;
}

function play(cards,config,data,results,action,card,side,tooption) {

    if (data)
        data = clone(data);
    else {
        results={
            sequenceIndex:{
                recoverable:{},
                unrecoverable:{}
            },
            count:{
                recoverable:{},
                unrecoverable:{}
            },
            highest:{
                recoverable:{},
                unrecoverable:{}
            },
        };
        data={
            logs:[],
            cardsToPlay:config.handSize,
            playedCardsCount:0,
            sequenceIndexList:[],
            playedCards:[],
            playedActionCards:[],
            playedResourcesCards:[],
            playedInfuseCards:[],
            started:false,
            drainCost:{
                mana:0
            },
            resources:{
                stars:0,
                earth:0,
                fire:0,
                water:0,
                air:0,
                banner1:0,
                banner2:0,
                mana:0,
                attack:0,
                defense:0,
                playedCardsCount:0
            }
        };
    }

    // Basic card actions

    function gainResources(side) {
        let gained=false;

        for (let k in side.gain) {
            let value = side.gain[k];
            if (data.resources[k] === undefined) {
                console.warn("Resource not managed",k);
                debugger;
            }
            if (config.resourcesLimit[k] !== undefined)
                if (data.resources[k]+value>=config.resourcesLimit[k])
                    value=config.resourcesLimit[k]-data.resources[k];
            data.resources[k]+=value;
            if (DEBUG) data.logs.push(" | Gained "+value+" "+k+" (on card: "+side.gain[k]+" "+k+" - total: "+data.resources[k]+" "+k+")");
            if (value) gained=true;
        }

        return gained;
    }

    function performActions(side,tooption) {
        let options=side.options;

        if (tooption<options.length) {

            for (let i=0;i<=tooption;i++) {
                let
                    option = options[i];

                // Pay option
                for (let k in option.cost) {
                    let value=option.cost[k];
                    if (data.resources[k]<value)
                        return false;
                    else {
                        data.resources[k]-=value;
                        if (DEBUG) data.logs.push(" | Paid "+value+" "+k+" (total: "+data.resources[k]+" "+k+")");
                    }
                }

                // Perform option
                for (let j=0;j<option.effects.length;j++) {
                    let
                        effect = option.effects[j],
                        paid={},
                        canPerform = true;

                    for (let c in effect.if) {
                        let
                            condition=effect.if[c],
                            val;


                        
                        if (condition.attribute) {

                            switch (condition.subject) {
                                case "previousCard":{
                                    let
                                        previousCard = data.playedActionCards[data.playedActionCards.length-2];
                                    if (!previousCard) {
                                        val = 0;
                                        canPerform = false;
                                        if (DEBUG) data.logs.push(" | Failed condition: No previous card.");
                                    } else {
                                        let previousCardSide = cards[previousCard[0]].sides[previousCard[1]];
                                        switch (condition.attribute) {
                                            case "stars":{
                                                val=previousCardSide.options.length;
                                                break;
                                            }
                                            default:{
                                                console.warn("Previous card resource not managed",condition.attribute);
                                            }
                                        }
                                    }
                                    break;
                                }
                                // In Play
                                default:{
                                    switch (condition.attribute) {
                                        case "banner1":{
                                            let actionBannerBonus=data.playedActionCards[data.playedActionCards.length-1][0][1]==0?1:0;
                                            val=data.resources.banner1+actionBannerBonus;
                                            if (!canPerform && DEBUG) data.logs.push(" | Counting banners 1: "+data.resources.banner1+" + "+actionBannerBonus+" = "+val+" banners");
                                            break;
                                        }
                                        case "banner2":{
                                            let actionBannerBonus=data.playedActionCards[data.playedActionCards.length-1][0][1]==1?1:0;
                                            val=data.resources.banner2+actionBannerBonus;
                                            if (!canPerform && DEBUG) data.logs.push(" | Counting banners 2: "+data.resources.banner2+" + "+actionBannerBonus+" = "+val+" banners");
                                            break;
                                        }
                                        default:{
                                            val=data.resources[condition.attribute];
                                        }
                                    }
                                }
                            }

                            if (val === undefined) {
                                console.warn("Resource not managed",condition.attribute);
                                debugger;
                            }
                        }

                        console.log(condition.action);
                        if (canPerform)
                            switch (condition.action) {
                                case "pay":{
                                    paid[condition.attribute]=true;
                                    canPerform=canPerform&&(data.resources[condition.attribute]>=condition.value);
                                    if (!canPerform && DEBUG) data.logs.push(" | Failed condition: Cannot pay "+condition.value+" "+condition.attribute+" (actual: "+data.resources[condition.attribute]+" "+condition.attribute+")");
                                    break;
                                }
                                case "check":{
                                    switch (condition.operator) {
                                        case "lessEqualThan":{
                                            canPerform=canPerform && (val<=condition.value);
                                            if (!canPerform && DEBUG) data.logs.push(" | Failed condition: "+val+" "+condition.attribute+" >= "+condition.value+" "+condition.attribute);
                                            break;
                                        }
                                        case "greaterEqualThan":{
                                            canPerform=canPerform && (val>=condition.value);
                                            if (!canPerform && DEBUG) data.logs.push(" | Failed condition: "+val+" "+condition.attribute+" <= "+condition.value+" "+condition.attribute);
                                            break;
                                        }
                                        case "equal":{
                                            canPerform=canPerform && (val==condition.value);
                                            if (!canPerform && DEBUG) data.logs.push(" | Failed condition: "+val+" "+condition.attribute+" <= "+condition.value+" "+condition.attribute);
                                            break;
                                        }
                                        default:{
                                            console.warn("Unsupported operator",condition);
                                            debugger;
                                            break;
                                        }
                                    }
                                    break;
                                }
                                default:{
                                    console.warn("Unsupported condition", condition);
                                    debugger;
                                }
                            }

                        if (!canPerform) break;
                    }
                 
                    if (canPerform) {
                        for (let c in effect.then) {
                            let
                                action=effect.then[c];

                            switch (action.action) {
                                case "gain":{
                                    let
                                        val = data.resources[action.attribute]+action.value,
                                        newVal = capValue(val,config.resourcesLimit[action.attribute]);
                                    if (DEBUG) data.logs.push(" | Effect: "+data.resources[action.attribute]+" "+action.attribute+" + "+action.value+" = "+newVal+" (uncapped value: "+val+")");
                                    data.resources[action.attribute]=newVal;
                                    break;
                                }
                                case "set":{
                                    let
                                        val = action.value,
                                        newVal = capValue(val,config.resourcesLimit[action.attribute]);
                                    if (DEBUG) data.logs.push(" | Effect: "+data.resources[action.attribute]+" "+action.attribute+" = "+action.value+" = "+newVal+" (uncapped value: "+val+")");
                                    data.resources[action.attribute]=newVal;
                                    break;
                                }
                                case "pay":{
                                    if (!paid[action.attribute]) {
                                        console.warn("Add pay in condition too", action);
                                        debugger;
                                    } else
                                        delete paid[action.attribute];
                                    data.resources[action.attribute]-=action.value;
                                    if (data.resources[action.attribute]<0) {
                                        console.warn("Missing if rule to prevent <0", action);
                                        debugger;
                                        return;
                                    }
                                    break;
                                }
                                case "transfer":{
                                    let
                                        val = data.resources[action.toAttribute]+data.resources[action.attribute],
                                        newVal = capValue(val,config.resourcesLimit[action.attribute]);
                                    if (DEBUG) {
                                        data.logs.push(" | Effect: "+data.resources[action.attribute]+" "+action.attribute+" -> "+data.resources[action.toAttribute]+" "+action.toAttribute+" = "+newVal+" "+action.toAttribute+" (uncapped value: "+val+")");
                                        data.logs.push("   |  Effect: "+action.attribute+" = 0");
                                    }
                                    data.resources[action.attribute]=0;
                                    data.resources[action.toAttribute]=newVal;
                                    break;
                                }
                                case "multiplyBy":{
                                    let
                                        val = data.resources[action.attribute]*action.value,
                                        newVal = capValue(val,config.resourcesLimit[action.attribute]);
                                    if (DEBUG) data.logs.push(" | Effect: "+data.resources[action.attribute]+" "+action.attribute+" * "+action.value+" = "+newVal+" (uncapped value: "+val+")");
                                    data.resources[action.attribute]=newVal;
                                    break;
                                }
                                case "gainTick":{
                                    if (DEBUG) data.logs.push(" | Effect: (Gained a tick)");
                                    break;
                                }
                                default:{
                                    console.warn("Unsupported action", action);
                                    debugger;
                                }
                            }
                        }
                    } else if (DEBUG) data.logs.push(" | Can't trigger option "+j);
                
                }
                
            }

        } else return false;

        return true;

    }

    // Deck management

    function removeCard(card,side) {
        if ( data.playedCards.indexOf(card)==-1) {
            data.sequenceIndexList.push(card+"-"+side);
            data.resources.playedCardsCount++;
            data.cardsToPlay--;
            data.playedCardsCount++;
            data.playedCards.push(card);
        }
    }

    function addActionCard(card,side) {
        let cardSide=cards[card].sides[side];
        for (let k in cardSide.drainCost)
            if (data.drainCost[k] === undefined) {
                console.warn("Missing drain resource",k);
                debugger;
            } else data.drainCost[k]+=cardSide.drainCost[k];
        if (cardSide.element)
            if (data.resources[cardSide.element] === undefined)
                console.warn("Unsupported element",cardSide.element);
            else
                data.resources[cardSide.element]++;
        data.resources.stars+=cardSide.options.length;
        removeCard(card,side);
        data.playedActionCards.push([card,side]);
    }

    function addResourceCard(card,side,countbanner) {
        removeCard(card,side);
        data.playedResourcesCards.push([card,side]);
        if (countbanner)
            if (side == 0) data.resources.banner1++;
            else data.resources.banner2++;
    }

    function addInfuseCard(card,side) {
        let cardSide=cards[card].sides[side];
        removeCard(card,side);
        data.playedInfuseCards.push([card,side]);
        if (cardSide.element)
            if (data.resources[cardSide.element] === undefined)
                console.warn("Unsupported element",cardSide.element);
            else
                data.resources[cardSide.element]++;
    }

    // Card play action

    let
        valid = true;

    if (action !== undefined) {
        switch (action) {
            case "playCardAsInfuse":{
                let cardSide = cards[card].sides[side];
                if (DEBUG) data.logs.push(action+"("+card+","+side+"): "+cardSide.id);
                addInfuseCard(card,side,true);
                break;
            }
            case "playCardAsResources":{
                let cardSide = cards[card].sides[side];
                if (DEBUG) data.logs.push(action+"("+card+","+side+"): "+cardSide.id);
                addResourceCard(card,side,true);
                valid = gainResources(cardSide);
                break;
            }
            case "playCardAsStarter":{
                let cardSide = cards[card].sides[side];
                if (DEBUG) data.logs.push(action+"("+card+","+side+"): "+cardSide.id+(cardSide.element?" ["+cardSide.element+"]":"")+(cardSide.drainCost.mana?" {-"+cardSide.drainCost.mana+"}":""));
                addActionCard(card,side);
                addResourceCard(card,side);
                gainResources(cardSide);
                data.started=false;
                break;
            }
            case "playCardAsAction":{
                let cardSide = cards[card].sides[side];
                if (DEBUG) data.logs.push(action+"("+card+","+side+","+tooption+"): "+cardSide.id+(cardSide.element?" ["+cardSide.element+"]":"")+(cardSide.drainCost.mana?" {-"+cardSide.drainCost.mana+"}":""));
                if (data.started) {
                    addActionCard(card,side);
                    valid=performActions(cardSide,tooption);
                } else valid=false;
                break;
            }
            case "tryToStart":{
                let cardSide = cards[data.playedActionCards[0][0]].sides[data.playedActionCards[0][1]];
                if (DEBUG) data.logs.push(action+": "+cardSide.id);
                valid = performActions(cardSide,tooption);
                if (valid) data.started = true;
                break;
            }
            default:{
                console.warn("Invalid action",action);
                break;
            }
        }

    }

    if (valid) {

        let cantPlay = true;

        if (data.cardsToPlay) {
            let
                firstCard=0,lastCard=cards.length-1,
                firstSide=0,lastSide=1;
            if (!action) {
                firstSide=lastSide=workerData.sideId;
                lastCard=firstCard=workerData.cardId;
            }
            for (let i=firstCard;i<=lastCard;i++) {
                if (data.playedCards.indexOf(i)==-1) {
                    for (let s=firstSide;s<=lastSide;s++) {
                        if (cards[i].sides[s])
                            if (data.playedCards.length == 0) {
                                cantPlay&=!play(cards,config,data,results,"playCardAsStarter",i,s);
                            } else if (data.started) {
                                cantPlay&=!play(cards,config,data,results,"playCardAsResources",i,s);
                                cards[i].sides[s].options.forEach((option,o)=>{
                                    cantPlay&=!play(cards,config,data,results,"playCardAsAction",i,s,o);
                                })
                            } else {
                                let started = false;
                                cards[i].sides[s].options.forEach((option,o)=>{
                                    let trystart=play(cards,config,data,results,"tryToStart",-1,-1,o);
                                    started|=trystart;
                                })
                                if (!started) cantPlay&=!play(cards,config,data,results,"playCardAsResources",i,s);
                            }
                    }
                }
            }
        }

        if (!cantPlay) {

            if (data.resources.attack || data.resources.defense) {

                if (lookForAttack && (data.resources.attack>=lookForAttack))
                    data.logs.forEach(log=>{
                        console.log("[!!!]",log);
                    })

                let canRecover = "recoverable";
                for (let k in data.drainCost)
                    if (data.resources[k]<data.drainCost[k]) {
                        canRecover="unrecoverable";
                        break;
                    }
                // Count
                let index=data.sequenceIndexList.sort().join("_");
                ["attack","defense"].forEach(stat=>{
                    if ((results.highest[canRecover][stat] == undefined)||(results.highest[canRecover][stat].value<data.resources[stat])) {
                        results.highest[canRecover][stat]={
                            value:data.resources[stat],
                            play:data
                        }
                    }
                    if (!results.sequenceIndex[canRecover][stat]) results.sequenceIndex[canRecover][stat]={};
                    if (!results.count[canRecover][stat]) results.count[canRecover][stat]=[];
                    if (results.sequenceIndex[canRecover][stat][index]<data.resources[stat]) {
                        results.count[canRecover][stat][results.sequenceIndex[canRecover][stat][index]]--;
                        delete results.sequenceIndex[canRecover][stat][index];
                    }
                    if (results.sequenceIndex[canRecover][stat][index] === undefined) {
                        results.sequenceIndex[canRecover][stat][index]=data.resources[stat];
                        results.count[canRecover][stat][data.resources[stat]]=(results.count[canRecover][stat][data.resources[stat]]||0)+1;
                    }
                })
            }

        }
    }

    if (action)
        return valid;
    else {
        delete results.sequenceIndex;
        return results;
    }
}

let out=play(cards,config);

parentPort.postMessage(out);