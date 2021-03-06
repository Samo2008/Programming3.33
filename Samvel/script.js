function generator(matLen, gr, grEat, pr, M, pm, fg, mt) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < M; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < pm; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < fg; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < mt; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    return matrix;
}

let side = 30;

let matrix = generator(15, 30, 10, 7, 12, 15, 12, 15);

let grassArr = [];
let grassEaterArr = [];
let PredatorArr = [];
let MushroomsArr = [];
let PoisonousMushroomsArr = [];
let FertilGrassArr = [];
let MeatArr = [];

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#A6FF7A');
    frameRate(3);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y);
                grassEaterArr.push(grE);
            } else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y);
                PredatorArr.push(pr);
            } else if (matrix[y][x] == 4) {
                let M = new Mushrooms(x, y);
                MushroomsArr.push(M);
            } else if (matrix[y][x] == 5) {
                let pm = new PoisonousMushrooms(x, y);
                PoisonousMushroomsArr.push(pm);
            } else if (matrix[y][x] == 6) {
                let fg = new FertilGrass(x, y);
                FertilGrassArr.push(fg);
            } else if (matrix[y][x] == 7) {
                let mt = new Meat(x, y);
                MeatArr.push(mt);
            };
        };
    };
};

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
            } else if (matrix[y][x] == 0) {
                fill('#A6FF7A');
            } else if (matrix[y][x] == 2) {
                fill('yellow');
            } else if (matrix[y][x] == 3) {
                fill('black');
            } else if (matrix[y][x] == 4) {
                fill('red');
            } else if (matrix[y][x] == 5) {
                fill('orange');
            } else if (matrix[y][x] == 6) {
                fill('blue');
            } else if (matrix[y][x] == 7) {
                fill('brown');
            }
            rect(x * side, y * side, side, side);
        };
    };

    for (let i in grassArr) {
        grassArr[i].mul();
    };
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    };
    for (let i in PredatorArr) {
        PredatorArr[i].mul();
        PredatorArr[i].eat();
    };
    for (let i in FertilGrassArr) {
        FertilGrassArr[i].mul();
    };
    for (let i in MeatArr) {
        MeatArr[i].mul();
    };

};

// for (let i in MushroomsArr) {
//     MushroomsArr[i].mul()
// }
// for (let i in PoisonousMushroomsArr) {
//     PoisonousMushroomsArr[i].mul()
// }
var clickCount = 0;
function clickHandler(evt) {
    clickCount++;
    console.log(evt);
    var str = "https://avatars.mds.yandex.net/i?id=5145a1539b5bf5cef95a48f3f4c6ee32-5267897-images-thumbs&n=13" + clickCount;
    this.innerText = str;
};

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);