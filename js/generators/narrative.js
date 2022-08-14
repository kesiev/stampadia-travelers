function NarrativeGenerator(random) {
    let
        villains=loadNarrativeVillains(),
        names=loadNarrativeNames(),
        enemies=loadNarrativeEnemies();

    function createCharacter(type,character) {
        return {
            id:random.getElement(character.id),
            type:type,
            name:random.getFloat(),
            intro:random.getFloat(),
            defeat:random.getFloat(),
            description:random.getFloat(),
            initialFormDefeat:random.getFloat(),
            finalFormIntro:random.getFloat(),
            finalFormDefeat:random.getFloat(),
            avatar:random.getElement(character.avatar)   
        };
    }

    this.generate=()=>{
        let
            out={
                names:{

                },
                characters:{
                    villain:createCharacter("villain",random.getElement(villains))
                }
            };

        names.forEach(name=>{
            out.names[name]=random.getFloat();
        });

        for (let k in enemies) {
            let enemiesBag=random.createBag(enemies[k],true);
            for (let i=0;i<5;i++)
                out.characters["enemy-"+k+"-"+i]=createCharacter("enemy",random.getFromBag(enemiesBag));
        }

        return out;
    }
}

function translateCharacterAttribute(language,character,attribute) {
    let list=language.narrative[character.type][character.id][attribute];
    return list[Math.floor(list.length*character[attribute])];
}

function translateNarrativePlaceholders(language,narrative) {
    let out={};
    for (let k in narrative.names)
        out[k+"-name"]=language.narrative.names[k][Math.floor(narrative.names[k]*language.narrative.names[k].length)];
    for (let k in narrative.characters) {
        let character=narrative.characters[k];
        out[k+"-name"]=translateCharacterAttribute(language,character,"name");
        out[k+"-intro"]=translateCharacterAttribute(language,character,"intro");
        out[k+"-defeat"]=translateCharacterAttribute(language,character,"defeat");
        out[k+"-description"]=translateCharacterAttribute(language,character,"description");
    }
    return out;
}