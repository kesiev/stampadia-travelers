const
    DEBUG=false,
    CARDNUMBERSIZE=1.5,
    CARDNUMBERSPACING=0.45,
    CARDWIDTH=64,
    CARDHEIGHT=89,
    SHEETWIDTH=210,
    SHEETHEIGHT=297,
    CARDSPACING=0,
    WORDSPACING=0.5,
    LINESPACING=0,
    TEXTGAP=0.9;
    SMALLTEXTGAP=0.6,
    LARGETEXTGAP=1.1,
    INNERBORDERSPACING=1,
    EMPTYLINESIZE=2,
    SYMBOLDISTANCE=9.5;

let
    SIZERATIO = 1,
    ITALICSPACING = 0;

function formatOptionalityRepeating(language,optionality,repeating) {
    return (repeating?replaceValue(language.repeating[repeating.word][repeating.times==1?"singular":"plural"],repeating.times)+" ":"")+(
        optionality.word=="may"?
        language.optionality.may:
        ""
    )
}

function getMayMust(optionality,repeating) {
    if (optionality.word == "must")
        return "must";
    else
        return "may";
}

function getEntityLabel(language,entity,value) {
    if (value==1)
        return replaceValue(language.entities[entity][0],value);
    else
        return replaceValue(language.entities[entity][1],value);
}

function getBannerLabel(language,banner) {
    return language.entities.banners[banner];
}

function getResourceLabel(language,resource) {
    return language.entities.resources[resource];
}

function getPlaceLabel(language,place) {
    return language.places[place];
}

function getComparisonLabel(language,place) {
    return language.comparison[place];
}

function getEffectText(language,effect) {
    return addEnd(capitalize(effect.trim().replace( /\s\s+/g, ' ' ).replace( /\{newline\}/g, '\n\n' ).replace( / ,/g, ',' )),language.formatting.effectEnd,language.formatting.skipEndOn);
}

function replacePlaceholders(s,placeholders) {
    for (let k in placeholders)
        s=s.replace(new RegExp("{"+k+"}","g"),placeholders[k]);
    return s;
}

function replaceValue(s,value) {
    return s.replace(/\{value\}/g,value);
}

function capitalize(str) {
    return str.substr(0,1).toUpperCase()+str.substr(1);
}

function addEnd(str,end,skipon) {
    let add=true;
    if (skipon)
        skipon.forEach(close=>{
            if (str.substr(str.length-close.length)==close)
                add=false;
        })
    if (add) str+=end;
    return str;
}

function translateEnemyModifier(language,modifier,addend) {
    let
        translation,
        sublang=language.enemiesDescriptions[modifier.label],
        placeholders={};
    for (let k in modifier.placeholders)
        if (sublang.placeholders[k] === undefined)
            placeholders[k] = modifier.placeholders[k];
        else
            placeholders[k] = sublang.placeholders[k][modifier.placeholders[k]];
    translation=capitalize(replacePlaceholders(sublang.label,placeholders));
    if (addend) translation=addEnd(translation,language.formatting.effectEnd,language.formatting.skipEndOn);
    return {
        title:replacePlaceholders(sublang.title,placeholders),
        description:translation
    };
}

function formatConditionedAction(language,conditions,action,times) {
    let text="";
    if (conditions.length)
        text+=(times?times+" ":"")+conditions.join(language.conditions.separator)+language.conditions.effectSeparator;
    if (action.length)
        text+=action.join(language.conditions.actionSeparator);
    return getEffectText(language,text);
}

function formatSequence(language,sequence,elements) {
    let out=[];
    sequence.forEach(type=>{
        out.push(type[0]+elements[type[1]]);
    });
    return out.join(language.cardSet.separator);
}

function formatSimpleSequence(language,sequence,elements) {
    let out=[];
    sequence.forEach(type=>{
        out.push(elements[type]);
    });
    return out.join(language.cardSet.simpleSeparator);
}

