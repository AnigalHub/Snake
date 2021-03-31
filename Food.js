const  Square = require("./Square.js");


function RandomNumber(min, max, step){
    return step * Math.floor(Math.random() * (max - min) / step + min / step);
}

class Food extends Square{
    constructor(width_field,height_field,color) {
        super(120 + RandomNumber(0,50*width_field,50),RandomNumber(0,50*height_field,50),50,color);
    }
}
module.exports = Food ;