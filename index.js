let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const Grid = require("./Grid");
const Food = require("./Food");
const Snake = require("./Snake");
const  Square = require("./Square.js");

function DrawSquare(square){
    context.strokeStyle = "white";
    context.fillStyle = square.color;
    context.lineWidth = 2;
    context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
    context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}

let grid = new Grid(16,16);
let array = grid.CreateGrid();
console.log(array);

for (let square of array){
    for (let cell of square){
        DrawSquare(cell);
    }
}

DrawSquare(new Food());

let snake = new Snake(4,"red");
let arraySnake = snake.CreateSnake();

let square = new Square(120,2,50,"")

for (let square of arraySnake){
    console.log(square);
    DrawSquare(square);
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
        console.log("работает");
        let snake2 = new Snake(4,"green");
        let arraySnake2 = snake2.CreateSnake();
        for (let square of arraySnake2){
            console.log(square);
            DrawSquare(square);
        }
        let snake3 = new Snake(4,"red");
        let arraySnake3 = snake3.CreateSnake();
        context.translate(0, square.side_of_square);
        for (let square of arraySnake3){
            console.log(square);
            DrawSquare(square);
        }
    }
});