function translateAction(language,labels,action,room,placeholders) {
    let
        ret="",
        mayMust=getMayMust(action.optionality,action.repeating),
        optionalityrepeating=formatOptionalityRepeating(language,action.optionality,action.repeating);
    switch (action.subtype) {
        case "shop":
        case "heal":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    place:getPlaceLabel(language,action.place),
                }
            ));
            break;
        }
        case "recover":
        case "swap":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    bannerType:getBannerLabel(language,action.bannerType),
                    bannerTypeTo:getBannerLabel(language,action.bannerTypeTo),
                }
            ));
            break;
        }
        case "discard":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    bannerType:getBannerLabel(language,action.bannerType)
                }
            ));
            break;
        }
        case "bannerChallenge":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    cardsPlace:getPlaceLabel(language,action.cardsPlace),
                    prizePlace:getPlaceLabel(language,action.prizePlace),
                    prizeCards:getEntityLabel(language,"cards",action.prizeCards),
                    punishmentCards:getEntityLabel(language,"cards",action.punishmentCards),
                    punishmentPlace:getPlaceLabel(language,action.punishmentPlace),
                    bannerType:getBannerLabel(language,action.bannerType),
                    comparison:getComparisonLabel(language,action.comparison),
                }
            ));
            break;
        }
        case "forge":{
            // This description changes from dungeon to overworld
            ret=getEffectText(language,replacePlaceholders(
                labels.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    bannerType:getBannerLabel(language,action.bannerType),
                    card:placeholders["roomCard-"+room.id],
                    sequence:formatSequence(language,action.sequence,language.entities.cardTypes)
                }
            ));
            break;
        }
        case "loot":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    buff:language.entities.loot[action.content]
                }
            ));
            break;
        }
        case "stopFight":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                }
            ));
            break;
        }
        case "ritual":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    prizeCards:getEntityLabel(language,"cards",action.prizeCards),
                }
            ));
            break;
        }
        case "sacrifice":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    buff:language.entities.loot[action.content],
                    place:getPlaceLabel(language,action.place),
                }
            ));
            break;
        }
        case "helper":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    buff:language.entities.loot[action.content],
                    sequence:formatSequence(language,action.sequence,language.entities.cardTypes)
                }
            ));
            break;
        }
        case "constellation":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    buff:language.entities.loot[action.content],
                    order:language.order[action.order],
                    sequence:formatSimpleSequence(language,action.sequence,language.entities.cardTypes)
                }
            ));
            break;
        }
        case "swapSequence":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    cards:getEntityLabel(language,"cards",action.cards),
                    sequence:formatSequence(language,action.sequence,language.entities.cardTypes)
                }
            ));
            break;
        }
        case "gambling":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating,
                    comparison:language.comparison[action.comparison],
                }
            ));
            break;
        }
        case "migration":
        case "discardHand":{
            ret=getEffectText(language,replacePlaceholders(
                language.actions[action.subtype][action.modifier][mayMust],{
                    optionalityrepeating:optionalityrepeating
                }
            ));
            break;
        }
    }
    return ret;
}

