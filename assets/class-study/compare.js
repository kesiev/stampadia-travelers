const
    args = process.argv.slice(2),
    fs = require('fs');

fs.readFile( "data/"+args[0]+'.json', function (err, data) {
    let stats1=JSON.parse(data);

    fs.readFile( "data/"+args[1]+'.json', function (err, data) {
        let stats2=JSON.parse(data);    

        stats2.levels.forEach((level2,level)=>{
            if (level2) {
                level1=stats1.levels[level];
                console.log("\nLevel "+level+" ["+args[0]+" -> "+args[1]+"]");
                for (let k in level2.highest)
                    for (let j in level2.highest[k])
                        if (level1.highest[k][j]) {
                            let
                                delta=level2.highest[k][j].value-level1.highest[k][j].value,
                                timesDelta=level2.count[k][j][level2.highest[k][j].value]-level1.count[k][j][level1.highest[k][j].value];
                            console.log(k,j,": "+level2.highest[k][j].value+" (was "+level1.highest[k][j].value+" "+(delta>0?"+":"")+delta+") ("+level2.count[k][j][level2.highest[k][j].value]+": "+((timesDelta>0?"+":"")+timesDelta)+")");
                        } else 
                            console.log(k,j,": "+level2.highest[k][j].value+" (NEW) ("+level2.count[k][j][level2.highest[k][j].value]+": NEW)");
            }
        })

    });
    
});
