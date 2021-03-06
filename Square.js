class Square {
    constructor(left_indent,top_indent,side_of_square,color){
        this.top_indent = top_indent;// отступ сверху - x  (x,y,w,h)
        this.left_indent = left_indent;// отступ слева - y
        this.side_of_square = side_of_square; // сторона квадрата - и w и h - т.к. это квадрат
        this.color = color;
    }
}
module.exports = Square ;