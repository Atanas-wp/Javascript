function solution(input){
    let number = Number(input[0]);

    let firstUnit = input[1];

    let secondUnit = input[2];

    if (firstUnit === "mm" && secondUnit === "cm") {

        number = number / 10;
        
    } else if(firstUnit === "mm" && secondUnit === "m"){

        number = number / 1000;

    } else if(firstUnit === "cm" && secondUnit === "mm"){

        number = number * 10;

    } else if(firstUnit === "cm" && secondUnit === "m"){

        number = number / 100;

    } else if(firstUnit === "m" && secondUnit === "mm"){

        number = number * 1000;

    } else if(firstUnit === "m" && secondUnit === "cm"){

        number = number * 100;

    }

    console.log(number.toFixed(3));

    
}

solution(["12","mm","m"]);