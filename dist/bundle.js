/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  Square = __webpack_require__(653);

class Food extends Square{
    constructor() {
        super(120,2,50,"yellow");
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
    }
    CreateGrid(){
        let squares = [];

        for (let row = 0; row < this.height_field; row++){  // rows - количество строк (с квадратиками)
            let rowSquare = [];

            for (let column = 0; column < this.width_field; column++) { // columns - количество столбцов (квадратов)
                rowSquare.push(new Square(120 + (column * 50),2 + (row * 50),50,"green"));
            }
            squares.push(rowSquare);

        }
        return squares;
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
    }
    CreateSnake(){
        let snake = [];

        for (let row = 0; row < this.length; row++){  // rows - количество строк (с квадратиками)
              snake.push(new Square(120 + 50,2 + (row * 50),50,this.color));
            }
        return snake;
        }
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
const  Square = __webpack_require__(653);

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

        context.translate(0, square.side_of_square);
        for (let square of arraySnake){
            console.log(square);
            DrawSquare(square);
        }
    }
});
})();

/******/ })()
;