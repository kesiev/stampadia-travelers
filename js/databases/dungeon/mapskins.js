function loadMapSkins(MOD) {
    const
        RANDOMWALKABLE1=["floor","tiles","horizontalWood","horizontalBricks","horizontalGrass","temple"],
        RANDOMWALKABLE2=["floor","tiles","verticalWood","verticalBricks","verticalGrass"],
        RANDOMWALL=["wall","squaredColumn","roundedColumn","spikedColumn"];
    return {
        cells:{
            wall:{
                codex:"The Walls: empty squares with no decoration.",
                unwalkable:true,
                images:[
                    { id: "dungeonWall0", angles:[0], tilt:[0] }
                ]
            },
            squaredColumn:{
                codex:"The Squared Column: a squared column with squared corners.",
                unwalkable:true,
                images:[
                    { id: "dungeonSquaredColumn0", angles:[0], tilt:[0] }
                ]
            },
            roundedColumn:{
                codex:"The Rounded Column: a column with rounded corners.",
                unwalkable:true,
                images:[
                    { id: "dungeonRoundedColumn0", angles:[0], tilt:[0] }
                ]
            },
            spikedColumn:{
                codex:"The Spiked Column: a column with rounspikes in corners.",
                unwalkable:true,
                images:[
                    { id: "dungeonSpikedColumn0", angles:[0], tilt:[0] }
                ]
            },
            floor:{
                codex:"The Floor: rotated rock tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonFloor0", angles:[0,90,180,270], tilt:[-2,2] },
                    { id: "dungeonFloor1", angles:[0,90,180,270], tilt:[-2,2] }
                ]
            },
            horizontalGrass:{
                codex:"The Horizontal Grass: rotated horizontal grass tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonGrass0", angles:[0,180], tilt:[-2,2] },
                    { id: "dungeonGrass1", angles:[0,180], tilt:[-2,2] }
                ]
            },
            verticalGrass:{
                codex:"The Vertical Grass: rotated vertical grass tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonGrass0", angles:[90,270], tilt:[-2,2] },
                    { id: "dungeonGrass1", angles:[90,270], tilt:[-2,2] }
                ]
            },
            horizontalBricks:{
                codex:"The Horizontal Bricks: horizontal brick tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonBricks0", angles:[0,180], tilt:[0,0] },
                    { id: "dungeonBricks1", angles:[0,180], tilt:[0,0] },
                ]
            },
            verticalBricks:{
                codex:"The Vertical Bricks: vertical brick tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonBricks0", angles:[90,270], tilt:[0,0] },
                    { id: "dungeonBricks1", angles:[90,270], tilt:[0,0] },
                ]
            },
            tiles:{
                codex:"The Tiles: temple tiles with inscriptions.",
                unwalkable:false,
                images:[
                    { id: "dungeonTiles0", angles:[0,90,180,270] },
                    { id: "dungeonTiles0", angles:[0,90,180,270] },
                    { id: "dungeonTiles0", angles:[0,90,180,270] },
                    // Rare
                    { id: "dungeonTiles1", angles:[0,90,180,270] }
                ]
            },
            temple:{
                codex:"The Temple: temple tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonTemple0", angles:[0,90,180,270], tilt:[0,0] },
                    { id: "dungeonTemple0", angles:[0,90,180,270], tilt:[0,0] },
                    { id: "dungeonTemple0", angles:[0,90,180,270], tilt:[0,0] },
                    // Rare
                    { id: "dungeonTemple1", angles:[0,90,180,270], tilt:[0,0] }
                ]
            },
            verticalWood:{
                codex:"The Vertical Wood: vertical wood tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonWood0", angles:[0, 180], tilt:[0] },
                    { id: "dungeonWood1", angles:[0, 180], tilt:[0] },
                ]
            },
            horizontalWood:{
                codex:"The Horizontal Wood: horizontal wood tiles.",
                unwalkable:false,
                images:[
                    { id: "dungeonWood0", angles:[90, 270], tilt:[0] },
                    { id: "dungeonWood1", angles:[90, 270], tilt:[0] }
                ]
            }
        },
        tiles:[
            {
                codex:"The Two Columns: two columns in a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1111",
                    "1011",
                    "2222",
                    "2222",
                    "1101",
                    "1111",
                ]
            },
            {
                codex:"The Alternate Path: three large columns in a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "0112",
                    "0112",
                    "2110",
                    "2110",
                    "0112",
                    "0112",
                ]
            },
            {
                codex:"The Double L: two mirrored L in a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1011",
                    "1001",
                    "1221",
                    "1221",
                    "1001",
                    "1101",
                ]
            },
            {
                codex:"The Arc: an arc in a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1111",
                    "1001",
                    "1101",
                    "1101",
                    "1001",
                    "1111",
                ]
            },
            {
                codex:"The Corners: columns in corners and in the middle of a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "0110",
                    "1111",
                    "1011",
                    "1101",
                    "1111",
                    "0110",
                ]
            },
            {
                codex:"The I and the L: a row and an L of columns around the middle of a hall.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "2112",
                    "0001",
                    "1111",
                    "1100",
                    "1101",
                    "2112",
                ]
            },
            {
                codex:"The Hall: an open area with columns on the side.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1001",
                    "1111",
                    "0220",
                    "0220",
                    "1111",
                    "1001",
                ]
            },
            {
                codex:"The Great Column: an giant column in the middle of the room.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "2222",
                    "1111",
                    "1001",
                    "1001",
                    "1111",
                    "2222",
                ]
            },
            {
                codex:"The Snake: an S-shaped set of walls.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1111",
                    "1011",
                    "1101",
                    "1011",
                    "1101",
                    "1111",
                ]
            },
            {
                codex:"The Holes: a set of walls with holes on it.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "0020",
                    "1111",
                    "0200",
                    "1111",
                    "0020",
                    "1111",
                ]
            },
            {
                codex:"The Huge Column: an huge column in the middle of the room.",
                pens:[
                    RANDOMWALL,
                    RANDOMWALKABLE1,
                    RANDOMWALKABLE2
                ],
                map:[
                    "1111",
                    "1001",
                    "1001",
                    "2001",
                    "2002",
                    "2222",
                ]
            }
        ]
    }
}
