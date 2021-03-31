const  Square = require("./Square.js");
class Grid {
    constructor(width_field,height_field,color) {
        this.width_field = width_field; // размер игрового поля (width_field) х (height_field)
        this.height_field = height_field; // количество квадратов в строку и в столбик
        this._squares = [];
        this.color = color;
        for (let row = 0; row < this.height_field; row++){  // rows - количество строк (с квадратиками)
           this._rowSquare = [];
            for (let column = 0; column < this.width_field; column++) { // columns - количество столбцов (квадратов)
                this._rowSquare.push(new Square(120 + (column * 50),(row * 50),50,this.color));
            }
            this._squares.push(this._rowSquare);
        }
    }
    get Squares(){
        return this._squares;
    }
}

module.exports = Grid ;

