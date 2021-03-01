let canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");


let top_indent = 40;// отступ сверху
let left_indent = 180;// отступ слева

let side_of_square = 50; // сторона квадрата
let width_field = height_field = 16; // размер игрового поля (width_field) х (height_field)

for (let rows = 0; rows < height_field; rows++){  // rows - количество строк (с квадратиками)
    for (let columns = 0; columns < width_field; columns++) { // columns - количество столбцов (квадратов)
        context.strokeStyle = "white";
        context.fillStyle = "black";
        context.lineWidth = 2;
        context.strokeRect((left_indent + (columns * side_of_square)),(top_indent + (rows * side_of_square)), side_of_square, side_of_square);
        context.fillRect((left_indent + (columns * side_of_square)),(top_indent + (rows * side_of_square)), side_of_square, side_of_square);
    }
}