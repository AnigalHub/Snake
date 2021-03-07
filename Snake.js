const  Square = require("./Square.js");

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