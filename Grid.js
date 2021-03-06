const  Square = require("./Square.js");
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