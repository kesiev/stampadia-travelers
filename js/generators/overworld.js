function generateOverworld(modifiers) {

    const
        SIDES=["A","B"],
        IDS=["1","2","3","4","5","6","7","8","9"],
        CARDSCOUNT=9,
        MODIFIERS={
            cards:{
                starting:[0],
                pickable:[4,5]
            },
            timing:{
                any:0,
                beginning:1,
                firsthalf:2,
                middle:3,
                secondhalf:4,
                beforeending:5,
                ending:6
            },
            enemy:{}
        };

    function removeFromList(list,item) {
        let pos=list.indexOf(item);
        if (pos!=-1) list.splice(pos,1);
    }

    function listContains(list,item) {
        return list.indexOf(item)!=-1;
    }

    function Deck(sidescard,cardsside,neededreveal,neededrevealmeta,revealscard,unrevealedcards,cardscontent,cardscontentsidesleft,revealingcard) {
        let
            cardsContentSidesLeft=0,
            cardsContent=[],
            revealingCard=[],
            revealsByCard=[],
            unrevealedCards=[],
            neededReveal=[],
            neededRevealMeta={},
            sidesByCard=[],
            cardsBySide=[[],[]];

        if (sidescard) {
            cardsContentSidesLeft=cardscontentsidesleft;
            cardsContent=cardscontent;
            revealingCard=Tools.clone(revealingcard);
            unrevealedCards=Tools.clone(unrevealedcards);
            revealsByCard=Tools.clone(revealscard),
            neededReveal=Tools.clone(neededreveal);
            neededRevealMeta=Tools.clone(neededrevealmeta);
            sidesByCard=Tools.clone(sidescard);
            cardsBySide=Tools.clone(cardsside);
        } else {
            cardsContentSidesLeft=CARDSCOUNT*2;
            for (let i=0;i<CARDSCOUNT;i++) {
                unrevealedCards.push(i);
                revealingCard.push([]);
                revealsByCard[i]=false;
                cardsBySide[0].push(i);
                cardsBySide[1].push(i);
                sidesByCard[i]=[0,1];
                cardsContent.push({sides:[0,0]});
            }
        }

        function needReveal(card,timing) {
            if (!revealsByCard[card] && !listContains(neededReveal,card)) {
                neededReveal.push(card);
                neededRevealMeta[card]=timing;
            }
        }

        function reveal(card,bycard,byside) {
            if ((bycard !== undefined) && !byside) {
                if (revealingCard[bycard].indexOf(card)!=-1) debugger;
                revealingCard[bycard].push(card);
            }
            revealsByCard[card]=true;
            removeFromList(unrevealedCards,card);
            removeFromList(neededReveal,card);
            return {
                ifNotRevealed:card,
                reveal:[[card,1]]
            };
        }

        function getRandomRevealPosition(except,timing) {
            // Can't reveal the same card the action is into.
            let
                candidates = neededReveal.filter(reveal=>(reveal!=except[0])&&((!neededRevealMeta[reveal])||(neededRevealMeta[reveal]>=timing))),
                found=random.getElement(candidates);
            if (found === false)
                found = random.getElement(unrevealedCards,except[0]);
            if (found)
                return [found,1];
            else
                return false;
        }

        function removeCardSide(card,side,timing) {
            if (isCardSideAvailable(card,side)) {
                removeFromList(cardsBySide[side],card);
                removeFromList(sidesByCard[card],side);
                // Only bottom side cards need reveal.
                if (side==1) needReveal(card,timing);
                return [card,side];
            } else return false;
        }

        function isCardSideAvailable(card,side) {
            return listContains(sidesByCard[card],side);
        }

        this.reveal=function(position,byposition) {
            if (byposition)
                return reveal(position[0],byposition[0],byposition[1]);
            else
                return reveal(position[0]);
        }

        this.getRevealingCard=(card,side,except)=>{
            let list=[];
            revealingCard[card].forEach(card=>{
                if (card!=except) list.push([card,side]);
            })
            return list;
        }

        this.getRandomRevealPosition=(except,timing)=>{
            return getRandomRevealPosition(except,timing);
        }

        this.occupyCardPosition=(position,timing)=>{
            return removeCardSide(position[0],position[1],timing);
        }

        this.getAvailablePositions=()=>{
            let ret=[];
            cardsBySide.forEach((side,sideid)=>{
                side.forEach((card,cardid)=>{
                    ret.push([cardid,sideid]);
                })
            })
            return ret;
        }

        this.getAvailableSidesPositions=(sides)=>{
            let ret=[];
            sides.forEach(side=>{
                cardsBySide[side].forEach(card=>{
                    ret.push([card,side]);
                })
            })
            return ret;
        }

        this.getAvailableFullCardSidesPositions=(sides)=>{
            let ret=[];
            sidesByCard.forEach((card,cardid)=>{
                if (card.length == 2)
                    sides.forEach(side=>{
                        ret.push([cardid,side]);
                    })
            })
            return ret;
        }

        this.getAvailableCardPositions=(card)=>{
            let ret=[];
            sidesByCard[card].forEach(side=>{
                ret.push([card,side]);
            })
            return ret;
        }

        this.getAvailableCardSidesPosition=(card,side)=>{
            let ret=[];
            side.forEach(side=>{
                if (sidesByCard[card].indexOf(side) != -1)
                    ret.push([card,side]);
            })
            return ret;
        }

        this.clone=()=>{
            return new Deck(sidesByCard,cardsBySide,neededReveal,neededRevealMeta,revealsByCard,unrevealedCards,cardsContent,cardsContentSidesLeft,revealingCard);
        }

        this.applyToCardSide=(position,content)=>{
            if (cardsContent[position[0]].sides[position[1]])
                return false;
            else {
                cardsContentSidesLeft--;
                cardsContent[position[0]].sides[position[1]]=content;
            }
        }

        this.getCardsContent=()=>{
            return cardsContent;
        }

        this.isNeededReveal=()=>{
            return neededReveal.length;
        }

        this.hasEmptyCards=()=>{
            return !!cardsContentSidesLeft;
        }

        this.log=function() {
            console.log("revealsByCard",revealsByCard);
            console.log("neededReveal",neededReveal);
            console.log("cardsContent",cardsContent);
        }

    }

    function solveActions(out,deck,position,timing,character,actions) {
        if (timing === undefined) debugger; // TODO togli
        const
            OPTIONALITYMUST={word:"must"},
            REPEATINGONCE={word:"exactly",times:1},
            REPEATINGANYTIME=0;
        let
            picksCard=false,
            ret=[],
            optionality=OPTIONALITYMUST,
            repeating=REPEATINGONCE;
        for (let i=0;i<actions.length;i++) {
            let
                action=actions[i],
                outaction;
            // Only 1 picking action per adventure.
            if (action.isPickingAction)
                if (pickableCardPicked) {
                    debugger;
                    return false;
                } else
                    picksCard=true;
            if (action.optionality)
                optionality=random.getElement(action.optionality);
            if (action.repeating)
                repeating=random.getElement(action.repeating);
            else
                repeating=REPEATINGONCE;
            switch (action.type) {
                case "text":{
                    outaction={
                        type:"text",
                        text:action.textId?random.getLabel(action.textId):0,
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(repeating),
                        characterValue:action.characterValue
                    };
                    break;
                }
                case "action":{
                    outaction=actionGenerator.prepare(
                        action,
                        Tools.clone(repeating),
                        Tools.clone(optionality),
                    );
                    break;
                }
                case "reveal":{
                    let revealPosition;
                    if (action.id) {
                        revealPosition=out.labels[action.id];
                        if (!revealPosition) return false;
                    } else {
                        revealPosition=deck.getRandomRevealPosition(position,timing);
                        if (!revealPosition && action.must) return false;
                    }
                    if (revealPosition)
                        outaction={
                            type:"reveal",
                            reveal:deck.reveal(revealPosition,position),
                            optionality:Tools.clone(optionality),
                            repeating:Tools.clone(REPEATINGANYTIME),
                        }
                    break;
                }
                case "onTick":{
                    let outticks=[];
                    action.ticks.forEach(tick=>{
                        let outtick={ on:tick.on, remove:tick.remove };
                        if (tick.reveal) outtick.reveal=deck.reveal(out.labels[tick.reveal],position);
                        outticks.push(outtick);
                    })
                    outaction={
                        type:"onTick",
                        ticks:outticks,
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(repeating),
                    }
                    break;
                }
                case "remove":{
                    let removePosition;
                    if (!action.ifPossible || position[1]==1) {
                        if (action.id) {
                            removePosition=out.labels[action.id];
                            if (!revealPosition) return false;
                        }
                        outaction={
                            type:"remove",
                            position:removePosition,
                            optionality:Tools.clone(optionality),
                            repeating:Tools.clone(REPEATINGANYTIME),
                        }
                    }
                    break;
                }
                case "gainTick":{
                    outaction={
                        type:"gainTick",
                        bar:action.bar,
                        endBar:action.endBar,
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(repeating),
                    }
                    break;
                }
                case "enemy":{
                    outaction={
                        type:"enemy",
                        descriptionId:action.descriptionId,
                        enemy:random.getElement(action.enemy),
                        avatar:avatarGenerator.generate(character?character.avatar:action.avatar),
                        modifier:action.modifier
                    }
                    break;
                }
                case "pick":{
                    outaction={
                        type:"pick",
                        bannerType:random.getElement(action.bannerType),
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(REPEATINGANYTIME),
                    }
                    break;
                }
                case "emptyIfRoom":{
                    outaction={
                        type:action.type,
                        checkRoom:action.checkRoom
                    };
                    break;
                }
                /*
                TODO non si può fare
                case "effectOnRoom":{
                    outaction={
                        type:action.type,
                        checkRoom:action.checkRoom,
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(repeating),
                        amount:random.getElement(action.amount),
                        resource:random.getElement(action.resource)
                    };
                    break;
                }
                */
                case "swapCards":{
                    outaction={
                        type:action.type,
                        optionality:Tools.clone(optionality),
                        repeating:Tools.clone(repeating),
                        discard:random.getElement(action.discard),
                        draw:random.getElement(action.draw),
                    };
                    break;
                }
                default:{
                    console.warn("Unsupported action",action);
                }
            }
            if (outaction)
                ret.push(outaction);
        }
        return {
            picksCard:picksCard,
            actions:ret
        };
    }

    function tryAddQuest(deck,quest) {
        deck=deck.clone();

        let
            picksCard=false,
            applyActions=[],
            steps=random.getElement(quest.steps),
            out={
                id:quest.id,
                adventureTitle:random.getElement(quest.adventureTitle),
                labels:{},
                steps:[]
            };

        // Assign rooms
        for (let i=0;i<steps.length;i++) {
            let
                step=steps[i],
                card,
                position,
                positions;

            if (step.atCard !== undefined)
                card=random.getElement(step.atCard);
            else if (step.atCardId) {
                let labelPosition = out.labels[step.atCardId];
                if (labelPosition)
                    card=labelPosition[0];
                else {
                    debugger;
                    return false;
                }
            }

            if (card == undefined)
                // Random card...
                if (step.atSide)
                    if (step.atWholeCard)
                        // ...and at a card with both sides available.
                        positions=deck.getAvailableFullCardSidesPositions(step.atSide);
                    else
                        // ...and Specific side or sides
                        positions=deck.getAvailableSidesPositions(step.atSide);
                else
                    // ...and random side.
                    positions=deck.getAvailablePositions();
            else
                // Specific card...
                if (step.atSide)
                    // ... and specific side.
                    positions=deck.getAvailableCardSidesPosition(card,step.atSide);
                else
                    // ...and random side.
                    positions=deck.getAvailableCardPositions(card);

            if (positions.length) {
                position=random.getElement(positions);
                out.labels[step.id]=position;
                deck.occupyCardPosition(position,step.timing);
                if ((position[0] == 0) && (position[1] == 0))
                    deck.reveal(position);
            } else
                return false;
        }

        // Solve actions
        for (let i=0;i<steps.length;i++) {
            let
                step=steps[i],
                position=out.labels[step.id],
                character=step.character?random.getElement(step.character):0,
                sideTitle=step.sideTitleId?random.getLabel(step.sideTitleId):0,
                solvedAction=solveActions(out,deck,position,step.timing,narrative.characters[character],random.getElement(step.actions));
            if (solvedAction) {
                applyActions.push({action:"applyToCardSide",position:position,step:out.steps.length});
                if (solvedAction.picksCard) picksCard=true;
                out.steps.push({
                    questId:quest.id,
                    id:step.id,
                    position:position,
                    type:step.type,
                    isStartingSide:step.isStartingSide,
                    sideTitle:sideTitle,
                    character:character,
                    actions:solvedAction.actions
                });
            } else return false;
        };

        return {
            quest:out,
            deck:deck,
            applyActions:applyActions,
            picksCard:picksCard
        };
    }

    function applyTryAddQuest(tryquest) {
        let
            textPlaceholders={},
            quest=tryquest.quest,
            deck=tryquest.deck;

        for (let k in tryquest.quest.labels) {
            let label=tryquest.quest.labels[k];
            textPlaceholders["roomId-"+k]=IDS[label[0]]+SIDES[label[1]];
            textPlaceholders["roomCard-"+k]=IDS[label[0]];
            textPlaceholders["roomSide-"+k]=SIDES[label[1]];
        }
        
        for (let i=0;i<tryquest.applyActions.length;i++) {
            let action=tryquest.applyActions[i];
            switch (action.action) {
                case "applyToCardSide":{
                    quest.steps[action.step].placeholders=textPlaceholders;
                    deck.applyToCardSide(action.position,quest.steps[action.step]);
                    break;
                }
            }
        };

        if (tryquest.picksCard) pickableCardPicked=true;

        return {
            deck:deck
        };
    }

    function addQuests(times,set) {
        let quest;
        for (let i=0;i<times;i++) {
            do {
                quest=random.getFromBag(set);
                if (quest) {
                    let test=tryAddQuest(deck,quest);
                    if (test) {
                        let applied = applyTryAddQuest(test);
                        deck = applied.deck;
                        break;
                    } else console.warn("Can't add quest",quest);
                } else break;
            } while (quest);
        }
        return deck;
    }

    const
        BONUSSLOTS=[
            "level", "attack", "defense"
        ];

    let
        // Databases
        mainQuests,
        sideQuests,
        upperEnemies,
        lowerEnemies,
        midEnemies,
        midEvents,
        lowerEvents;

    mainQuests=loadOverworldMainQuests(MODIFIERS);
    sideQuests=loadOverworldSideQuests(MODIFIERS);
    upperEnemies=loadOverworldUpperEnemies(MODIFIERS);
    lowerEnemies=loadOverworldLowerEnemies(MODIFIERS);
    midEnemies=loadOverworldMidEnemies(MODIFIERS);
    midEvents=loadOverworldMidEvents(MODIFIERS);
    lowerEvents=loadOverworldLowerEvents(MODIFIERS);

    let
        random=new Random({
            noRandom:modifiers.noRandom,
            seed:modifiers.seed
        }),
        narrativeGenerator=new NarrativeGenerator(random),
        enemyGenerator=new EnemyGenerator(random),
        actionGenerator=new ActionGenerator(random),
        avatarGenerator=new AvatarGenerator(random),
        narrative=narrativeGenerator.generate(),
        deck=new Deck(),
        pickableCardPicked=false,
        mainQuestsBag=random.createBag(mainQuests);
        sideQuestsBag=random.createBag(sideQuests);
        upperEnemiesBag=random.createBag(upperEnemies);
        lowerEnemiesBag=random.createBag(lowerEnemies);
        midEnemiesBag=random.createBag(midEnemies);
        midEventsBag=random.createBag(midEvents);
        lowerEventsBag=random.createBag(lowerEvents);

    // Apply standard quests events
    addQuests(1,mainQuestsBag);
    addQuests(1,sideQuestsBag);
    addQuests(2,lowerEventsBag);
    addQuests(3,lowerEnemiesBag);
    addQuests(1,midEnemiesBag);
    addQuests(2,upperEnemiesBag);
    addQuests(4,midEventsBag);

    // Fills empty cards
    console.warn("Filling...");
    random.resetBag(upperEnemiesBag);
    random.resetBag(lowerEnemiesBag);
    for (let i=0;i<9;i++) {
        addQuests(1,midEventsBag);
        addQuests(1,upperEnemiesBag);
        addQuests(1,lowerEnemiesBag);
    }

    if (deck.isNeededReveal()) {
        console.warn("Some cards aren't revealed...")
    } if (deck.hasEmptyCards()) {
        console.warn("Some cards are empty...")
    } else {

        // Finalize cards content
        let cardsContent = deck.getCardsContent();

        // Solve reveal events
        cardsContent.forEach((card,cardid)=>{
            card.cardCode=modifiers.setCode+"-W-"+(cardid+1)+modifiers.setSide;
            card.sides.forEach(side=>{
                let
                    ifRevealed,
                    forceTimesInMust;
                if (side) {
                    side.actions.forEach(action=>{
                        switch (action.type) {
                            case "enemy":{
                                let enemy=enemyGenerator.generateEnemy(action.enemy[0],action.enemy[1]);
                                action.enemy = enemy;
                                if (enemy.modifier)
                                    action.modifier=enemy.modifier;
                                else if (action.descriptionId)
                                    action.description = random.getLabel(action.descriptionId);
                                delete action.descriptionId;
                                break;
                            }
                            case "reveal":{
                                // Solves reveals.
                                action.reveal.ifNotRevealed = deck.getRevealingCard(action.reveal.ifNotRevealed,0,cardid);
                                if (action.reveal.ifNotRevealed.length) {
                                    // Since revelation has a condition, any remove action that follows will inherit a clause about this reveal.
                                    ifRevealed = action.reveal.reveal;
                                } else if (action.optionality.word=="may") {
                                    ifRevealed = action.reveal.reveal;
                                }
                                break;
                            }
                            case "remove":{
                                action.ifRevealed  = ifRevealed;
                                break;
                            }
                        }
                    });
                }
            })
        });

        return {
            narrative:narrative,
            cards:cardsContent
        };

    }
}

if (typeof module != "undefined")
    module.exports={
        loadCards:loadCards
    };