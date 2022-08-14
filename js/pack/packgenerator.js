
function PackGenerator(timestamp) {

    const
        DAYMSEC = 1000*60*60*24,
        ADVENTURE=[
            "dungeon",
            "overworld"
        ],
        HEROCLASSES=[
            "swordsman",
            "elementalist"
        ];
    
    if (!timestamp) {
        let tmpdate = new Date(); 
        timestamp=Math.floor(tmpdate.getTime()/DAYMSEC)*DAYMSEC;
    }

    let
        busy=false,
        date=new Date(timestamp);

    console.log("SEED",timestamp);

    function getRandomLoop(list,gap) {
        let
            element=0,
            listcopy=Tools.clone(list),
            positions = timestamp%list.length+1,
            seed = gap+Math.floor(timestamp/list.length),
            random=new Random({ seed:seed });
        
        for (let i=0;i<positions;i++)
            element=random.removeElement(listcopy);

        return element;
    }

    function padNumber(value,size) {
        return value.toString().padStart(size,"0");
    }

    function generatePdf(cb, filename, pages, doc, id) {

        if (!id) id=0;

        if (!doc)
            doc = new jspdf.jsPDF({
                orientation: 'p',
                unit: 'mm'
            });

        if (pages[id]) {

            if (id>0) doc.addPage();

            let pdfNode = document.createElement("div");
            pdfNode.innerHTML=pages[id].svg.getSVG();
            const svgElement = pdfNode.firstElementChild;
            svgElement.getBoundingClientRect();
            doc.svg(svgElement).then(()=>generatePdf(cb,filename,pages,doc,id+1));

        } else  {

            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            const blob = new Blob([doc.output('arraybuffer')], {
                type: "application/pdf"
            });
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            document.body.removeChild(a);
            busy=false;
            cb("done");

        }

    }

    this.generate = function(settings,cb) {
        if (busy) return;
        let
            adventure=getRandomLoop(ADVENTURE,0),
            classType=getRandomLoop(HEROCLASSES,1000),
            serial="TOS"+padNumber(date.getFullYear(),4)+padNumber(date.getDate(),2)+padNumber(date.getMonth()+1,2);

        let heroPrinter = new HeroPrinter({
            classType:classType,
            seed:timestamp,
            setSide:"A",
            setCode:serial
        });

        busy=true;
        cb("generatingHero");

        heroPrinter.print(settings,heroPrint=>{
            
            let adventurePrinter;

            switch (adventure) {
                case "dungeon": {
                    adventurePrinter = new DungeonPrinter({
                        setSide:"B",
                        setCode:serial,
                        seed:timestamp
                    });
                    break;
                }
                case "overworld": {
                    adventurePrinter = new OverworldPrinter({
                        setSide:"B",
                        setCode:serial,
                        seed:timestamp
                    });
                    break;
                }
            }

            if (adventurePrinter) {
                cb("generatingAdventure");
                adventurePrinter.print(settings,adventurePrint=>{
                    generatePdf(cb, serial+"-"+settings.language+".pdf", [ heroPrint, adventurePrint ]);
                });
            }

        });

    }

}
