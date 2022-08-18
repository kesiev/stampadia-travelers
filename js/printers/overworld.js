function OverworldPrinter(modifiers) {
  
    function printMapCard(settings,svg,language,narrative,translatedNarrative,x,y,data) {

        const
            MISSINGLABEL="??";

        let
            actionTextSettings={
                modelId:"heroCardText",
                wordSpacing:WORDSPACING,
                lineSpacing:LINESPACING,
                textGap:TEXTGAP,
                verticalAlignment:"center",
                horizontalAlignment:"center"
            },
            symbolsSettings={
                modelId:"heroCardText",
                wordSpacing:WORDSPACING,
                lineSpacing:LINESPACING,
                textGap:LARGETEXTGAP,
                verticalAlignment:"center",
                horizontalAlignment:"center"
            },
            enemyDescriptionTextSettings={
                modelId:"heroCardSmallText",
                wordSpacing:WORDSPACING,
                lineSpacing:LINESPACING,
                textGap:SMALLTEXTGAP,
                verticalAlignment:"center",
                horizontalAlignment:"center"
            },
            titleSettings={
                modelId:"cardTitle",
                wordSpacing:WORDSPACING,
                lineSpacing:LINESPACING,
                textGap:TEXTGAP,
                verticalAlignment:"center",
                horizontalAlignment:"center"
            },
            areaSettings={
                enemyEdgesId:"mapCardEnemyEdges",
                enemyCenter:0.5,
                titleHeight:8.8,
                enemyDescriptionWidth:21.3,
                enemyDescriptionHeight:10.869,
                enemyDescriptionX:23.8,
                enemyDescriptionY:1.8,
                bodySidesMargin:1.5,
                enemyAvatarX:10
            },
            labels=language.overworldCards,
            cardPrinter=new CardPrinter(svg,"mapCardContainer",x,y);

        cardPrinter.setEdges("mapCardEdges");
        cardPrinter.setBorder("mapCardBorder");
        cardPrinter.setLargeSymbolsSize("mapCardIdEdges");
        cardPrinter.setInnerBorderSpacing(INNERBORDERSPACING);

        function cleanSide() {
            cardPrinter.delete([
                "mapCardBorder",
                "mapCardHalf"
            ]);
        }

        function getLabel(side,label,nolabel) {
            if (side && label && language.quests[side.questId] && language.quests[side.questId][label[0]]) {
                let set=language.quests[side.questId][label[0]];
                return set[Math.floor(set.length*label[1])];
            } else return nolabel||"";
        }

        function positionToLabel(position) {
            if (position)
                return (position[0]+1)+(position[1]?"B":"A");
            else
                return MISSINGLABEL;
        }

        function formatList(list, last) {
            if (list.length == 1) return list[0];
            else {
                let out=list[0];
                for (let i=1;i<list.length-1;i++)
                    out+=labels.list.separator+list[i];
                return out+last+list[list.length-1];
            }
        }

        function formatPositionsList(list, last) {
            let sidesList=[];
            list.forEach(side=>sidesList.push(positionToLabel(side)));
            return formatList(sidesList, last);
        }

        function formatIfRevealed(reveal) {
            if (reveal.ifRevealed && reveal.ifRevealed.length)
                return replaceValue(
                    labels.reveal.ifRevealed[reveal.ifRevealed.length==1?"singular":"plural"],
                    formatPositionsList(reveal.ifRevealed,language.conditions.separator),
                );
            else
                return "";
        }

        function formatReveal(position,reveal,optionality) {
            let
                conditions=[],
                actions=[],
                checkSides=[];

            // Check if the opposite sides are on other cards that must be checked
            reveal.reveal.forEach(revealposition=>{
                if (position[0]!=revealposition[0])
                    checkSides.push([revealposition[0],(revealposition[1]+1)%2]);
            })  
            if (reveal.ifNotRevealed && reveal.ifNotRevealed.length)
                conditions.push(replaceValue(
                    labels.reveal.ifNotRevealed[reveal.ifNotRevealed.length==1?"singular":"plural"],
                    formatPositionsList(reveal.ifNotRevealed,language.conditions.separator),
                ));
            if (checkSides.length)
                conditions.push(replaceValue(
                    labels.reveal.ifRevealed.singular,
                    formatPositionsList(checkSides,language.conditions.separator),
                ));

            actions.push(replacePlaceholders(
                labels.reveal[getMayMust(optionality)],{
                    value:formatPositionsList(reveal.reveal,language.conditions.separator),
                    optionality:formatOptionalityRepeating(language,optionality)
                }
            ));
            return formatConditionedAction(language,conditions,actions);
        }

        function formatBonus(val) {
            if (val<0) return val;
            else return "+"+val;
        }

        function printSide(settings,data,side,istop) {

            let
                rulers,
                titleBox=cardPrinter.getPlaceholder("mapCardTitle"),
                textSides=[[],[]],
                textSide=0,
                character=0,
                title;

            if (side.character)
                character=narrative.characters[side.character];
            if (side.sideTitle)
                title=replacePlaceholders(getLabel(side,side.sideTitle,MISSINGLABEL),translatedNarrative);
            else if (character)
                title=translateCharacterAttribute(language,character,"name");

            cardPrinter.addText(titleSettings,titleBox,title);
            rulers = cardPrinter.getTextMapCardRulers(areaSettings);

            if (side) {

                let symbol=cardPrinter.addLargeSymbol("mapCardId",rulers.cardId,symbolsSettings,positionToLabel(side.position));
                if (side.isStartingSide)
                    cardPrinter.setBackgroundColor("mapCardTopMarker","#000000",symbol);

                side.actions.forEach(action=>{
                    switch (action.type) {
                        case "text":{
                            let
                                label,
                                optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating);
                            if (action.text)
                                label=getLabel(side,action.text,MISSINGLABEL);
                            else if (action.characterValue)
                                label=translateCharacterAttribute(language,character,action.characterValue);
                            if (label)
                                textSides[textSide].push(getEffectText(language,replacePlaceholders(
                                    replacePlaceholders(
                                        replacePlaceholders(
                                            label,
                                            {optionalityrepeating:optionalityrepeating}
                                        ),
                                        translatedNarrative
                                    ),
                                    side.placeholders
                                )));
                            break;
                        }
                        case "enemy":{
                            let symbol=cardPrinter.addLargeSymbol("mapCardEnemy",rulers.enemy);
                            action.avatar.forEach(row=>{
                                cardPrinter.addLargeSymbol(row,rulers.enemyAvatar);
                            });
                            cardPrinter.setText(symbol,"mapCardEnemyAtk",action.enemy.atk);
                            cardPrinter.setText(symbol,"mapCardEnemyDef",action.enemy.def);
                            cardPrinter.setText(symbol,"mapCardEnemyLevel",action.enemy.level);
                            cardPrinter.setText(symbol,"bonusLevel",formatBonus(action.enemy.bonus.level));
                            cardPrinter.setText(symbol,"bonusAttack",formatBonus(action.enemy.bonus.attack));
                            cardPrinter.setText(symbol,"bonusDefense",formatBonus(action.enemy.bonus.defense));
                            if (action.enemy.bonusSlots.level) cardPrinter.delete(["slotLevelClosed"]);
                            else cardPrinter.delete(["slotLevelOpen"]);
                            if (action.enemy.bonusSlots.attack) cardPrinter.delete(["slotAttackClosed"]);
                            else cardPrinter.delete(["slotAttackOpen"]);
                            if (action.enemy.bonusSlots.defense) cardPrinter.delete(["slotDefenseClosed"]);
                            else cardPrinter.delete(["slotDefenseOpen"]);
                            if (action.modifier) {
                                let modifier=translateEnemyModifier(language,action.modifier,true);
                                cardPrinter.addText(enemyDescriptionTextSettings,rulers.content.enemyDescriptionBox,"{bold}"+modifier.title+"{endbold}\n"+modifier.description);
                            } else if (action.description)
                                cardPrinter.addText(enemyDescriptionTextSettings,rulers.content.enemyDescriptionBox,replacePlaceholders(getLabel(side,action.description,MISSINGLABEL),translatedNarrative));
                            else if (character)
                                cardPrinter.addText(enemyDescriptionTextSettings,rulers.content.enemyDescriptionBox,translateCharacterAttribute(language,character,"description"));
                            textSide=1;
                            break;
                        }
                        case "action":{
                            textSides[textSide].push(translateAction(language,labels,action,side,side.placeholders));
                            break;
                        }
                        case "reveal":{
                            textSides[textSide].push(getEffectText(language,formatReveal(side.position,action.reveal,action.optionality)));
                            break;
                        }
                        case "gainTick":{
                            let
                                optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating),
                                text=getEffectText(language,replacePlaceholders(
                                    labels.gainTick,{
                                        optionalityrepeating:optionalityrepeating
                                    }
                                ))+"{newline}";
                            action.bar.forEach(cell=>{
                                text+="{symbol heroCardTickBox-"+cell+"}";
                            });
                            if (action.endBar) text+="{symbol heroCardEndTickBox-"+action.endBar+"}";
                            text+="{newline}";
                            textSides[textSide].push(getEffectText(language,text));
                            break;
                        }
                        case "onTick":{
                            let
                                optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating),
                                text=getEffectText(language,labels.onTick);
                            action.ticks.forEach(tick=>{
                                text+="{symbol heroCardEndTickBox-"+tick.on+"} [";
                                if (tick.reveal) text+=getEffectText(language,formatReveal(side.position,tick.reveal,action.optionality));
                                if (tick.remove) text+=" "+getEffectText(language,replacePlaceholders(
                                    labels.remove.thisCard.must,{
                                        optionalityrepeating:optionalityrepeating,
                                        ifRevealed:"",
                                    }
                                ));
                                text+="]";
                            })
                            textSides[textSide].push(text.trim());
                            break;
                        }
                        case "remove":{
                            let
                                conditions=[],
                                actions=[],
                                mayMust=getMayMust(action.optionality,action.repeating),
                                optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating),
                                ifRevealed=formatIfRevealed(action);
                            if (ifRevealed)
                                conditions.push(ifRevealed);
                            if (action.position)
                                actions.push(replacePlaceholders(
                                    labels.remove.cards[mayMust],{
                                        optionalityrepeating:optionalityrepeating,
                                        value:positionToLabel(action.position)
                                    }
                                ));
                            else
                                actions.push(replacePlaceholders(
                                    labels.remove.thisCard[mayMust],{
                                        optionalityrepeating:optionalityrepeating,
                                    }
                                ));
                            textSides[textSide].push(formatConditionedAction(language,conditions,actions));
                            break;
                        }
                        case "pick":{
                            let
                                mayMust=getMayMust(action.optionality,action.repeating),
                                optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating);
                            textSides[textSide].push(getEffectText(language,replacePlaceholders(
                                labels.pick[mayMust],{
                                    optionalityrepeating:optionalityrepeating,
                                    bannerType:getBannerLabel(language,action.bannerType),
                                }
                            )));
                            break;
                        }
                        case "emptyIfRoom":{
                            let
                                conditions=[],
                                actions=[];
                            conditions.push(replacePlaceholders(
                                labels.check.room,{
                                    room:side.placeholders["roomCard-"+action.checkRoom]
                                }
                            ));
                            actions.push(labels.cardIsEmpty);
                            textSides[textSide].push(formatConditionedAction(language,conditions,actions));
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
                                    room:side.placeholders["roomId-"+action.checkRoom]
                                }
                            ));
                            actions.push(replacePlaceholders(
                                labels.gainBonus[mayMust],{
                                    optionalityrepeating:optionalityrepeating,
                                    amount:action.amount,
                                    resource:getResourceLabel(language,action.resource)
                                }
                            ));
                            textSides[textSide].push(formatConditionedAction(language,conditions,actions));
                            break;
                        }
                        */
                    }
                });

                if (textSide == 0)
                    cardPrinter.addText(actionTextSettings,rulers.content.textBox,textSides[0].join(" "));
                else {
                    if (textSides[0].length) cardPrinter.addText(actionTextSettings,rulers.content.topTextBox,textSides[0].join(" "));
                    if (textSides[1].length) cardPrinter.addText(actionTextSettings,rulers.content.bottomTextBox,textSides[1].join(" "));
                }
            }

            if (istop) {
                cardPrinter.addRect(rulers.halfSeparator,"#000");
                if (!settings.noCode)
                    cardPrinter.printAt("cardCodeText",rulers.cardNumber,data.cardCode);
            } else
                cardPrinter.delete(["mapCardTopMarker"]);
        }
        
        cardPrinter.startUpperSide();
        printSide(settings,data,data.sides[0],true);
        cleanSide();
        if (settings.noBorder)
            cardPrinter.delete([
                "mapCardCutout"
            ]);


        cardPrinter.startLowerSide();
        printSide(settings,data,data.sides[1]);
        cleanSide();
        cardPrinter.delete([
            "mapCardCutout"
        ]);

    }

    this.print=(settings,then)=>{

        const template=new SVGTemplate((settings.root||"")+"svg/model.svg",true);
        template.load(()=>{
        
            let
                language=LANGUAGES[settings.language],
                svg=new SVG(template),
                map=generateOverworld(modifiers),
                translatedNarrative=translateNarrativePlaceholders(language,map.narrative),
                borderTop=(SHEETHEIGHT-(CARDHEIGHT*3+CARDSPACING*2))/2,
                borderLeft=(SHEETWIDTH-(CARDWIDTH*3+CARDSPACING*2))/2,
                cards=[];
        
            map.cards.forEach((card,id)=>{
                let
                    x=settings.flipX?2-id%3:id%3,
                    y=Math.floor(id/3),
                    dx=borderLeft+((CARDWIDTH+CARDSPACING)*x),
                    dy=borderTop+((CARDHEIGHT+CARDSPACING)*y);
                
                cards.push({x:dx,y:dy,width:CARDWIDTH,height:CARDHEIGHT});
                printMapCard(settings,svg,language,map.narrative,translatedNarrative,dx,dy,card);
            });

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