let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


const Grid = require("./Grid");
const Food = require("./Food");
const Snake = require("./Snake");

function DrawSquare(square){
    context.strokeStyle = "white";
    context.fillStyle = square.color;
    context.lineWidth = 1.5;
    context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
    context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}
function DrawDefaultSquare(square)  {
    context.strokeStyle = "white";
    context.fillStyle ="green";
    context.lineWidth = 1.5;
    context.strokeRect((square.left_indent + (square.side_of_square)),(square.top_indent + (square.side_of_square)), square.side_of_square, square.side_of_square);
    context.fillRect((square.left_indent + (square.side_of_square)),(square.top_indent+ (square.side_of_square)), square.side_of_square, square.side_of_square);
}
function DeathSnake(head)  {
    context.strokeStyle = "#eee";
    context.fillStyle = "#eee";
    context.lineWidth = 1.5;
    context.strokeRect((head.left_indent + (head.side_of_square)),(head.top_indent + (head.side_of_square)), head.side_of_square, head.side_of_square);
    context.fillRect((head.left_indent + (head.side_of_square)),(head.top_indent+ (head.side_of_square)), head.side_of_square, head.side_of_square);
}


let grid = new Grid(16,16);
let squares = grid.Squares;
let food =  new Food(grid.width_field,grid.height_field);
let snake = new Snake(4,"red");
let bodySnake = snake.Cells;
function RenewFood() {
    let needRecheck;
    do{
        needRecheck = false;
        for (let i = 0; i < bodySnake.length; i++) {
            if ((bodySnake[i].left_indent == food.left_indent) && (bodySnake[i].top_indent == food.top_indent)) {
                food = new Food(grid.width_field, grid.height_field);
                needRecheck = true;
                break;
            }
        }
    } while (needRecheck);
}

// новая игра
function NewGame(squares,bodySnake,food){
    for (let square of squares){
        for (let cell of square){
            DrawSquare(cell); // отрисовка поля
        }
    }
    for (let square of bodySnake){
        DrawSquare(square);  // отрисовка змеи
    }
    RenewFood();
    DrawSquare(food); // отрисовка еды
}
NewGame(squares,bodySnake,food);

let count =0;

//удаление хвоста и отрисовка новой еды
function DeleteTailAndDrawNewFood(){
    if ((bodySnake[0].left_indent != food.left_indent) ||(bodySnake[0].top_indent != food.top_indent)){
        DrawDefaultSquare(snake.Shrink()); // удаление хвоста
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

        if ((bodySnake[0].top_indent <  0 ) || (bodySnake[0].top_indent>(grid.width_field-1)*50)  || (bodySnake[0].left_indent<120) ||  (bodySnake[0].left_indent>(120+(grid.width_field-1)*50)) ) {
           DeathSnake(bodySnake[0]);
            document.getElementById("win").innerHTML = "Вы проиграли!"; // выводим фразу о проигрыше
           GameOver();
        }
        for (let i = 1; i < bodySnake.length; i++) {
            if((bodySnake[0].left_indent == bodySnake[i].left_indent)&&(bodySnake[0].top_indent == bodySnake[i].top_indent)){
                document.getElementById("win").innerHTML = "Вы проиграли!"; // выводим фразу о проигрыше
                GameOver();
            }
        }
        if(grid.width_field*grid.height_field == bodySnake.length){
            document.getElementById("win").innerHTML = "Вы выиграли!"; // выводим фразу о выигрыше
            GameOver();
        }
  }, 400)
}

let maxScore = 0;
// конец игры
function GameOver() {
    clearInterval(stop);
    document.getElementById("sum_score").innerHTML = "Заработанные очки: " + count; // выводим сумму очков
    if(count > maxScore){
      maxScore = count;
    }
    document.getElementById("max").innerHTML = "Максимальные очки за игры: " + maxScore; // выводим сумму очков
    count = 0;
    document.getElementById("ModalWindowEnd").style.display = "block";
}

// сброс - начало новой игры
document.getElementsByClassName("close")[0].addEventListener('click', function() { // закрыть всплывающее окно (игра завершена)
    document.getElementById("ModalWindowEnd").style.display = "none";
    food =  new Food(grid.width_field,grid.height_field);
    snake = new Snake(4,"red");
    bodySnake = snake.Cells;
    NewGame(squares,bodySnake,food);
    direction = "right";
    StartGame();
});


StartGame();

document.addEventListener('keydown', function(event) { // управление игрой
    if (((event.code == 'KeyD')||(event.code == 'ArrowRight')) && (direction != "left")) {
        direction = "right";
    }
    if (((event.code == 'KeyA')||(event.code == 'ArrowLeft')) && (direction != "right")){
        direction = "left";
    }
    if (((event.code == 'KeyS')||(event.code == 'ArrowDown')) && (direction != "up")){
        direction = "down";
    }
    if (((event.code == 'KeyW')||(event.code == 'ArrowUp')) && (direction != "down")){
        direction = "up";
    }

    DrawSquare(food);
});





