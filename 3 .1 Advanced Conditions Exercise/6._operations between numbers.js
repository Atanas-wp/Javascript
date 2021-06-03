function solution(input){

    let firstNumber = Number(input[0]);

    let secondNumber = Number(input[1]);

    let op = input[2];

    let result;
    
    let isEven = "even";

    let isOdd = "odd";

    

    if (op === "+") {

        result = firstNumber + secondNumber;
        
    } else if(op === "-"){

        result = firstNumber - secondNumber;

    } else if(op === "*"){

        result = firstNumber * secondNumber;

    } else if(op === "/"){

        if (secondNumber === 0) {

            return console.log(`Cannot divide ${firstNumber} by zero`);
            
        }

        result = firstNumber / secondNumber;

        return console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);

    } else if(op === "%"){

        if (secondNumber === 0) {

            return console.log(`Cannot divide ${firstNumber} by zero`);
            
        }

        result = firstNumber % secondNumber;

        return console.log(`${firstNumber} % ${secondNumber} = ${result}`);

    }

    if (op === "+" || op === "-" || op === "*") {

        
        if (result % 2 === 0) {

            return console.log(`${firstNumber} ${op} ${secondNumber} = ${result} - ${isEven}`);
            
        } else{

            return console.log(`${firstNumber} ${op} ${secondNumber} = ${result} - ${isOdd}`);

        } 
        
    }

}

solution(["10", "12", "+"]);
