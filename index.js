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
function DeathSnake(head)  {
    context.strokeStyle = "#eee";
    context.fillStyle = "#eee";
    context.lineWidth = 2;
    context.strokeRect((head.left_indent + (head.side_of_square)),(head.top_indent + (head.side_of_square)), head.side_of_square, head.side_of_square);
    context.fillRect((head.left_indent + (head.side_of_square)),(head.top_indent+ (head.side_of_square)), head.side_of_square, head.side_of_square);
}


let grid = new Grid(16,16);
let array = grid.Squares;
for (let square of array){
    for (let cell of square){
        DrawSquare(cell); // отрисовка поля
    }
}
let food =  new Food(grid.width_field,grid.height_field);
let snake = new Snake(4,"red");
let arraySnake = snake.Cells;
for (let square of arraySnake){
    DrawSquare(square);  // отрисовка змеи
}
console.log(arraySnake);
console.log(arraySnake.length);



function RenewFood() {
    let needRecheck;
    do{
        needRecheck = false;
        for (let i = 0; i < arraySnake.length; i++) {
            if ((arraySnake[i].left_indent == food.left_indent) && (arraySnake[i].top_indent == food.top_indent)) {
                food = new Food(grid.width_field, grid.height_field);
                needRecheck = true;
                break;
            }
        }
    } while (needRecheck);
}
RenewFood();
DrawSquare(food); // отрисовка еды

function DeleteTailAndDrawNewFood(){
    if ((arraySnake[0].left_indent != food.left_indent) ||(arraySnake[0].top_indent != food.top_indent)){
        DrawDefultSquare(snake.Shrink()); // удаление хвоста
    }

    else{
        RenewFood();
        DrawSquare(food);
    }
}
function StartGame(direction){ // начало игры
    let stop = setInterval(() => {
        DrawSquare(snake.Move(direction)); // добавление головы
        DeleteTailAndDrawNewFood();
        GameOver(stop);
    }, 1000)
}

function GameOver(stop) { // конец игры
    if ((arraySnake[0].top_indent <  0 ) || (arraySnake[0].top_indent>(grid.width_field-1)*50)  || (arraySnake[0].left_indent<120) ||  (arraySnake[0].left_indent>(120+(grid.width_field-1)*50)) ){
        clearInterval(stop);
        //console.log(arraySnake[0]);
        DeathSnake(arraySnake[0]);
        //console.log("окончена");
        document.getElementById("ModalWindowEnd").style.display = "block";
    }
}
GameOver();
function Discharge(){ // сброс игры
    for (let square of array){
        for (let cell of square){
            DrawSquare(cell); // снова отрисовка поля
        }
    }
    food =  new Food(grid.width_field,grid.height_field); // новая еда
    RenewFood();
    DrawSquare(food); // снова отрисовка еды, но уже новой
    snake = new Snake(4,"red"); // змея
    arraySnake = snake.Cells;
    for (let square of arraySnake){
        DrawSquare(square);  // отрисовка новой змеи
    }
}
document.getElementsByClassName("close")[0].addEventListener('click', function() { // закрыть всплывающее окно (игра завершена)
    document.getElementById("ModalWindowEnd").style.display = "none";
    Discharge();
});





document.addEventListener('keydown', function(event) { // управление игрой

    if ((event.code == 'KeyD')||(event.code == 'ArrowRight')){
        StartGame("right");

    }
    if ((event.code == 'KeyS')||(event.code == 'ArrowDown')){
        StartGame("down");

    }
    if ((event.code == 'KeyW')||(event.code == 'ArrowUp')){
        StartGame("up");

    }
    if ((event.code == 'KeyA')||(event.code == 'ArrowLeft')){
        StartGame("left");
    }
    DrawSquare(food);
});





