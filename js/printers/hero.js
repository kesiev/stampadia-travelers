function HeroPrinter(modifiers) {

    let
        titleSettings={
            modelId:"cardTitle",
            wordSpacing:WORDSPACING,
            lineSpacing:LINESPACING,
            textGap:TEXTGAP,
            verticalAlignment:"center",
            horizontalAlignment:"center"
        },
        subtitleSettings={
            modelId:"heroCardSmallText",
            wordSpacing:WORDSPACING,
            lineSpacing:LINESPACING,
            textGap:SMALLTEXTGAP,
            verticalAlignment:"center",
            horizontalAlignment:"center"
        };
        
    function printHelperCard(settings,svg,playerClass,language,x,y) {


        function getLabel(label) {
            let set=language.heroCard.classes[playerClass.id][label[0]];
            return set[Math.floor(set.length*label[1])];
        }

        let
            rulers,
            cardPrinter=new CardPrinter(svg,"heroHelpContainer",x,y);
            titleBox=cardPrinter.getPlaceholder("heroHelpTitle"),
            subTitleBox=cardPrinter.getPlaceholder("heroHelpSubtitle");

        cardPrinter.setEdges("heroHelpEdges");
        cardPrinter.setBorder("heroHelpBorder");
        cardPrinter.setLargeSymbolsSize("heroCardManaSymbolEdges");
        cardPrinter.setInnerBorderSpacing(0);

        cardPrinter.startUpperSide();
        rulers=cardPrinter.getHelperCardRulers({
            cornerSize:7.879,
        });
        
        cardPrinter.addText(titleSettings,titleBox,getLabel(playerClass.name));
        cardPrinter.addText(subtitleSettings,subTitleBox,getLabel(playerClass.description));

        if (!settings.noCode)
            cardPrinter.printAt("cardCodeText",rulers.cardNumber,playerClass.heroCardCode);

        cardPrinter.delete([
            "heroHelpBorder"
        ]);

        if (settings.noBorder)
            cardPrinter.delete([
                "heroHelpCutout"
            ]);
    }

    function printHeroCard(settings,svg,playerClass,language,x,y,data) {

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
                modelId:"heroCardLargeText",
                wordSpacing:WORDSPACING,
                lineSpacing:LINESPACING,
                textGap:LARGETEXTGAP,
                verticalAlignment:"center",
                horizontalAlignment:"center"
            },
            areaSettings={
                titleHeight:8.5,
                separatorSpacing:3.5
            },
            labels=language.heroCard,
            classLabels=labels.classes[playerClass.id],
            perksLabels=labels.perks,
            cardPrinter=new CardPrinter(svg,"heroCardContainer",x,y);
    
        cardPrinter.setEdges("heroCardEdges");
        cardPrinter.setBorder("heroCardBorder");
        cardPrinter.setLargeSymbolsSize("heroCardManaSymbolEdges");
        cardPrinter.setInnerBorderSpacing(INNERBORDERSPACING);
    
        function cleanSide() {
            cardPrinter.delete([
                "heroCardBorder"
            ]);
        }
    
        function printOption(box,option) {

            if (option.cost) {
                if (option.cost.mana !== undefined)
                    cardPrinter.addLargeSymbol("heroCardManaSymbol",box.costSymbol,symbolsSettings,option.cost.mana);
            }
    
            let textOptions=[];
            option.effects.forEach(effect=>{
                let textConditions=[],textEffects=[];
                if (effect.if)
                    effect.if.forEach(condition=>{
                        let branch=labels.condition[condition.action];
                        if (branch)
                            switch (condition.action) {
                                case "checkPrevious":
                                case "check":{
                                    branch=branch[condition.attribute];
                                    if (branch) {
                                        if (condition.subject)
                                            condition.subject = labels.condition.subjects[condition.subject];
                                        else
                                            condition.subject = labels.condition.subjects.inPlay;
                                        if (labels.condition.valueFormatters[condition.attribute] && labels.condition.valueFormatters[condition.attribute][condition.value])
                                            condition.formattedValue = labels.condition.valueFormatters[condition.attribute][condition.value];
                                        branch=branch[condition.operator];
                                        if (branch) {
                                            textConditions.push(replacePlaceholders(branch,condition));
                                        } else console.warn("Missing operator",condition);
                                    } else console.warn("Missing attribute",condition);
                                    break;
                                }
                                case "checkConstellation":{
                                    branch=branch[condition.place];
                                    textConditions.push(replacePlaceholders(branch,{
                                        constellation:formatSimpleSequence(language,condition.constellation,labels.condition.valueFormatters.stars)
                                    }));
                                    break;
                                }
                                default:{
                                    console.warn("Unsupported condition action",condition);
                                }
                            }
                        else if (condition.action!="pay")
                            console.warn("Missing condition",condition);
                    });
                if (effect.then) 
                    effect.then.forEach(action=>{
                        let branch=labels.effect[action.action];
                        if (branch)
                            switch (action.action) {
                                case "set":
                                case "multiplyBy":
                                case "pay":
                                case "gain":{
                                    branch=branch[action.attribute];
                                    if (branch) {
                                        textEffects.push(replacePlaceholders(branch,action));
                                    } else console.warn("Missing action attribute",action);
                                    break;
                                }
                                case "gainTick":{
                                    let text=branch.action+"{newline}";
                                    action.bar.forEach(cell=>{
                                        text+="{symbol heroCardTickBox-"+cell+"}";
                                    });
                                    if (action.endBar) text+="{symbol heroCardEndTickBox-"+action.endBar+"}";
                                    text+="{newline}"+branch.gain[action.attribute];
                                    textEffects.push(text);
                                    break;
                                }
                                case "transfer":{
                                    branch=branch[action.attribute];
                                    if (branch) {
                                        branch=branch[action.toAttribute];
                                        if (branch)
                                            textEffects.push(replacePlaceholders(branch,action));
                                        else
                                            console.warn("Missing action toattribute",action);
                                    } else console.warn("Missing action attribute",action);
                                    break;
                                }
                                case "pickFrom":{
                                    branch=branch[action.from];
                                    if (branch) {
                                        textEffects.push(replacePlaceholders(branch,{
                                            cards:getEntityLabel(language,"cards",action.cards),
                                            used:getEntityLabel(language,"used",action.cards),
                                        }));
                                    } else console.warn("Missing action attribute",action);
                                    break;
                                }
                                default:{
                                    console.warn("Unsupported condition action",action);
                                }
                            }
                        else
                            console.warn("Missing action",action);
                    });

                textOptions.push(formatConditionedAction(language,textConditions,textEffects));
               
            });
    
            cardPrinter.addText(actionTextSettings,box.textBox,textOptions.join(labels.optionsSeparator).trim());
        }
    
        function printSide(settings,card,side,istop) {
    
            let
                rulers,
                titleBox=cardPrinter.getPlaceholder("heroCardTitle"),
                subTitleBox=cardPrinter.getPlaceholder("heroCardSubtitle");
    
            if (side) {
    
                let
                    cardTitle="No title",
                    cardSkill = classLabels.skills[side.id];
    
                if (cardSkill) {
                    if (side.perkId)
                        cardTitle = replaceValue(cardSkill.label,perksLabels[side.perkId][cardSkill.valueGenre]);
                    else
                        cardTitle = replaceValue(cardSkill.label,"");
    
                    cardTitle = capitalize(cardTitle.trim());
                }
    
                cardPrinter.addText(titleSettings,titleBox,cardTitle);
    
                let
                    smallText=[];
                    text="",
                    condition="",
                    exhaustSide=istop?"top":"bottom";
                text+=labels.exhaust.label+": ";
    
                if (side.exhaustCost) {
                    if (side.exhaustCost.mana)
                        text+=replaceValue(labels.exhaust[exhaustSide].cost.mana,side.exhaustCost.mana);
                    else
                        text+=labels.exhaust[exhaustSide].noCost;
                }
                smallText.push(text);
    
                console.log(smallText.join(labels.smallTextSeparator));
            
                cardPrinter.addText(subtitleSettings,subTitleBox,smallText.join(labels.smallTextSeparator));
    
                if (side.options.length == 1) {
                    rulers=cardPrinter.getSingleActionCardRulers(areaSettings);
                    printOption(rulers.content,side.options[0]);
                } else {
                    rulers=cardPrinter.getSplitActionCardRulers(areaSettings);
                    printOption(rulers.content[0],side.options[0]);
                    printOption(rulers.content[1],side.options[1]);
                    cardPrinter.addRect(rulers.separator,"#000",1,"heroCardRibbon1");
                }
    
                if (side.gain) {
                    if (side.gain.mana !== undefined)
                        cardPrinter.addLargeSymbol("heroCardManaSymbol",rulers.resources,symbolsSettings,side.gain.mana);
                }
    
                if (side.element) {
                    let symbol;
                    switch (side.element) {
                        case "air":{
                            symbol="heroCardAirSymbol";
                            break;
                        }
                        case "water":{
                            symbol="heroCardWaterSymbol";
                            break;
                        }
                        case "earth":{
                            symbol="heroCardEarthSymbol";
                            break;
                        }
                        case "fire":{
                            symbol="heroCardFireSymbol";
                            break;
                        }
                        default:{
                            console.warn("Unsupported element",side.element);
                        }
                    }
                    cardPrinter.addLargeSymbol(symbol,rulers.element);
                }
               
            } else rulers=cardPrinter.getSingleActionCardRulers(areaSettings);
             
            if (istop) {
                cardPrinter.delete(["heroCardRibbon2"]);
                cardPrinter.addRect(rulers.halfSeparator,"#000");
                if (!settings.noCode)
                    cardPrinter.printAt("cardCodeText",rulers.cardNumber,data.cardCode);
            } else {
                cardPrinter.delete(["heroCardRibbon1"]);
            }
    
        }
    
        cardPrinter.startUpperSide();
        printSide(settings,data,data.sides[0],true);
        cleanSide();

        if (settings.noBorder)
            cardPrinter.delete([
                "heroCardCutout"
            ]);

        cardPrinter.startLowerSide();
        printSide(settings,data,data.sides[1]);
        cleanSide();

        cardPrinter.delete([
            "heroCardCutout"
        ]);
    
    }

    this.print=(settings,then)=>{

        const template=new SVGTemplate((settings.root||"")+"svg/model.svg",true);
        template.load(()=>{

            let
                cardWidth = CARDWIDTH+CARDSPACING,
                cardHeight = CARDHEIGHT+CARDSPACING,
                svg=new SVG(template),
                playerClass=generateHero(modifiers);
                borderTop=(SHEETHEIGHT-(CARDHEIGHT*3+CARDSPACING*2))/2,
                borderLeft=(SHEETWIDTH-(CARDWIDTH*3+CARDSPACING*2))/2,
                cards=[];

            playerClass.cards.forEach((card,id)=>{
                let
                    x=settings.flipX?2-id%3:id%3,
                    y=Math.floor(id/3),
                    dx=borderLeft+(cardWidth*x),
                    dy=borderTop+(cardHeight*y);
                
                cards.push({x:dx,y:dy,width:CARDWIDTH,height:CARDHEIGHT});
                printHeroCard(settings,svg,playerClass,LANGUAGES[settings.language],dx,dy,card);
            });

            printHelperCard(
                settings,svg,playerClass,LANGUAGES[settings.language],
                settings.flipX?borderLeft:borderLeft+(cardWidth*2),
                borderTop+(cardHeight*2)
            );

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
