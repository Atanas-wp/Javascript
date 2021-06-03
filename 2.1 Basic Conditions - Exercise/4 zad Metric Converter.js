function solution(input) {

    // 1. Вземане на входни данни

    let number = Number(input[0]);

    let firstUnit = input[1];

    let secondUnit = input[2];

    // 2. Логика
    // mm => cm, m
    // cm => mm, m
    // m => mm, cm

    if (firstUnit === "mm" && secondUnit === "cm") {

        number = number / 10;
        
    } else if (firstUnit === "mm" && secondUnit === "m") {

        number = number / 1000;

    } else if (firstUnit === "cm" && secondUnit === "mm") {

        number = number * 10;

    } else if (firstUnit === "cm" && secondUnit === "m") {

        number = number / 100;

    } else if (firstUnit === "m" && secondUnit === "mm") {

        number = number * 1000;

    } else if (firstUnit === "m" && secondUnit === "cm") {

        number = number * 100;

    }

    // 3. Принтирай резултата закръглен до 3 знак след запетаята.

    console.log(number.toFixed(3));

    
}

solution(["12","mm","m"]);