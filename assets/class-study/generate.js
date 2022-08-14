const
    DEBUG=true,
    LOOKFORATTACK=0,
    LEVELS=[2,9],
    HANDSIZE=5,
    GENERATEHERO={
        classType:"swordsman",
        seed:348,
        noPerks:false,
        //noRandom:true,
        //noSkills:true,
        //testSkill:"basicSpecial2"
    },
    args = process.argv.slice(2);

const { resolve } = require('path');
const { Worker } = require('worker_threads')

let
    Cards = require('../../js/generators/hero.js'),
    fs = require('fs'),
    cards = Cards.generateHero(GENERATEHERO).cards;

const runService = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0) reject(new Error(` Worker Thread stopped with exit code ${code}`))
        })
    })
}

const run = (config) => {
    return new Promise((resolve,reject)=>{
        let promises=[];
        for (let i=0;i<cards.length;i++)
            for (let j=0;j<2;j++)
                promises.push(runService({
                    DEBUG:DEBUG,
                    cards:cards,
                    cardId:i,
                    sideId:j,
                    config:config
                }));
        Promise.all(promises).then((values) => {
            let merge={
                count:{},
                highest:{}
            };
            values.forEach(value=>{
                for (var k in value.count) {
                    if (!merge.count[k]) merge.count[k]={};
                    for (var j in value.count[k]) {
                        if (!merge.count[k][j]) merge.count[k][j]=[];
                        value.count[k][j].forEach((val,id)=>{
                            merge.count[k][j][id]=(merge.count[k][j][id]||0)+val;
                        })
                    }
                }

                for (var k in value.highest) {
                    if (!merge.highest[k]) merge.highest[k]={};
                    for (var j in value.highest[k]) {
                        if (!merge.highest[k][j]) merge.highest[k][j]={value:0};
                        if (merge.highest[k][j].value<value.highest[k][j].value)
                            merge.highest[k][j]=value.highest[k][j];
                    }
                }

            })

            for (var k in merge.highest)
                for (var j in merge.highest[k]) {
                    console.log("  |");
                    console.log("  \\_ highest "+k+" "+j+": "+merge.highest[k][j].value);
                    if (merge.highest[k][j].play.logs)
                        merge.highest[k][j].play.logs.forEach(log=>{
                            console.log("  |   - "+log);
                        })
                }


            resolve(merge);

        });
    })   
}

let prevStats;

async function runAll() {
    let result = {
        levels:[]
    };
    for (let i=LEVELS[0];i<=LEVELS[1];i++) {
        console.log("Level "+i+"...");
        result.levels[i]=await run({
            resourcesLimit:{
                mana:i
            },
            lookForAttack:LOOKFORATTACK,
            handSize:HANDSIZE
        });
    }

    if (args[0])
        fs.writeFile("data/"+args[0]+'.json', JSON.stringify(result), function (err) {
            if (err) return console.log(err);
            else console.log("Saved as "+args[0]+".");
        });    
    
}

runAll();
