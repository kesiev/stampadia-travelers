function DungeonPrinter(modifiers) {

    const
        SPACING=0.3,
        SIDES=["A","B","C","D"],
        IDS=["1","2","3","4","5","6"],
        legendTextSettings={
            modelId:"heroCardText",
            wordSpacing:WORDSPACING,
            lineSpacing:LINESPACING,
            textGap:TEXTGAP,
            verticalAlignment:"top",
            horizontalAlignment:"left"
        };
        
  
    function printMapCard(settings,svg,language,narrative,translatedNarrative,x,y,data) {

        let
            cardPrinter=new CardPrinter(svg,"dungeonCard",x,y),
            cellsHeight=data.cells.length,
            cellsWidth=data.cells[0].length,
            side,rulers;

        cardPrinter.setEdges("dungeonCardEdges");
        cardPrinter.setBorder("dungeonCardBorder");
        cardPrinter.setLargeSymbolsSize("dungeonCardTileEdge");
        cardPrinter.setInnerBorderSpacing(0);

        side=cardPrinter.startUpperSide();
        rulers = cardPrinter.getDungeonRulers({
            cols:cellsWidth,
            rows:cellsHeight,
            cornerSize:7.879,
            notesSize:3,
            notesSpacing:1,
            spacing:SPACING
        });

        cardPrinter.printAt("heroCardText",rulers.angles[0],IDS[data.id]+SIDES[0]);
        cardPrinter.printAt("heroCardText",rulers.angles[1],IDS[data.id]+SIDES[1]);
        cardPrinter.printAt("heroCardText",rulers.angles[2],IDS[data.id]+SIDES[2]);
        cardPrinter.printAt("heroCardText",rulers.angles[3],IDS[data.id]+SIDES[3]);

        if (data.isStartingCard) {
            cardPrinter.setBackgroundColor("dungeonCardTopMarker","#000000");
            cardPrinter.delete([
                "dungeonCardBottomMarker"
            ]);
        }

        for (let y=0;y<cellsHeight;y++)
            for (let x=0;x<cellsWidth;x++) {
                let
                    cell=data.cells[y][x];
                cardPrinter.addStencil(cell.full.image.id,"topSymbol",rulers.tiles[y][x].cell,cell.full.image.angle);
                if (cell.annotations) {
                    cell.sides.forEach((side,id)=>{
                        let note="";
                        for (let k in side) {
                            switch (k) {
                                default:{
                                    note=IDS[side[k][0]]+SIDES[side[k][1]];
                                    break;
                                }
                            }
                        }
                        cardPrinter.printAt("outlineLargeText",rulers.tiles[y][x].notes[id],note);
                        cardPrinter.printAt("heroCardLargeText",rulers.tiles[y][x].notes[id],note);
                    });
                }
                
            }

        if (data.symbols)
            data.symbols.forEach(symbol=>{
                cardPrinter.addStencil("dungeonSymbol"+symbol.id,"topSymbol",rulers.tiles[symbol.y][symbol.x].cell,symbol.angle);
            })

        if (!settings.noCode)
            cardPrinter.printAt("cardCodeText",rulers.cardNumber,data.cardCode);
        
        cardPrinter.delete([
            "dungeonCardBorder"
        ]);

        if (settings.noBorder)
            cardPrinter.delete([
                "dungeonCardCutout"
            ]);

    }

    function printLegendCard(settings,svg,language,narrative,translatedNarrative,x,y,data,page) {
        let
            labels=language.dungeonCards,
            cardPrinter=new CardPrinter(svg,"dungeonLegendCard",x,y),
            rulers;

        function getLabel(side,label) {
            let set=language.quests[side.questId][label[0]];
            return set[Math.floor(set.length*label[1])];
        }
            
        cardPrinter.setEdges("dungeonLegendCardEdges");
        cardPrinter.setBorder("dungeonLegendCardBorder");
        cardPrinter.setInnerBorderSpacing(INNERBORDERSPACING*2);

        side=cardPrinter.startUpperSide();
        rulers=cardPrinter.getDungeonLegendRulers({
            blocksCount:data.symbols.length,
            pageNumberSize:2.3
        });
        cardPrinter.printAt("heroCardText",rulers.pageNumber,page+1);

        data.symbols.forEach((note,i)=>{
            let
                triggerSymbol,
                text,
                description=note.description;
            switch (note.description.trigger) {
                case "immediate":{
                    triggerSymbol="{symbol heroCardImmediateSymbol}";
                    break;
                }
                case "onwalk":{
                    triggerSymbol="{symbol heroCardOnWalkSymbol}";
                    break;
                }
                case "choice":{
                    triggerSymbol="{symbol heroCardChoiceSymbol}";
                    break;
                }
                default:{
                    console.warn("Unsupported trigger",note.description);
                    debugger;
                }
            }
            text="";
            description.actions.forEach(action=>{
                switch (action.type) {
                    case "text":{
                        text+=replacePlaceholders(replacePlaceholders(getLabel(description,action.text),description.placeholders),translatedNarrative)+" ";
                        break;
                    }
                    case "enemy":{
                        text = (text?text.trim()+"\n":"");
                        let enemy="{symbol heroCardAttackLevelSymbol} "+action.enemy.level+" {symbol heroCardAttackSmallSymbol} "+action.enemy.atk+" {symbol heroCardDefenseSmallSymbol} "+action.enemy.def;
                        if (action.enemy.modifier) {
                            let modifier=translateEnemyModifier(language,action.enemy.modifier)
                            text+=enemy+" - {bold}"+modifier.title+"{endbold} ("+modifier.description+")\n";
                        } else text+=enemy+"\n";
                        break;
                    }
                    case "action":{
                        text+=translateAction(language,labels,action,description,description.placeholders)+" ";
                        break;
                    }
                    case "emptyIfNotRoom":{
                        let
                            conditions=[],
                            actions=[];
                        conditions.push(replacePlaceholders(labels.check.notRoom,{
                            room:description.placeholders["room-"+action.checkRoom]
                        }));
                        actions.push(labels.roomIsEmpty);
                        text+=formatConditionedAction(language,conditions,actions);
                        break;
                    }
                    case "emptyIfNotTicked":{
                        let
                            conditions=[],
                            actions=[];
                        conditions.push(replacePlaceholders(labels.check.notTickedRoom,{
                            room:description.placeholders["room-"+action.checkRoom]
                        }));
                        actions.push(labels.roomIsEmpty);
                        text+=formatConditionedAction(language,conditions,actions);
                        break;
                    }
                    case "pick":{
                        let
                            mayMust=getMayMust(action.optionality,action.repeating),
                            optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating),
                            conditions=[],
                            actions=[];
                        if (action.checkRoom)
                            conditions.push(replacePlaceholders(labels.check.room,{
                                room:description.placeholders["room-"+action.checkRoom]
                            }));
                        actions.push(replacePlaceholders(
                            labels.pick[mayMust],{
                                optionalityrepeating:optionalityrepeating,
                                card:description.placeholders["roomCard-"+action.card],
                                bannerType:getBannerLabel(language,action.bannerType)
                            }
                        ));
                        text+=formatConditionedAction(language,conditions,actions);
                        break;
                    }
                    /*

                    TODO non si può fare
                    case "effectOnRoom":{
                        let
                            conditions=[],
                            actions=[],
                            mayMust=getMayMust(action.optionality,action.repeating),
                            optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating);
                        conditions.push(replacePlaceholders(
                            labels.check.room,{
                                room:description.placeholders["room-"+action.checkRoom]
                            }
                        ));
                        actions.push(replacePlaceholders(
                            labels.gainBonus[mayMust],{
                                optionalityrepeating:optionalityrepeating,
                                amount:action.amount,
                                resource:getResourceLabel(language,action.resource)
                            }
                        ));
                        text+=formatConditionedAction(language,conditions,actions);
                        break;
                    }
                    */
                    case "gainTick":{
                        let
                            optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating);
                        text+=getEffectText(language,replacePlaceholders(
                            labels.gainTick,{
                                optionalityrepeating:optionalityrepeating
                            }
                        ));
                        action.bar.forEach(cell=>{
                            text+="{symbol heroCardTickBox-"+cell+"}";
                        });
                        if (action.endBar) text+="{symbol heroCardEndTickBox-"+action.endBar+"}";
                        text+="\n";
                        break;
                    }
                    default:{
                        console.warn("Can't print action",action);
                    }
                }
            })
            cardPrinter.addText(legendTextSettings,rulers.blocks[i],note.symbol+": "+triggerSymbol+text.trim());
        });

        if (!settings.noCode)
            cardPrinter.printAt("cardCodeText",rulers.cardNumber,data.cardCode);
        
        cardPrinter.delete([
            "dungeonLegendCardBorder"
        ]);

        if (settings.noBorder)
            cardPrinter.delete([
                "dungeonLegendCardCutout"
            ]);

    }

    this.print=(settings,then)=>{

        const template=new SVGTemplate((settings.root||"")+"svg/model.svg",true);
        template.load(()=>{
        
            let
                dungeon,
                attempt=0;

            while (attempt<10) {
                dungeon=generateDungeon(modifiers,attempt);
                if (dungeon) break;
                else attempt++;
            }

            let
                language=LANGUAGES[settings.language],
                svg=new SVG(template),
                translatedNarrative=translateNarrativePlaceholders(language,dungeon.narrative),
                lastMapCard=dungeon.cards.length,
                borderTop=(SHEETHEIGHT-(CARDHEIGHT*3+CARDSPACING*2))/2,
                borderLeft=(SHEETWIDTH-(CARDWIDTH*3+CARDSPACING*2))/2,
                cards=[];

            for (let id=0;id<9;id++) {
                let
                    x=settings.flipX?2-id%3:id%3,
                    y=Math.floor(id/3),
                    dx=borderLeft+((CARDWIDTH+CARDSPACING)*x),
                    dy=borderTop+((CARDHEIGHT+CARDSPACING)*y);
                cards.push({x:dx,y:dy,width:CARDWIDTH,height:CARDHEIGHT});
                if (id<lastMapCard)
                    printMapCard(settings,svg,language,dungeon.narrative,translatedNarrative,dx,dy,dungeon.cards[id]);
                else {
                    let indexPage=id-lastMapCard;
                    printLegendCard(settings,svg,language,dungeon.narrative,translatedNarrative,dx,dy,dungeon.flatSymbolsIndex[indexPage],indexPage);
                }
            }

            svg.finalize();

            then({
                sheet:{
                    width:SHEETWIDTH,
                    height:SHEETHEIGHT
                },
                cards:cards,
                svg:svg
            });
        
        });
    }
  

}