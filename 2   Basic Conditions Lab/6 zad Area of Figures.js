function solution(input) {
    let shape = input[0];
    let area;
    if (shape === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (shape === "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        area = side1 * side2;
    } else if (shape === "circle") {
        let radius = Number(input[1]);
        area = radius * radius * Math.PI;
    } else if (shape === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = side * height / 2;
    }
    console.log(area.toFixed(3));
} 

solution(["square", "5"])


