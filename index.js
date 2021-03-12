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
function DrawDefultSquare(square)  {
context.strokeStyle = "white";
context.fillStyle ="green";
context.lineWidth = 2;
context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}

let grid = new Grid(16,16);
let array = grid.Squares;
console.log(array);

for (let square of array){
    for (let cell of square){
        DrawSquare(cell);
    }
}

DrawSquare(new Food());

let snake = new Snake(4,"red");
let arraySnake = snake.Cells;


for (let square of arraySnake){
    console.log(square);
    DrawSquare(square);
}





document.addEventListener('keydown', function(event) {

    if ((event.code == 'KeyD')||(event.code == 'ArrowRight')) { //down - down
        DrawDefultSquare(snake.Shrink("head")); // удаление головы
        DrawSquare(snake.Move("right")); // добавление хвоста


    }
  /*  if ((event.code == 'KeyS')||(event.code == 'ArrowDown')) { //down - down
        DrawDefultSquare(snake.Shrink("tail")); // удаление хвоста
        DrawSquare(snake.Move("down")); // добавление головы
    }
    if ((event.code == 'KeyW')||(event.code == 'ArrowUp')) { //down - down
        DrawDefultSquare(snake.Shrink("tail")); // удаление хвоста
        DrawSquare(snake.Move("up")); // добавление головы
    }
    if ((event.code == 'KeyA')||(event.code == 'ArrowLeft')) { //down - down
        DrawDefultSquare(snake.Shrink("tail")); // удаление хвоста
        DrawSquare(snake.Move("left")); // добавление головы
    } */
});


/*
let square = new Square(120,2,50,"")
for (let square of arraySnake){
    console.log(square);
    DrawSquare(square);
}
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
        console.log("работает");
        let snake2 = new Snake(4,"green");
        let arraySnake2 = snake2.Cells;
        for (let square of arraySnake2){
            console.log(square);
            DrawSquare(square);
        }
        context.translate(0, square.side_of_square);
        for (let square of arraySnake){
            console.log(square);
            DrawSquare(square);
        }
    }

});
*/


