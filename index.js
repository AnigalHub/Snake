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
function DrawDefultSquare(square)  {
context.strokeStyle = "white";
context.fillStyle ="green";
context.lineWidth = 2;
context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}


let grid = new Grid(5,5);

let array = grid.Squares;

for (let square of array){
    for (let cell of square){
        DrawSquare(cell);
    }
}

let food = new Food(grid.width_field,grid.height_field);
let snake = new Snake(4,"red");
let arraySnake = snake.Cells;
for (let square of arraySnake){
    DrawSquare(square);
}


for(let i=0;i<arraySnake.length;i++){

    if((arraySnake[i].left_indent == food.left_indent) && (arraySnake[i].top_indent == food.top_indent)){
        do{
            food =  new Food(grid.width_field,grid.height_field);
        }
        while((arraySnake[i].left_indent == food.left_indent) || (arraySnake[i].top_indent == food.top_indent))
    }
}
DrawSquare(food);


function DeleteTailAndDrawNewFood(){

    if ((arraySnake[0].left_indent != food.left_indent)||(arraySnake[0].top_indent != food.top_indent)){
        DrawDefultSquare(snake.Shrink()); // удаление хвоста
    }
    else{
        food =  new Food(grid.width_field,grid.height_field);
        for(let i=1;i<arraySnake.length;i++){
            if((arraySnake[i].left_indent == food.left_indent) && (arraySnake[i].top_indent == food.top_indent)){
                do{
                    food =  new Food(grid.width_field,grid.height_field);
                }
                while((arraySnake[i].left_indent == food.left_indent) || (arraySnake[i].top_indent == food.top_indent))
            }
        }
        DrawSquare(food);
    }


}


document.addEventListener('keydown', function(event) {

    if ((event.code == 'KeyD')||(event.code == 'ArrowRight')) {
        DrawSquare(snake.Move("right")); // добавление головы
        DeleteTailAndDrawNewFood();
    }
   if ((event.code == 'KeyS')||(event.code == 'ArrowDown')) {
        DrawSquare(snake.Move("down")); // добавление головы
        DeleteTailAndDrawNewFood();
    }
    if ((event.code == 'KeyW')||(event.code == 'ArrowUp')) {
        DrawSquare(snake.Move("up")); // добавление головы
        DeleteTailAndDrawNewFood();
    }
    if ((event.code == 'KeyA')||(event.code == 'ArrowLeft')) {
        DrawSquare(snake.Move("left")); // добавление головы
        DeleteTailAndDrawNewFood();
    }
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


