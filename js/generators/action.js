function ActionGenerator(random) {

    const
        REPEATINGONCE={word:"exactly",times:1},
        REPEATINGANYTIME=0;

    this.prepare=(action,repeating,optionality)=>{
        let outaction=Tools.clone(action);
        switch (outaction.subtype) {
            case "bannerChallenge":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.comparison=random.getElement(outaction.comparison);
                outaction.cardsPlace=random.getElement(outaction.cardsPlace);
                outaction.prizeCards=random.getElement(outaction.prizeCards);
                outaction.prizePlace=random.getElement(outaction.prizePlace);
                outaction.punishmentCards=random.getElement(outaction.punishmentCards);
                outaction.punishmentPlace=random.getElement(outaction.punishmentPlace);
                outaction.modifier=random.getElement(outaction.modifier);
                outaction.bannerType=random.getElement(outaction.bannerType);
                break;
            }
            case "swap":
            case "recover":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.bannerType=random.getElement(outaction.bannerType);
                outaction.bannerTypeTo=random.getElement(outaction.bannerTypeTo);
                break;
            }
            case "discard":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.bannerType=random.getElement(outaction.bannerType);
                break;
            }
            case "sacrifice":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.content=random.getElement(outaction.content);
                outaction.place=random.getElement(outaction.place);
                break;
            }
            case "heal":
            case "shop":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.place=random.getElement(outaction.place);
                break;
            }
            case "swapSequence":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.sequence=random.getElement(outaction.sequence);
                break;
            }
            case "loot":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.content=random.getElement(outaction.content);
                break;
            }
            case "forge":{
                outaction.optionality=optionality;
                outaction.repeating=REPEATINGANYTIME;
                outaction.sequence=random.getElement(outaction.sequence);
                outaction.bannerType=random.getElement(outaction.bannerType);
                break;
            }
            case "ritual":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.cards=random.getElement(outaction.cards);
                outaction.prizeCards=random.getElement(outaction.prizeCards);
                break;
            }
            case "stopFight":{
                outaction.optionality=optionality;
                outaction.repeating=REPEATINGANYTIME;
                break;
            }
            case "constellation":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.sequence=random.getElement(outaction.sequence);
                outaction.content=random.getElement(outaction.content);
                outaction.order=random.getElement(outaction.order);
                break;
            }
            case "helper":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.sequence=random.getElement(outaction.sequence);
                outaction.content=random.getElement(outaction.content);
                break;
            }
            case "gambling":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                outaction.comparison=random.getElement(outaction.comparison);
                break;
            }
            case "migration":
            case "discardHand":{
                outaction.optionality=optionality;
                outaction.repeating=repeating;
                break;
            }
        }
        return outaction;
    }

}