const  Square = require("./Square.js");

class Food extends Square{
    constructor() {
        super(120,2,50,"yellow");
    }
}
module.exports = Food ;