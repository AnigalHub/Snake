/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);


function RandomNumber(min, max, step){
    return step * Math.floor(Math.random() * (max - min) / step + min / step);
}

class Food extends Square{
    constructor(width_field,height_field) {
        super(120 + RandomNumber(0,50*width_field,50),RandomNumber(0,50*height_field,50),50,"yellow");
    }
}
module.exports = Food ;

/***/ }),

/***/ 632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);
class Grid {
    constructor(width_field,height_field) {
        this.width_field = width_field; // размер игрового поля (width_field) х (height_field)
        this.height_field = height_field; // количество квадратов в строку и в столбик
        this._squares = [];
        for (let row = 0; row < this.height_field; row++){  // rows - количество строк (с квадратиками)
           this._rowSquare = [];
            for (let column = 0; column < this.width_field; column++) { // columns - количество столбцов (квадратов)
                this._rowSquare.push(new Square(120 + (column * 50),(row * 50),50,"green"));
            }
            this._squares.push(this._rowSquare);
        }
    }
    get Squares(){
        return this._squares;
    }
}

module.exports = Grid ;




/*
 class Grid {
    constructor(top_indent,left_indent,side_of_square,width_field,height_field){
        this.top_indent = top_indent;// отступ сверху
        this.left_indent = left_indent;// отступ слева
        this.side_of_square = side_of_square; // сторона квадрата
        this.width_field = width_field; // размер игрового поля (width_field) х (height_field)
        this.height_field = height_field;
    }
    DrawGrid(){
        for (let rows = 0; rows < this.height_field; rows++){  // rows - количество строк (с квадратиками)
            for (let columns = 0; columns < this.width_field; columns++) { // columns - количество столбцов (квадратов)
                context.strokeStyle = "white";
                context.fillStyle = "black";
                context.lineWidth = 2;
                context.strokeRect((this.left_indent + (columns * this.side_of_square)),(this.top_indent + (rows * this.side_of_square)), this.side_of_square, this.side_of_square);
                context.fillRect((this.left_indent + (columns * this.side_of_square)),(this.top_indent+ (rows * this.side_of_square)), this.side_of_square, this.side_of_square);
            }
        }
    }
}

let x,y;

class Food extends Grid{
    constructor(){
        super(40,180,50,
            16,16);
    }

    DrawSquare(color) {
        function RandomInt(min, max) { //рандом квадрата на поле
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }

        x = RandomInt(1,this.width_field); // номер по горизонтали(х)
        console.log("номер по горизонтали(х) - " + x);
         y = RandomInt(1,this.height_field); // номер по вертикали (у)
        console.log("номер по вертикали (у) - " + y);
        
        context.fillStyle = color;
        context.strokeRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y-1) * this.side_of_square)), this.side_of_square, this.side_of_square); // х,у,w
        context.fillRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y-1) * this.side_of_square)), this.side_of_square, this.side_of_square);
    }
}
class Snake extends Grid{
     constructor() {
         super(40,180,50,16,16);
     }
     DrawSnake() {
         food.DrawSquare("white");
         context.strokeRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y) * this.side_of_square)), this.side_of_square, this.side_of_square); // х,у,w
         context.fillRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y) * this.side_of_square)), this.side_of_square, this.side_of_square);

     }
}

let grid = new Grid(40,180,50,16,16);
grid.DrawGrid();
let food = new Food();
food.DrawSquare("red");


let snake = new Snake();
snake.DrawSnake();

 */

/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);


class Snake{
    constructor(lengthSnake,color) {
       this.length = lengthSnake;
       this.color = color;
       this._cells = [];
        for (let row = 0; row < this.length; row++){  // rows - количество строк (с квадратиками)
            this._cells.push(new Square(220 + 50,50 + (row * 50),50,this.color));
        }
    }
    get Cells(){
        return this._cells;
    }
    Shrink(){
        return this._cells.pop(); // удаление хвоста
    };
    Move(direction){
        if (direction == "right"){
            let square = new Square((this._cells[0].left_indent)+50, this._cells[0].top_indent,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "left"){
            let square = new Square((this._cells[0].left_indent)-50,(this._cells[0].top_indent),50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "down"){
            let square = new Square((this._cells[0].left_indent),(this._cells[0].top_indent)+50,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "up"){
            let square = new Square((this._cells[0].left_indent),(this._cells[0].top_indent)-50,50,"red");
            this._cells.unshift(square);
            return square;
        }

    };
}
module.exports = Snake ;

/***/ }),

/***/ 653:
/***/ ((module) => {

class Square {
    constructor(left_indent,top_indent,side_of_square,color){
        this.top_indent = top_indent;// отступ сверху - x  (x,y,w,h)
        this.left_indent = left_indent;// отступ слева - y
        this.side_of_square = side_of_square; // сторона квадрата - и w и h - т.к. это квадрат
        this.color = color;
    }
}
module.exports = Square ;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const Grid = __webpack_require__(632);
const Food = __webpack_require__(308);
const Snake = __webpack_require__(61);

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
let snake = new Snake(12,"red");
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
        for (let i = 1; i < arraySnake.length; i++) {
            if((arraySnake[0].left_indent == arraySnake[i].left_indent)&&(arraySnake[0].top_indent == arraySnake[i].top_indent)){
                console.log("проигрыш");
                GameOver();
            }
        }


    }, 800)
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






})();

/******/ })()
;