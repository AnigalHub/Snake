let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

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

class Food extends Grid{
    constructor(){
        super(40,180,50,
            16,16);
    }

    DrawSquare() {
        function RandomInt(min, max) { //рандом квадрата на поле
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }

        let x = RandomInt(1,this.width_field); // номер по горизонтали(х)
        console.log("номер по горизонтали(х) - " + x);
        let y = RandomInt(1,this.height_field); // номер по вертикали (у)
        console.log("номер по вертикали (у) - " + y);
        
        context.fillStyle = "red";
        context.strokeRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y-1) * this.side_of_square)), this.side_of_square, this.side_of_square); // х,у,w
        context.fillRect((this.left_indent + ((x-1) * this.side_of_square)),(this.top_indent + ((y-1) * this.side_of_square)), this.side_of_square, this.side_of_square);
    }
}

let grid = new Grid(40,180,50,16,16);
grid.DrawGrid();
let food = new Food();
food.DrawSquare();
