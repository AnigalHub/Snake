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
    Shrink(body){
        if(body == "tail"){
            return this._cells.pop(); // удаление хвоста - lenght-1 - элемент
        }
        if(body == "head"){
            return this._cells.shift(); // удаление головы - 0 элемент
        }

    };
    Move(direction){
        if (direction == "right"){
            let square = new Square((this._cells[0].left_indent)+50,
                2,50,"red");
            this._cells.unshift(square);
            return square;
        }
        /*
        if (direction == "down"){
            let square = new Square(170,(this._cells[0].top_indent)+50,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "up"){
            let square = new Square(170,(this._cells[0].top_indent)-50,50,"red");
            this._cells.unshift(square);
            return square;
        }
        if (direction == "left"){
            let square = new Square((this._cells[0].left_indent)-50,2,50,"red");
            this._cells.unshift(square);
            return square;
        }
        */


    };
}
module.exports = Snake ;