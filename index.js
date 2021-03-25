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
let food =  new Food(grid.width_field,grid.height_field);
let snake = new Snake(4,"red");
let arraySnake = snake.Cells;
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

// новая игра
function NewGame(array,arraySnake,food){
    for (let square of array){
        for (let cell of square){
            DrawSquare(cell); // отрисовка поля
        }
    }
    for (let square of arraySnake){
        DrawSquare(square);  // отрисовка змеи
    }
    RenewFood();
    DrawSquare(food); // отрисовка еды
}
NewGame(array,arraySnake,food);

let count =0;

//удаление хвоста и отрисовка новой еды
function DeleteTailAndDrawNewFood(){
    if ((arraySnake[0].left_indent != food.left_indent) ||(arraySnake[0].top_indent != food.top_indent)){
        DrawDefultSquare(snake.Shrink()); // удаление хвоста
    }
    else{
        count++;
        RenewFood();
        DrawSquare(food);
    }
}


let direction = "right";
let stop;
// начало игры
function StartGame(){
    stop = setInterval(() => {
        DrawSquare(snake.Move(direction)); // добавление головы
        DeleteTailAndDrawNewFood();

        if ((arraySnake[0].top_indent <  0 ) || (arraySnake[0].top_indent>(grid.width_field-1)*50)  || (arraySnake[0].left_indent<120) ||  (arraySnake[0].left_indent>(120+(grid.width_field-1)*50)) ) {
            GameOver();
        }
    }, 1000)
}

// конец игры
function GameOver() {
    clearInterval(stop);
    DeathSnake(arraySnake[0]);
    console.log("всего очков"+ count);
    document.getElementById("sum_score").innerHTML = "Заработанные очки: " + count; // выводим сумму очков
    document.getElementById("ModalWindowEnd").style.display = "block";
}

// сброс - начало новой игры
document.getElementsByClassName("close")[0].addEventListener('click', function() { // закрыть всплывающее окно (игра завершена)
    document.getElementById("ModalWindowEnd").style.display = "none";
    food =  new Food(grid.width_field,grid.height_field);
    snake = new Snake(4,"red");
    arraySnake = snake.Cells;
    NewGame(array,arraySnake,food);
    direction = "right";
    StartGame();
});


StartGame();

document.addEventListener('keydown', function(event) { // управление игрой
    if ((event.code == 'KeyD')||(event.code == 'ArrowRight')){
        direction = "right";

    }
    if ((event.code == 'KeyS')||(event.code == 'ArrowDown')){
        direction = "down";

    }
    if ((event.code == 'KeyW')||(event.code == 'ArrowUp')){
        direction = "up";

    }
    if ((event.code == 'KeyA')||(event.code == 'ArrowLeft')){
        direction = "left";
    }
    DrawSquare(food);
});





