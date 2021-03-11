const  Square = require("./Square.js");

class Snake{
    constructor(lengthSnake,color) {
       this.length = lengthSnake;
       this.color = color;
       this._cells = [];
        for (let row = 0; row < this.length; row++){  // rows - количество строк (с квадратиками)
            this._cells.unshift(new Square(120 + 50,2 + (row * 50),50,this.color));
        }
    }
    get Cells(){
        return this._cells;
    }
    Shrink(){
        return this._cells.pop(); // удаление хвоста
    };
    Move(){
        let square = new Square(170,(this._cells[0].top_indent)+50,50,"red");
        this._cells.unshift(square);
        return square;
    };
}
module.exports = Snake ;