let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const Grid = require("./Grid");
const Food = require("./Food");
const Snake = require("./Snake");

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
    console.log(square);
    for (let cell of square){
        console.log(cell);
        DrawSquare(cell);
    }
}

DrawSquare(new Food());

let snake = new Snake(3);
let arraySnake = snake.CreateSnake();
console.log(arraySnake);
for (let square of arraySnake){
    console.log(square);
        DrawSquare(square);
}