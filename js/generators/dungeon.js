function generateDungeon(modifiers) {
    const
        SIDES=["A","B","C","D"],
        IDS=["1","2","3","4","5","6"],
        PICKABLECARDS=[4,5],
        CARDSIDE_0=0,
        CARDSIDE_90=1,
        CARDSIDE_180=2,
        CARDSIDE_270=3,
        CARDSIDE_COUNT=4,
        CORNERSIZE=1,
        CARDWIDTH=4,
        CARDHEIGHT=6,
        CARDSCOUNT=6,
        SYMBOLSAVAILABLE=18,
        /* DEBUG */
        DX=400,
        DY=400,
        SQUARESIZE=10;
    
    function Card(id) {
        let
            isStartingCard=false,
            positions=[],
            cells=[],
            symbols=[];

        for (let y=0;y<CARDHEIGHT;y++) {
            let row=[];
            for (let x=0;x<CARDWIDTH;x++) {
                let sides=[];
                for (let x=0;x<=CARDSIDE_270;x++)
                    sides.push({});
                row.push({full:{},sides:sides,annotations:0});
            }
            cells.push(row);
        }

        function translateCoords(x,y,side) {
            let
                ox=x,
                oy=y;
            switch (side) {
                case CARDSIDE_90:{
                    ox=CARDWIDTH-y-1;
                    oy=x;
                    break;
                }
                case CARDSIDE_180:{
                    ox=CARDWIDTH-x-1;
                    oy=CARDHEIGHT-y-1;
                    break;
                }
                case CARDSIDE_270:{
                    ox=y;
                    oy=CARDHEIGHT-x-1;
                    break;
                }
            }
            return {x:ox,y:oy};
        }

        this.setStartingCard=(v)=>{
            isStartingCard=v;
        }

        this.getData=()=>{
            return {
                id:id,
                cells:cells,
                isStartingCard:isStartingCard,
                cardCode:modifiers.setCode+"-D-"+(id+1)+modifiers.setSide,
                symbols:symbols
            }
        };

        this.applyTile=(random,skins,tile)=>{
            let pens=[];
            tile.pens.forEach(pen=>pens.push(random.getElement(pen)));
            for (let y=0;y<CARDHEIGHT;y++)
                for (let x=0;x<CARDWIDTH;x++) {
                    let
                        cell=tile.map[y][x],
                        pen=skins.cells[pens[cell]],
                        image=random.getElement(pen.images);
                    cells[y][x].full.unwalkable=pen.unwalkable;
                    cells[y][x].full.image={
                        id:image.id,
                        angle:random.getElement(image.angles)+(random.getFloat()*random.getElement(image.tilt))
                    };
                }
        }

        this.getSymbolByIndex=(index,orientation)=>{
            if (symbols.length) {
                let symbol=symbols[index];
                return {
                    id:symbol.id,
                    orientation:(symbol.orientation+orientation)%CARDSIDE_COUNT,
                    cardSide:orientation,
                    roomId:id
                }
            } else return false;
        }

        this.addSymbol=(id,position,orientation)=>{
            symbols.push({id:id,x:position.x,y:position.y,orientation:orientation,angle:360-(orientation*90)});
            cells[position.y][position.x].full.symbol=id;
            cells[position.y][position.x].full.symbolOrientation=orientation;
        }

        this.getFreePositions=()=>{
            let pos=[];
            for (let y=0;y<CARDHEIGHT;y++)
                for (let x=0;x<CARDWIDTH;x++)
                    if (!(
                        ((x==0)&&(y==0))||
                        ((x==CARDWIDTH-1)&&(y==0))||
                        ((x==0)&&(y==CARDHEIGHT-1))||
                        ((x==CARDWIDTH-1)&&(y==CARDHEIGHT-1))
                    ))
                        if (!cells[y][x].full.unwalkable && !cells[y][x].annotations)
                            pos.push({x:x,y:y});
            return pos;
        }

        this.setPosition=(side,x,y)=>{
            positions[side]={x:x,y:y};
        }

        this.getId=()=>{
            return id;
        }

        this.setCellAtSide=(x,y,side,key,value,image)=>{
            let coords=translateCoords(x,y,side);
            if (!cells[coords.y][coords.x].sides[side][key])
                cells[coords.y][coords.x].annotations++;
            cells[coords.y][coords.x].sides[side][key]=value;
            if (image) {
                if (!cells[coords.y][coords.x].full.originalImage)
                    cells[coords.y][coords.x].full.originalImage=cells[coords.y][coords.x].full.image;
                cells[coords.y][coords.x].full.image=image;
            }
        }

        this.removeAtCellsAtSide=(side,value)=>{
            for (let x=0;x<CARDWIDTH;x++)
                for (let y=0;y<CARDHEIGHT;y++)
                    for (let k in cells[y][x].sides[side])
                        if (cells[y][x].sides[side][k] === value) {
                            delete cells[y][x].sides[side][k];
                            cells[y][x].annotations--;
                            // Restore original graphics if there is any annotation.
                            if (!cells[y][x].annotations && cells[y][x].full.originalImage)
                                cells[y][x].full.image=cells[y][x].full.originalImage;
                        }
        }

        this.getCellAtSide=(x,y,side)=>{
            let coords=translateCoords(x,y,side);
            return cells[coords.y][coords.x].sides[side];
        }

        this.getCellAt=(x,y,side)=>{
            let coords=translateCoords(x,y,side);
            return cells[coords.y][coords.x].full;
        }

        this.getCardSize=(side)=>{
            switch (side) {
                case CARDSIDE_0:
                case CARDSIDE_180:{
                    return {width:CARDWIDTH,height:CARDHEIGHT};
                }
                default:{
                    return {width:CARDHEIGHT,height:CARDWIDTH};
                }
            }
        }
    }

    function placeCardSide(cardside,x,y) {
        let pos=cardSides.indexOf(cardside);
        if (pos!=-1) {
            cardside.x=x;
            cardside.y=y;
            cardside.card.setPosition(cardside.side,x,y);
            let el=cardSides.splice(pos,1);
            doneCardSides.push(el[0]);
            map.push(cardside);
        }
    }

    function cardSideCollides(cardside,x,y) {
        let collides=false;
        map.forEach(tocardside=>{
            if (!(
                (tocardside.x+tocardside.size.width<=x)||
                (tocardside.x>=x+cardside.size.width)||
                (tocardside.y+tocardside.size.height<=y)||
                (tocardside.y>=y+cardside.size.height)
            )) collides=true; // TODO usa ciclo for
        });
        return collides;
    }

    function getDoorPositions(fromside,candidate,rx1,rx2,ry1,ry2,dx,dy) {
        let pos=[];
        for (let py=ry1;py<=ry2;py++)
            for (let px=rx1;px<=rx2;px++) {
                let
                    fx=px+dx,
                    fy=py+dy;
                if (
                    !fromside.card.getCellAt(px,py,fromside.side).unwalkable &&
                    !candidate.card.getCellAt(fx,fy,candidate.side).unwalkable
                ) pos.push([px,py,fx,fy])
            }
        return pos;
    }

    function crawl(fromside) {
        let
            newDistance=fromside.distance+1,
            CORNERSIZE2=CORNERSIZE+1,
            // Origin
            ox=fromside.x,
            oy=fromside.y,
            ow=fromside.size.width,
            oh=fromside.size.height,
            // Gets cards candidates
            candidates=cardSides.filter(cardside=>cardside.card!=fromside.card),
            // Valid positions
            validpositions=[];
        
        for (let i=0;i<candidates.length;i++) {
            let
                candidate=candidates[i],
                cw=candidate.size.width,
                ch=candidate.size.height,
                sx=ox-cw,
                sy=oy-ch,
                ex=ox+ow,
                ey=oy+oh;
            
            for (let y=sy+1+CORNERSIZE2;y<=ey-1-CORNERSIZE2;y++) {
                // Door left
                if (!cardSideCollides(candidate,sx,y)) {
                    let pos=getDoorPositions(
                        fromside,candidate,
                        0,0,
                        Math.max(y+CORNERSIZE,oy+CORNERSIZE)-oy,Math.min(y+ch-1-CORNERSIZE,oy+oh-1-CORNERSIZE)-oy,
                        cw-1,oy-y
                    );
                    if (pos.length)
                        validpositions.push({
                            cardside:candidate,
                            x:sx,
                            y:y,
                            from:{at:pos,attribute:"doorleft",toAttribute:"doorright"}
                        });
                }
                // Door right
                if (!cardSideCollides(candidate,ex,y)) {
                    let pos=getDoorPositions(
                        fromside,candidate,
                        ow-1,ow-1,
                        Math.max(y+CORNERSIZE,oy+CORNERSIZE)-oy,Math.min(y+ch-1-CORNERSIZE,oy+oh-1-CORNERSIZE)-oy,
                        -ow+1,oy-y
                    );
                    if (pos.length)
                        validpositions.push({
                            cardside:candidate,
                            x:ex,
                            y:y,
                            from:{at:pos,attribute:"doorright",toAttribute:"doorleft"}
                        });
                }
            }

            
            for (let x=sx+1+CORNERSIZE2;x<=ex-1-CORNERSIZE2;x++) {
                // Door up
                if (!cardSideCollides(candidate,x,sy)) {
                    let pos=getDoorPositions(
                        fromside,candidate,
                        Math.max(x+CORNERSIZE,ox+CORNERSIZE)-ox,Math.min(x+cw-1-CORNERSIZE,ox+ow-1-CORNERSIZE)-ox,
                        0,0,
                        ox-x,ch-1
                    );
                    if (pos.length)
                        validpositions.push({
                            cardside:candidate,
                            x:x,
                            y:sy,
                            from:{at:pos,attribute:"doorup",toAttribute:"doordown"}
                        });
                }
                // Door down
                if (!cardSideCollides(candidate,x,ey)) {
                    let pos=getDoorPositions(
                        fromside,candidate,
                        Math.max(x+CORNERSIZE,ox+CORNERSIZE)-ox,Math.min(x+cw-1-CORNERSIZE,ox+ow-1-CORNERSIZE)-ox,
                        oh-1,oh-1,
                        ox-x,-oh+1
                    );
                    if (pos.length)
                        validpositions.push({
                            cardside:candidate,
                            x:x,
                            y:ey,
                            from:{at:pos,attribute:"doordown",toAttribute:"doorup"}
                        });
                }
            }

        }

        if (validpositions.length) {
            let position=random.getElement(validpositions);
            placeCardSide(position.cardside,position.x,position.y);
            if (position.from) {
                let at=random.getElement(position.from.at);
                fromside.card.setCellAtSide(at[0],at[1],fromside.side,position.from.attribute,position.cardside.exitId,{ id:"dungeonDoor0" });
                position.cardside.card.setCellAtSide(at[2],at[3],position.cardside.side,position.from.toAttribute,fromside.exitId,{ id:"dungeonDoor0" });
                fromside.exits.push(position.cardside);
                position.cardside.exits.push(fromside);
                position.cardside.distance=Math.min(newDistance,position.cardside.distance);
            }
        } else return false;

    }

    function addToCardSide(cardside,content) {
        if (symbolsAvailable) {
            let symbol=cardside.card.getSymbolByIndex(0,cardside.side);
            if (symbol) {
                symbolsAvailable--;
                if (!symbolsIndex[symbol.orientation]) symbolsIndex[symbol.orientation]={};
                symbolsIndex[symbol.orientation][symbol.id]=content;
                cardside.events[0]=content;
                return content;
            } else return false;
        } else return false;
    }

    function drawRect(x,y,width,height,border,borderwidth,bg,content,zindex) {
        let rect=document.createElement("div");
        rect.style.fontSize="10px";
        rect.style.textAlign="center";
        rect.style.position="absolute";
        rect.style.border=borderwidth+"px solid "+border;
        rect.style.backgroundColor=bg;
        rect.style.zIndex=zindex||1;
        rect.style.left=(DX+x*SQUARESIZE)+"px";
        rect.style.top=(DY+y*SQUARESIZE)+"px";
        rect.style.width=(width*SQUARESIZE-borderwidth*2)+"px";
        rect.style.height=(height*SQUARESIZE-borderwidth*2)+"px";
        rect.style.lineHeight=rect.style.height;
        rect.innerHTML=content||"";
        document.body.appendChild(rect);
    }

    function getNearerPosition(bags,position,skipPickableCardSides) {
        if (!position)
            return false;
        else {
            let newPosition=position-1;
            while (newPosition>0&&isBagEmpty(bags[newPosition],skipPickableCardSides))
                newPosition--;
            if (!newPosition)
                if (!isBagEmpty(bags[position],skipPickableCardSides)) return position;
                else return false;
            else return newPosition;
        }
    }

    function getFartherPosition(bags,position,skipPickableCardSides) {
        let
            newPosition=position+1,
            positionLimit = bags.length;
        while ((newPosition<positionLimit)&&isBagEmpty(bags[newPosition],skipPickableCardSides))
            newPosition++;
        if (newPosition>=positionLimit)
            if (!isBagEmpty(bags[position],skipPickableCardSides)) return position;
            else return false;
        else return newPosition;
    }

    function getNextPosition(bags,position,direction,skipPickableCardSides) {
        if (!isBagEmpty(bags[position],skipPickableCardSides))
            return position;
        else if (direction)
            return getFartherPosition(bags,position,skipPickableCardSides);
        else
            return getNearerPosition(bags,position,skipPickableCardSides);
    }

    function getVisiblePositions(cardside,bags,except,symbols,path,results,distance) {
        if (!path) {
            symbols=[];
            path=[];
            results={};
            distance=0;
        }

        let uid=IDS[cardside.card.getId()]+SIDES[cardside.side];
        if (path.indexOf(uid) == -1) {
            path.push(uid);
            let
                bag=bags[cardside.inBag],
                bagId=random.getBagId(bag,cardside),
                symbol=cardside.card.getSymbolByIndex(0,cardside.side);
            if (symbols.indexOf(symbol.id) === -1) {
                symbols.push(symbol.id);
                if (distance && (!except || (except.indexOf(cardside)==-1)) && (!results[symbol.id] || results[symbol.id].distance<symbol.distance) && (bag.indexes.indexOf(bagId) !== -1))
                    results[symbol.id]= { distance:distance, symbol:symbol, cardside:cardside, route:Tools.clone(path) };
            }
            cardside.exits.forEach(exit=>{
                getVisiblePositions(exit,bags,except,Tools.clone(symbols),Tools.clone(path),results,distance+1);
            });
        }
        
        if (!distance) {
            let list=[];
            for (let k in results) list.push(results[k]);
            list.sort((a,b)=>a.distance-b.distance);
            console.warn(list);
            return list;
        }
    }

    function isBagEmpty(bag,skipPickableCardSides) {
        if (skipPickableCardSides) {
            let indexes=random.getBagIndexesExcept(bag,pickableCardSides);
            return !indexes.length;
        } else
            return !bag.indexes.length;
    }

    function tryAddQuest(quest,bags,force) {
        let
            picksCard=false,
            skipPickableCard=false,
            getFromBagExcept=0,
            valid=true,
            rooms=[],
            roomIds={},
            roomCardSides={},
            localBags=[],
            localSymbolsAvailable=symbolsAvailable,
            depth=bags.length-1,
            steps=random.getElement(quest.steps);

        for (let k in bags)
            localBags[k]=random.cloneBag(bags[k]);

        // By default single-events quests may happen on the pickable card
        skipPickableCard=steps.length>0;
        if (skipPickableCard) getFromBagExcept=pickableCardSides;

        for (let i=0;i<steps.length;i++)
            if (localSymbolsAvailable) {
                localSymbolsAvailable--;
                let
                    step=steps[i],
                    cardside;

                if (step.atFarthestPickableRoom) {
                    let position=0;
                    pickableCardSides.forEach(cardside=>{
                        if (random.isInBag(localBags[cardside.inBag],cardside) && (!position || (cardside.distance>position.distance))) position=cardside;
                    })
                    if (position) {
                        cardside=position;
                        random.removeFromBag(localBags[cardside.inBag],cardside);
                    }
                } else if (step.atFarthestVisiblePositionFrom) {
                    let positions=getVisiblePositions(roomCardSides[step.atFarthestVisiblePositionFrom],localBags,getFromBagExcept);
                    if (positions.length) {
                        cardside=positions[positions.length-1].cardside;
                        random.removeFromBag(localBags[cardside.inBag],cardside);
                    }
                } else {
                    let
                        position=Math.round(depth*step.timing/100),
                        nextPosition=getNextPosition(localBags,position,true,skipPickableCard);
                    
                    if (nextPosition === false)
                        if (force)
                            do {
                                nextPosition=getNextPosition(localBags,position,false,skipPickableCard);    
                                position--;
                            } while (nextPosition === false)
                        else
                            nextPosition=getNextPosition(localBags,position,false,skipPickableCard);

                    if (nextPosition !== false)
                        cardside=random.getFromBag(localBags[nextPosition],getFromBagExcept);

                }

                if (cardside) {
                    let actions=random.getElement(step.actions);
                    roomIds[step.id]=cardside.card.getSymbolByIndex(0,cardside.side);
                    roomCardSides[step.id]=cardside;
                    rooms.push({
                        position:cardside,
                        id:step.id,
                        atStartingCard:step.atStartingCard,
                        trigger:random.getElement(step.trigger),
                        closeExits:step.closeExits,
                        actions:actions
                    })
                    // Only 1 picking action per adventure.
                    actions.forEach(action=>{
                        if (action.isPickingAction)
                            if (pickableCardPicked) valid=false;
                            else picksCard=true;
                    });
                } else {
                    valid=false;
                    break;
                }
            } else {
                valid=false;
                break;
            }

        if (valid)
            return {
                questId:quest.id,
                bags:localBags,
                roomIds:roomIds,
                rooms:rooms,
                picksCard:picksCard
            }
        else
            return false;

    }

    function applyTryAddQuest(tryquest) {
        const
            REPEATINGONCE={word:"exactly",times:1},
            REPEATINGANYTIME=0;

        // Prepare text placeholders
        let textPlaceholders={};
        for (let k in tryquest.roomIds) {
            textPlaceholders["room-"+k]="{symbol heroCardRoomSmallSymbol-"+tryquest.roomIds[k].id+"-"+tryquest.roomIds[k].orientation+"}";
            textPlaceholders["roomId-"+k]=IDS[tryquest.roomIds[k].roomId]+SIDES[tryquest.roomIds[k].cardSide];
            textPlaceholders["roomCard-"+k]=IDS[tryquest.roomIds[k].roomId];
            textPlaceholders["roomSide-"+k]=SIDES[tryquest.roomIds[k].cardSide];
        }

        tryquest.rooms.forEach(room=>{
            let roomData={
                id:room.id,
                questId:tryquest.questId,
                trigger:room.trigger,
                placeholders:textPlaceholders,
                actions:[]
            };
            if (room.closeExits) {
                // Remove all exits from source rooms...
                room.position.exits.forEach(exit=>{
                    exit.card.removeAtCellsAtSide(exit.side,room.position.exitId);
                    exit.exits.splice(exit.exits.indexOf(room.position,1));
                    room.position.card.removeAtCellsAtSide(room.position.side,exit.exitId);
                });
                room.position.exits.length=0;
            }
            if (room.atStartingCard)
                room.position.card.setStartingCard(true);
            room.actions.forEach(action=>{
                let
                    outaction,
                    optionality={word:"must"},
                    repeating;
                // Rooms with "choice" options are already player-triggered so their effects are always mandatory effects
                if (roomData.trigger == "choice")
                    optionality={word:"must"};
                else if (action.optionality)
                    optionality=random.getElement(action.optionality);
                if (action.repeating)
                    repeating=random.getElement(action.repeating);
                else
                    repeating=REPEATINGONCE;
                switch (action.type) {
                    case "text":{
                        outaction={
                            type:action.type,
                            text:random.getLabel(action.textId)
                        };
                        break;
                    }
                    case "action":{
                        outaction=actionGenerator.prepare(
                            action,
                            Tools.clone(repeating),
                            Tools.clone(optionality)
                        );
                        break;
                    }
                    case "enemy":{
                        let enemy=random.getElement(action.enemy);
                        outaction={
                            type:action.type,
                            enemy:enemyGenerator.generateEnemy(enemy[0],enemy[1])
                        };
                        break;
                    }
                    case "pick":{
                        outaction={
                            type:action.type,
                            repeating:Tools.clone(REPEATINGANYTIME),
                            optionality:Tools.clone(optionality),
                            checkRoom:action.checkRoom,
                            card:action.card,
                            bannerType:random.getElement(action.bannerType)
                        };
                        break;
                    }
                    case "emptyIfNotRoom":{
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
                    case "gainTick":{
                        outaction={
                            type:action.type,
                            bar:action.bar,
                            endBar:action.endBar,
                            optionality:Tools.clone(optionality),
                            repeating:Tools.clone(repeating),
                        }
                        break;
                    }
                    case "emptyIfNotTicked":{
                        outaction={
                            type:action.type,
                            checkRoom:action.checkRoom
                        }
                        break;
                    }
                    default:{
                        console.warn("Unsupported dungeon action",action);
                        debugger;
                    }
                }
                if (outaction) roomData.actions.push(outaction);
            });
            addToCardSide(room.position, roomData);
        });

        cardSidesIndexBags=tryquest.bags;
        if (tryquest.picksCard) pickableCardPicked=true;
    }

    function generateEnemyRoom(level,difficulty) {
        return { trigger:"immediate", actions:[ {type:"enemy",enemy:enemyGenerator.generateEnemy(level,difficulty)} ] };
    }

    function addCardToCardSides(i) {
        let card=new Card(i);
        card.applyTile(random,mapSkins,random.getFromBag(mapTilesBag));
        cards.push(card);
        for (let j=0;j<=CARDSIDE_270;j++)
            cardSides.push({ card:card, side:j, size:card.getCardSize(j), events:[], distance:1000, exits:[], exitId:[i,j] });
    }

    function crawlCardSides() {
        while (cardSides.length)
            crawl(random.getElement(map));
    }

    let
        random=new Random({
            seed:modifiers.seed
        }),
        enemyGenerator=new EnemyGenerator(random),
        actionGenerator=new ActionGenerator(random),
        narrativeGenerator=new NarrativeGenerator(random),
        mainQuests=loadDungeonMainQuests(),
        sideQuests=loadDungeonSideQuests(),
        events=loadDungeonEvents(),
        eventsBag=random.createBag(events),
        sideQuestsBag=random.createBag(sideQuests),
        mapSkins=loadMapSkins(),
        pickableCardPicked=false,
        pickableCardId=random.getElement(PICKABLECARDS),
        pickableCardSides=[],
        narrative=narrativeGenerator.generate(),
        mapTilesBag=random.createBag(mapSkins.tiles,true),
        sidesRange=[CARDSIDE_0,CARDSIDE_270],
        symbolsAvailable=SYMBOLSAVAILABLE,
        symbols=[],
        symbolsBag,
        cards=[],
        cardSides=[],
        doneCardSides=[],
        cardSidesIndex=[],
        cardSidesIndexBags=[],
        symbolsIndex={},
        map=[];

    for (let i=0;i<CARDSCOUNT;i++)
        symbols.push(i);
    
    symbolsBag=random.createBag(symbols);

    // Add all cards except the pickable one
    for (let i=0;i<CARDSCOUNT;i++)
        if (i!=pickableCardId) addCardToCardSides(i);

    // Place the starting card and marks it
    placeCardSide(cardSides[0],0,0);
    map[0].distance=0;

    // Creates dungeon
    crawlCardSides();

    // Adds the pickable card
    addCardToCardSides(pickableCardId);
    cardSides.forEach(cardside=>{
        cardside.isPickable=true;
        pickableCardSides.push(cardside);
    });

    // Adds the pickable card to the dungeon
    crawlCardSides();
    pickableCardSides.sort((a,b)=>a.distance-b.distance);

    // Apply symbols
    cards.forEach(card=>{
        let positions=card.getFreePositions();
        if (positions.length)
            card.addSymbol(random.getFromBag(symbolsBag),random.getElement(positions),random.fromRange(sidesRange));
    });

    // Index rooms
    doneCardSides.forEach(side=>{
        if (!cardSidesIndex[side.distance]) cardSidesIndex[side.distance]=[];
        cardSidesIndex[side.distance].push(side);
    });
    cardSidesIndex.forEach(index=>{
        if (index) {
            index.forEach((cardside)=>{
                cardside.inBag=cardSidesIndexBags.length;
            });
            cardSidesIndexBags.push(random.createBag(index));
        }
    });

    // Prepare positions
    let longestDistance=cardSidesIndexBags.length-1;
    
    // Applies main quest
    let
        quest=random.getElement(mainQuests),
        tryQuest=tryAddQuest(quest,cardSidesIndexBags,true);
    applyTryAddQuest(tryQuest);

    // Applies side quests
    let i=2;
    do {
        quest=random.getFromBag(sideQuestsBag);
        if (quest) {
            tryQuest=tryAddQuest(quest,cardSidesIndexBags);
            if (tryQuest) {
                applyTryAddQuest(tryQuest);
                i--;
            }
        }
    } while (quest && i);

    // Add misc enemies

    // Moves farther, add 2 lvl1 enemies (1 normal, 1 harder)
    position=0;
    position = getFartherPosition(cardSidesIndexBags,position);
    if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl1","normal"));
    position=getNextPosition(cardSidesIndexBags,position,true);
    if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl1","hard"));

    // Moves farther, add 2 lvl2 enemies
    position = getFartherPosition(cardSidesIndexBags,position);
    for (let i=0;i<2;i++) {
        position=getNextPosition(cardSidesIndexBags,position,true);
        if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl2","normal"));
    }

    // From the bottom of the dungeon...
    position = longestDistance;

    // Add 1 lvl5 enemy in a far place of the dungeon
    position=getNextPosition(cardSidesIndexBags,position,false);
    if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl5","normal"));

    // Moves nearer, add 2 lvl4 enemies
    position = getNearerPosition(cardSidesIndexBags,position);
    for (let i=0;i<2;i++) {
        position=getNextPosition(cardSidesIndexBags,position,false);
        if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl4","normal"));
    }

    // Same distance, add 2 lvl3 enemy
    position = getNearerPosition(cardSidesIndexBags,position);
    for (let i=0;i<2;i++) {
        position=getNextPosition(cardSidesIndexBags,position,false);
        if (position) addToCardSide(random.getFromBag(cardSidesIndexBags[position]), generateEnemyRoom("lvl3","normal"));
    }

    // Add dungeon events
    while (symbolsAvailable && eventsBag.indexes.length) {
        quest=random.getFromBag(eventsBag);
        if (quest) {
            tryQuest=tryAddQuest(quest,cardSidesIndexBags);
            if (tryQuest) applyTryAddQuest(tryQuest);
        }
    }

    if (modifiers.debug) {

        console.log(symbolsAvailable,"symbol(s) available.");

        map.forEach(position=>{
            let cardBg="#fff",cardBorder="#000",textColor="#000",z=10,cardName=position.card.getId()+1+"ABCD"[position.side];
            if (position.isPickable)
                textColor="#f00";
            if (position.events[0]) {
                if (position.events[0].id=="entranceRoom") {
                    z=100;
                    cardBg="rgba(200,255,200,0.5)";
                } else if (modifiers.debugRedRoom.indexOf(position.events[0].id)!=-1) {
                    z=100;
                    cardBg="rgba(255,200,200,0.5)";
                } else if (modifiers.debugBlueRoom.indexOf(position.events[0].id)!=-1) {
                    z=100;
                    cardBg="rgba(200,200,255,0.5)";
                }
                position.events.forEach(event=>event.actions.forEach(action=>{
                    if (action.enemy)
                        cardBorder=[
                            "#000","#000",
                            "#00f","#00f",
                            "#0f0","#0f0",
                            "#ff0","#ff0",
                            "#f00","#f00",
                        ][action.enemy.level];
                }))
            }
            drawRect(position.x,position.y,position.size.width,position.size.height,cardBorder,2,"","<span style='color:"+textColor+"'>"+cardName+"</span>",z);
            if (position.events[0])
                console.log(cardName,position.events[0]);
            for (let y=0;y<position.size.height;y++)
                for (let x=0;x<position.size.width;x++) {
                    let
                        image=position.card.getCellAt(x,y,position.side),
                        bg=cardBg;
                    if (image.symbol !== undefined)
                        bg="#f00";

                    if (image.unwalkable)
                        drawRect(x+position.x,y+position.y,1,1,"",1,"#ccc","",z-2);
                    else
                        drawRect(x+position.x,y+position.y,1,1,"#fff",1,bg,"",z-2);
                    
        
                    let cell=position.card.getCellAtSide(x,y,position.side);
                    if (cell) {
                        if (cell.doorleft)
                            drawRect(x+position.x,y+position.y,1,1,"",0,"#fcc","&laquo;",z+1);
                        if (cell.doorright)
                            drawRect(x+position.x,y+position.y,1,1,"",0,"#fcc","&raquo;",z+1);
                        if (cell.doorup)
                            drawRect(x+position.x,y+position.y,1,1,"",0,"#fcc","^",z+1);
                        if (cell.doordown)
                            drawRect(x+position.x,y+position.y,1,1,"",0,"#fcc","v",z+1);
                    }
                }
        })

    }
    
    if (position === false)
        return false;
    else {
        let
            symbolsPerPage=6,        
            cardsData=[],
            flatSymbolsIndex=[],
            page;

        cards.forEach(card=>cardsData[card.getId()]=card.getData());

        // Splits the symbols index in pages
        
        for (let orientation in symbolsIndex)
            for (let id in symbolsIndex[orientation]) {
                if (!page || (page.symbols.length==symbolsPerPage)) {
                    page={
                        cardCode:modifiers.setCode+"-D-"+(7+flatSymbolsIndex.length)+modifiers.setSide,
                        symbols:[]
                    };
                    flatSymbolsIndex.push(page);
                }
                page.symbols.push({
                    symbol:"{symbol heroCardRoomSmallSymbol-"+id+"-"+orientation+"}",
                    description:symbolsIndex[orientation][id]
                });
            }

        return {
            cards:cardsData,
            narrative:narrative,
            flatSymbolsIndex:flatSymbolsIndex
        }
    }

   

}