function CardPrinter(svg,modelid,x,y) {
    let
        side=0,
        containerNode=svg.getById(modelid),
        cardInnerBorder=0,
        cardBorderSize=0,
        largeSymbolsSize=0,
        width=0,
        height=0,
        fullCard=0,
        halfCard=0,
        root = svg.node.getElementsByTagName("svg")[0];
        bboxWidth = root.getBBox().width;

    // Firefox gets different sizes

    if (bboxWidth>10000) {
        SIZERATIO = 0.01;
        ITALICSPACING = -1.4;
    }

    function createRectangle(x,y,w,h) {

        let
            height=h-(cardBorderSize*2),
            cardInnerBorder = cardBorderSize+largeSymbolsSize+cardBorderInnerSpacing;

        return {
            full:{
                x:x,
                y:y,
                width:w,
                height:h
            },
            content:{
                x:x+cardBorderSize,
                y:y+cardBorderSize,
                width:width-(cardBorderSize*2),
                height:height,
                halfHeight:height/2
            },
            inner:{
                x:x+cardInnerBorder,
                y:y+cardBorderSize,
                width:width-(cardInnerBorder*2),
                height:height,
                halfHeight:height/2
            }
        }
    }

    function calculateSizes() {
        fullCard=createRectangle(0,0,width,height);
        halfCard=createRectangle(0,0,width,height/2);
    }

    function cloneNodeBy(into,id,newid,dx,dy,rotate,before) {
        let org,edgex=0,edgey=0,edgewidth=0,edge,ex,ey;
        if (typeof id == "string") org=svg.getById(id);
        else org=id;
        const copy=svg.copyNode(org);
        if (newid) svg.setId(copy,newid);

        for (let i=0;i<copy.childNodes.length;i++)
            if (copy.childNodes[i].setAttribute) {
                let node=copy.childNodes[i];
                node.removeAttribute("transform");
                if (!edge && (node.tagName=="rect")) {
                    edge=node;
                    edgex=svg.getNum(node,"x");
                    edgey=svg.getNum(node,"y");
                    edgewidth=svg.getNum(node,"width");
                    edgeheight=svg.getNum(node,"height");
                }
            }

        ex=dx-edgex;
        ey=dy-edgey;
        svg.moveNodeAt(copy,0,0);

        if (rotate)
            copy.setAttribute("transform","translate("+ex+","+ey+") rotate("+rotate+","+(edgex+edgewidth/2)+","+(edgey+edgeheight/2)+")");
        else
            copy.setAttribute("transform","translate("+ex+","+ey+")");

        if (edge) copy.removeChild(edge);

        if (before)
            svg.insertBefore(before,copy);
        else if (into)
            into.appendChild(copy);
        else
            svg.insertBefore(org,copy);

        return copy;
    }

    function addRect(box,color,opacity,before) {
        if (opacity === undefined) opacity=1;
        if (color === undefined) color="#ff0000";
        let rect=svg.createNode("rect");
        rect.setAttribute("style","fill:"+color+";fill-opacity:"+opacity);
        rect.setAttribute("width",box.width);
        rect.setAttribute("height",box.height);
        rect.setAttribute("x",box.x);
        rect.setAttribute("y",box.y);
        if (before) {
            let prevnode=svg.getById(before,side);
            side.insertBefore(rect,prevnode);
        } else
            side.appendChild(rect);
    }

    function measureNode(node) {
        let box=node.getBBox();
        return {
            x:box.x*SIZERATIO,
            y:box.y*SIZERATIO,
            width:box.width*SIZERATIO,
            height:box.height*SIZERATIO
        };
    }

    function richPrint(settings,x,y,width,height,text) {

        text=text+"";
        
        let
            node=svg.node,
            orgTextNode=svg.getById(settings.modelId),
            normalTextNode=cloneNodeBy(0,orgTextNode,0,0,0),
            boldTextNode=cloneNodeBy(0,orgTextNode,0,0,0),
            word="",
            lines=[],
            lineId=-1,
            cursorX=0,
            cursorY=0,
            oy=0,
            lineHeight=0,
            contentWidth=0,
            contentHeight=0,
            tag=false,
            bold=false,
            i=0;
            
        
        let disableKerning=(node)=>{
            node.setAttribute("style",node.getAttribute("style")+";font-kerning: none;");
        }
        
        let measureSymbol=(node)=>{
            let rect=node.querySelector("rect");
            if (rect) return measureNode(rect);
        }

        let setBold=(node)=>{
            let span=node.querySelector("tspan");
            span.setAttribute("style",span.getAttribute("style").replace(/font-family:[^;]+/,"font-family:Times"));
            span.setAttribute("style",span.getAttribute("style").replace("font-weight:normal","font-weight:bold"));
        }

        let printWord=()=>{
            if (word) {
                let node=0;
                if (tag) {
                    let parts=word.split(" ");
                    switch (parts[0]) {
                        case "symbol":{
                            node={
                                symbol:parts[1],
                                size:measureSymbol(svg.getById(parts[1]))
                            }
                            break;
                        }
                        case "bold":{
                            bold=true;
                            break;
                        }
                        case "endbold":{
                            bold=false;
                            break;
                        }
                    }
                } else {
                    let size;
                    if (bold) {
                        svg.setText(boldTextNode,word);
                        size=measureNode(boldTextNode);
                    } else {
                        svg.setText(normalTextNode,word);
                        size=measureNode(normalTextNode);
                    }
                    node={
                        text:word,
                        bold:bold,
                        size:size
                    };
                }
                if (node) {
                    if (cursorX) cursorX+=settings.wordSpacing;
                    if (cursorX+node.size.width>width)
                        newLine();
                    node.x=cursorX;
                    lines[lineId].boxes.push(node);
                    lineHeight=Math.max(lineHeight,node.size.height);
                    cursorX+=node.size.width;
                }
                word="";
            }
        }

        let closeLine=()=>{
            lines[lineId].width=cursorX;
            lines[lineId].height=lineHeight;
            contentWidth=Math.max(contentWidth,cursorX);
        }

        let newLine=()=>{
            if (lineId!=-1) closeLine();
            lineId++;
            if (lineId>0) cursorY+=(lineHeight||EMPTYLINESIZE)+settings.lineSpacing;
            cursorX=0;
            lineHeight=0;
            lines.push({
                y:cursorY,
                width:0,
                height:0,
                boxes:[]
            });
            
        }

        disableKerning(normalTextNode);
        disableKerning(boldTextNode);

        setBold(boldTextNode);

        newLine();

        while (i<text.length) {
            let ch=text[i];
            switch (ch) {
                case " ":{
                    if (tag) word+=ch;
                    else printWord();
                    break;
                }
                case "\n":{
                    if (!tag) {
                        printWord();
                        newLine();
                    }
                    break;
                }
                case "{":{
                    printWord();
                    tag=true;
                    break;
                }
                case "}":{
                    if (tag) {
                        printWord();
                        tag=false;
                    } else word+=ch;
                    break;
                }
                default:{
                    word+=ch;
                }
            }
            i++;
        }

        if (word) printWord();
        closeLine();
        contentHeight=cursorY+lineHeight;

        switch (settings.verticalAlignment) {
            case "center":{
                oy=y+(height-contentHeight)/2;
                break;
            }
            case "bottom":{
                oy=y+(height-contentHeight);
                break;
            }
            default:{
                oy=y;
            }
        }

        lines.forEach(line=>{
            let ox=0;
            switch (settings.horizontalAlignment) {
                case "center":{
                    ox=x+(width-line.width)/2;
                    break;
                }
                case "right":{
                    ox=x+width-line.width;
                    break;
                }
                default:{
                    ox=x;
                }
            }
            line.boxes.forEach(box=>{
                let
                    dx=box.x+ox,
                    dy=oy+line.y+(line.height-box.size.height)/2;
                if (box.text) {
                    let node=cloneNodeBy(side,orgTextNode,0,dx,dy+box.size.height-settings.textGap);
                    disableKerning(node);
                    svg.setText(node,box.text);
                    if (box.bold) setBold(node);
                }
                if (box.symbol)
                    cloneNodeBy(side,box.symbol,0,dx,dy);
            });
            
        });
        
        svg.delete(normalTextNode);
        svg.delete(boldTextNode);

    }

    function addCardNumberRulers(rulers) {
        rulers.cardNumber = {
            isCardNumber:true,
            x:fullCard.full.x+halfCard.full.width-CARDNUMBERSIZE-CARDNUMBERSPACING,
            y:fullCard.content.y,
            width:CARDNUMBERSIZE,
            height:fullCard.content.height,
            angle:90
        };
    }

    this.setText=(parent,id,text)=>{
        let
            node=svg.getById(id,parent);
        if (node) {
            let span=node.querySelector("tspan");
            if (span) span.innerHTML=text;
        }
    }

    this.printAt=(model,area,text)=>{
        let
            measure,newnode,dx,dy,cx,cy,
            node=svg.node,
            template=cloneNodeBy(side,model,0,0,0),
            span=template.querySelector("tspan");
        
        span.innerHTML=text;
        measure=measureNode(template);

        cx=area.x+(area.width/2);
        cy=area.y+(area.height/2);
        dx=-(measure.width/2)+cx;

        if (area.isCardNumber)
            dy=(measure.height/4)+area.y+area.height-(measure.width/2);
        else
            dy=(measure.height/4)+cy;

        newnode = cloneNodeBy(side,model,0,0,0);
        newnode.setAttribute("transform","translate("+dx+","+dy+") rotate("+(area.angle||0)+","+measure.width/2+",-"+measure.height/4+")");
        newnode.querySelector("tspan").innerHTML=text;

        svg.delete(template);

        return newnode;

    }

    this.setEdges=id=>{
        let edgesNode=svg.getById(id);
        width=svg.getNum(edgesNode,"width"),
        height=svg.getNum(edgesNode,"height")
    }

    this.setInnerBorderSpacing=spacing=>{
        cardBorderInnerSpacing=spacing;
    }

    this.setBorder=id=>{
        let borderNode=svg.getById(id);
        cardBorderSize=svg.getNum(borderNode,"x");
    }

    this.setLargeSymbolsSize=id=>{
        let symbolNode=svg.getById(id);
        largeSymbolsSize=svg.getNum(symbolNode,"width");
    }

    this.startUpperSide=()=>{
        side=cloneNodeBy(0,containerNode,0,x,y);
        calculateSizes();
        return side;
    }

    this.startLowerSide=()=>{
        side=cloneNodeBy(0,containerNode,0,x,y,180);
        calculateSizes();
        return side;
    }

    this.getSplitActionCardRulers=(settings)=>{
        let
            innerHeight=halfCard.inner.height-settings.titleHeight,
            halfInnerHeight=innerHeight/2,
            costSymbolSpacing=(halfInnerHeight-largeSymbolsSize)/2;
            rulers={
                halfSeparator:{
                    x:halfCard.full.x,
                    y:halfCard.full.y+halfCard.full.height-0.5,
                    width:halfCard.full.width,
                    height:0.5
                },
                separator:{
                    x:halfCard.content.x+settings.separatorSpacing,
                    y:halfCard.inner.y+settings.titleHeight+halfInnerHeight-0.25,
                    width:halfCard.content.width-settings.separatorSpacing*2,
                    height:0.5
                },
                element:{
                    x:halfCard.content.x,
                    y:halfCard.content.y,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                resources:{
                    x:halfCard.content.x+halfCard.content.width-largeSymbolsSize,
                    y:halfCard.content.y,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                classSymbol:{
                    x:halfCard.content.x+halfCard.content.width-largeSymbolsSize,
                    y:halfCard.content.y+halfCard.content.height-SYMBOLDISTANCE,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                content:[
                    {
                        textBox:{
                            x:halfCard.inner.x,
                            y:halfCard.inner.y+settings.titleHeight,
                            width:halfCard.inner.width,
                            height:halfInnerHeight
                        },
                        costSymbol:{
                            x:halfCard.content.x,
                            y:halfCard.content.y+settings.titleHeight+costSymbolSpacing,
                            width:largeSymbolsSize,
                            height:largeSymbolsSize
                        }
                    },{
                        textBox:{
                            x:halfCard.inner.x,
                            y:halfCard.inner.y+settings.titleHeight+halfInnerHeight,
                            width:halfCard.inner.width,
                            height:halfInnerHeight
                        },
                        costSymbol:{
                            x:halfCard.content.x,
                            y:halfCard.content.y+settings.titleHeight+halfInnerHeight+costSymbolSpacing,
                            width:largeSymbolsSize,
                            height:largeSymbolsSize
                        }
                    }
                ]
            };
        addCardNumberRulers(rulers);
        if (DEBUG) {
            addRect(halfCard.content,"#00ff00",0.1);
            addRect(halfCard.inner,"#00ff00",0.1);
            addRect(rulers.resources,"#00ff00",0.1);
            addRect(rulers.element,"#00ff00",0.1);
            addRect(rulers.content[0].textBox,"#ff0000",0.1);
            addRect(rulers.content[0].costSymbol,"#ff0000",0.1);
            addRect(rulers.content[1].textBox,"#ffff00",0.1);
            addRect(rulers.content[1].costSymbol,"#ffff00",0.1);
            addRect(rulers.cardNumber,"#00ff00",0.1);
        }
        return rulers;
    }

    this.getPlaceholder=function(id,parent) {
        let
            node=svg.getById(id,parent||side);
            box={
                x:svg.getNum(node,"x"),
                y:svg.getNum(node,"y"),
                width:svg.getNum(node,"width"),
                height:svg.getNum(node,"height")
            };
        node.parentNode.removeChild(node);
        return box;
    }
    
    this.getHelperCardRulers=(settings)=>{
        let
            rulers={
                classSymbol:{
                    x:halfCard.content.x+halfCard.content.width-largeSymbolsSize-0.5,
                    y:halfCard.content.y+0.19,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
            };

        addCardNumberRulers(rulers);
        if (DEBUG) {
            addRect(rulers.cardNumber,"#00ff00",0.1);
        }
        return rulers;
    }

    this.getSingleActionCardRulers=(settings)=>{
        let
            innerHeight=halfCard.inner.height-settings.titleHeight,
            rulers={
                halfSeparator:{
                    x:halfCard.full.x,
                    y:halfCard.full.y+halfCard.full.height-0.5,
                    width:halfCard.full.width,
                    height:0.5
                },
                resources:{
                    x:halfCard.content.x+halfCard.content.width-largeSymbolsSize,
                    y:halfCard.content.y,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                element:{
                    x:halfCard.content.x,
                    y:halfCard.content.y,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                classSymbol:{
                    x:halfCard.content.x+halfCard.content.width-largeSymbolsSize,
                    y:halfCard.content.y+halfCard.content.height-SYMBOLDISTANCE,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                content:{
                    textBox:{
                        x:halfCard.inner.x,
                        y:halfCard.inner.y+settings.titleHeight,
                        width:halfCard.inner.width,
                        height:innerHeight
                    },
                    costSymbol:{
                        x:halfCard.content.x,
                        y:halfCard.content.y+settings.titleHeight+(innerHeight-largeSymbolsSize)/2,
                        width:largeSymbolsSize,
                        height:largeSymbolsSize,
                    }
                }
            };

        addCardNumberRulers(rulers);
        if (DEBUG) {
            addRect(halfCard.content,"#00ff00",0.1);
            addRect(halfCard.inner,"#00ff00",0.4);
            addRect(rulers.resources,"#00ff00",0.1);
            addRect(rulers.element,"#00ff00",0.1);
            addRect(rulers.content.textBox,"#ff0000",0.1);
            addRect(rulers.content.costSymbol,"#ff0000",0.1);
            addRect(rulers.cardNumber,"#00ff00",0.1);
        }
        return rulers;
    }

    this.getTextMapCardRulers=(settings)=>{
        let
            enemyEdges=svg.getById(settings.enemyEdgesId),
            enemyWidth=svg.getNum(enemyEdges,"width"),
            enemyHeight=svg.getNum(enemyEdges,"height"),
            enemyTop=(halfCard.content.height-settings.titleHeight-enemyHeight)*settings.enemyCenter,
            enemyX=halfCard.content.x+(halfCard.content.width-enemyWidth)/2,
            enemyY=halfCard.content.y+settings.titleHeight+enemyTop,
            bodyX=halfCard.content.x+settings.bodySidesMargin,
            bodyWidth=halfCard.content.width-(settings.bodySidesMargin*2),
            rulers={
                halfSeparator:{
                    x:halfCard.full.x,
                    y:halfCard.full.y+halfCard.full.height-0.5,
                    width:halfCard.full.width,
                    height:0.5
                },
                enemy:{
                    x:enemyX,
                    y:enemyY,
                    width:enemyWidth,
                    height:enemyHeight
                },
                enemyAvatar:{
                    x:settings.enemyAvatarX+enemyX,
                    y:enemyY
                },
                cardId:{
                    x:halfCard.content.x,
                    y:halfCard.content.y,
                    width:largeSymbolsSize,
                    height:largeSymbolsSize
                },
                content:{
                    enemyDescriptionBox:{
                        x:enemyX+settings.enemyDescriptionX,
                        y:enemyY+settings.enemyDescriptionY,
                        width:settings.enemyDescriptionWidth,
                        height:settings.enemyDescriptionHeight
                    },
                    topTextBox:{
                        x:bodyX,
                        y:halfCard.content.y+settings.titleHeight,
                        width:bodyWidth,
                        height:enemyTop,
                    },
                    bottomTextBox:{
                        x:bodyX,
                        y:halfCard.content.y+settings.titleHeight+enemyTop+enemyHeight,
                        width:bodyWidth,
                        height:halfCard.content.height-settings.titleHeight-enemyTop-enemyHeight,
                    },
                    textBox:{
                        x:bodyX,
                        y:halfCard.content.y+settings.titleHeight,
                        width:bodyWidth,
                        height:halfCard.content.height-settings.titleHeight,
                    }
                }
            };

        addCardNumberRulers(rulers);
        if (DEBUG) {
            addRect(halfCard.content,"#00ff00",0.1);
            addRect(rulers.cardId,"#00ff00",0.1);
            addRect(rulers.content.textBox,"#ff0000",0.1);
            addRect(rulers.content.topTextBox,"#ff00ff",0.1);
            addRect(rulers.content.bottomTextBox,"#ff00ff",0.1);
            addRect(rulers.content.enemyDescriptionBox,"#ff0000",0.1);
        }
        return rulers;
    }

    this.getDungeonRulers=(settings)=>{
        let
            areaWidth=largeSymbolsSize*settings.cols+((settings.cols-1)*settings.spacing),
            areaHeight=largeSymbolsSize*settings.rows+((settings.rows-1)*settings.spacing),
            contentX=fullCard.content.x+(fullCard.content.width-areaWidth)/2,
            contentY=fullCard.content.y+(fullCard.content.height-areaHeight)/2,
            spacingX=largeSymbolsSize+settings.spacing,
            spacingY=largeSymbolsSize+settings.spacing
            tiles=[];

        for (let y=0;y<settings.rows;y++) {
            tiles[y]=[];
            for (let x=0;x<settings.cols;x++) {
                let
                    cellx=contentX+spacingX*x,
                    celly=contentY+spacingY*y;
                tiles[y].push({
                    cell:{
                        x:cellx,
                        y:celly
                    },
                    notes:[
                        {
                            x:cellx,
                            y:celly+settings.notesSpacing,
                            width:largeSymbolsSize,
                            height:settings.notesSize,
                            angle:0
                        },
                        {
                            x:cellx+largeSymbolsSize-settings.notesSpacing-settings.notesSize,
                            y:celly,
                            width:settings.notesSize,
                            height:largeSymbolsSize,
                            angle:90
                        },
                        {
                            x:cellx,
                            y:celly+largeSymbolsSize-settings.notesSpacing-settings.notesSize,
                            width:largeSymbolsSize,
                            height:settings.notesSize,
                            angle:180
                        },
                        {
                            x:cellx+settings.notesSpacing,
                            y:celly,
                            width:settings.notesSize,
                            height:largeSymbolsSize,
                            angle:270
                        },
                    ]
                });
            }
        }

        let rulers={
            angles:[
                {
                    x:fullCard.content.x,
                    y:fullCard.content.y,
                    width:settings.cornerSize,
                    height:settings.cornerSize,
                    angle:0
                },
                {
                    x:fullCard.content.x+fullCard.content.width-settings.cornerSize,
                    y:fullCard.content.y,
                    width:settings.cornerSize,
                    height:settings.cornerSize,
                    angle:90
                },
                {
                    x:fullCard.content.x+fullCard.content.width-settings.cornerSize,
                    y:fullCard.content.y+fullCard.content.height-settings.cornerSize,
                    width:settings.cornerSize,
                    height:settings.cornerSize,
                    angle:180
                },
                {
                    x:fullCard.content.x,
                    y:fullCard.content.y+fullCard.content.height-settings.cornerSize,
                    width:settings.cornerSize,
                    height:settings.cornerSize,
                    angle:270
                }
            ],
            tiles:tiles,
        };

        addCardNumberRulers(rulers);
        return rulers;
    }

    this.getDungeonLegendRulers=(settings)=>{
        let
            rulers,
            contentX=fullCard.content.x+cardBorderInnerSpacing,
            contentY=fullCard.content.y+cardBorderInnerSpacing,
            contentWidth=fullCard.content.width-(cardBorderInnerSpacing*2),
            contentHeight=fullCard.content.height-(cardBorderInnerSpacing*2),
            blockHeight=contentHeight/settings.blocksCount,
            blocks=[];

        for (let i=0;i<settings.blocksCount;i++)
            blocks.push({
                x:contentX,
                y:contentY+(blockHeight*i),
                width:contentWidth,
                height:blockHeight
            });

        rulers={
            pageNumber:{
                x:fullCard.content.x+fullCard.content.width-settings.pageNumberSize,
                y:fullCard.content.y+fullCard.content.height-settings.pageNumberSize,
                width:settings.pageNumberSize,
                height:settings.pageNumberSize,
                angle:0
            },
            blocks:blocks
        };

        addCardNumberRulers(rulers);
        return rulers;
    }

    this.addLargeSymbol=(id,box,textsettings,text)=>{
        let symbol=cloneNodeBy(side,id,0,box.x,box.y);
        if (textsettings)
            richPrint(textsettings,box.x,box.y,box.width,box.height,text);
        return symbol;
    }

    this.addStencil=(id,before,box,angle)=>{
        let symbol=cloneNodeBy(side,id,0,box.x,box.y,angle,svg.getById(before,side));
        return symbol;
    }

    this.addText=(settings,box,text)=>{
        richPrint(settings,box.x,box.y,box.width,box.height,text);
    }

    this.addRect=(box,color,opacity,before)=>{
        addRect(box,color,opacity,before);
    }

    this.setBackgroundColor=(id,color,parent)=>{
        let node=svg.getById(id,parent||side);
        node.setAttribute("style",node.getAttribute("style").replace(/fill:[^;]*/,"fill:"+color));
    }

    this.delete=list=>{
        list.forEach(id=>{
            let node=svg.getById(id,side);
            svg.delete(node);
        })
    }

    this.getSide=()=>side;

}
