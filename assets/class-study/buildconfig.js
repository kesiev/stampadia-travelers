const
    ENEMYMAP=[0,0,{"atk":[2,4],"def":[3,5]},{"atk":[3,5],"def":[6,6]},{"atk":[7,8],"def":[10,10]},{"atk":[8,8],"def":[12,12]},{"atk":[8,11],"def":[14,17]},{"atk":[8,13],"def":[16,18]},{"atk":[9,14],"def":[16,18]},{"atk":[10,14],"def":[16,27]}];
    TOLLERANCE=2,
    /*
    COMBINATIONS_THRESHOLD = [
        0,0,
        [500,30],
        [500,80],
        [500,100],
        [500,150],
        [500,190],
        [500,190],
        [500,190],
        [500,190],
    ];
    */
    COMBINATIONS_THRESHOLD = [
        0,0,
        [70,70],
        [70,70],
        [70,70],
        [70,70],
        [70,70],
        [70,70],
        [70,70],
        [70,70],
    ];
    args = process.argv.slice(2),
    fs = require('fs');

let sorter=(a,b) => a-b;

function getThresholdValue(list,level,recoverable) {
    let sum=0;
    for (let i=list.length-1;i>=0;i--) {
        //console.log("- ",i,": ",list[i],"sum",sum,"/",COMBINATIONS_THRESHOLD[level][recoverable]);
        if (list[i])
            sum+=list[i];
        if (sum>=COMBINATIONS_THRESHOLD[level][recoverable]) return [sum,i];
    }
    return 0;
}

function getThresholdForSkill(list,skill) {
    let sum=0;
    for (let i=skill;i<list.length;i++)
        if (list[i])
            sum+=list[i];
    return sum;
}

function compare(critical,label,level,recoverable,a,b,limit) {
    let
        avg=Math.ceil((b+limit)/2);
        warn = avg>a[1];
        error = a[1]<limit;
        

    console.log((critical ? (error ? "[!!!] " : warn ? " [!] " : "  |  " ) : "  |  ")+label,a[1],"("+a[0]+"/"+COMBINATIONS_THRESHOLD[level][recoverable]+") vs.",b,(a[1]-b<-TOLLERANCE?"TOO WEAK":a[1]-b>TOLLERANCE?"TOO STRONG":""),error?"[!!! "+a[1]+"<"+limit+"]":warn?"[! "+a[1]+"<"+avg+"]":"");
}

fs.readFile( "data/" + args[0] + ".json", function (err, data) {

    let
        enemymap=[];
        data=JSON.parse(data),
        level=0;
    for (let i=0;i<10;i++) {
        let level=data.levels[i];
        if (level) {
            console.log("Level",i);
            let
                highestRecoverableDefenseThreshold=getThresholdForSkill(level.count.recoverable.defense,ENEMYMAP[i].atk[0]),
                highestRecoverableAttackThreshold=getThresholdForSkill(level.count.recoverable.attack,ENEMYMAP[i].def[0]),
                highestUnrecoverableDefenseThreshold=getThresholdForSkill(level.count.unrecoverable.defense,ENEMYMAP[i].atk[1]),
                highestUnrecoverableAttackThreshold=getThresholdForSkill(level.count.unrecoverable.attack,ENEMYMAP[i].def[1]),
                highestRecoverableDefense=getThresholdValue(level.count.recoverable.defense,i,0),
                highestRecoverableAttack=getThresholdValue(level.count.recoverable.attack,i,0),
                highestUnrecoverableDefense=getThresholdValue(level.count.unrecoverable.defense,i,1),
                highestUnrecoverableAttack=getThresholdValue(level.count.unrecoverable.attack,i,1);

            compare(false,"highestRecoverableDefense",i,0,highestRecoverableDefense,ENEMYMAP[i].atk[0]);
            compare(true,"highestRecoverableAttack",i,0,highestRecoverableAttack,ENEMYMAP[i].def[0]);
            compare(false,"highestUnrecoverableDefense",i,1,highestUnrecoverableDefense,ENEMYMAP[i].atk[1],ENEMYMAP[i].atk[0]);
            compare(true,"highestUnrecoverableAttack",i,1,highestUnrecoverableAttack,ENEMYMAP[i].def[1],ENEMYMAP[i].def[0]);

            enemymap.push({
                atk:[highestRecoverableDefense[1],highestUnrecoverableDefense[1]].sort(sorter),
                def:[highestRecoverableAttack[1],highestUnrecoverableAttack[1]].sort(sorter)
            });
        } else enemymap.push(0);
    }
    console.log("ENEMYMAP");
    console.log(JSON.stringify(enemymap));
});

