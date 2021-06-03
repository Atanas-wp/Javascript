function solution(input){

    // 1. Take input

    let days = Number(input[0]);

    let nights = days - 1;

    let roomType = input[1];

    let feedback = input[2];

    let total = 0;


    if (roomType === "room for one person") {

        total += 18 * nights;
        
    } else if(roomType === "apartment"){

        total += 25 * nights;

        if (nights < 10) {


            total -= total * 0.30;
            
        } else if(nights >= 10 && nights <= 15){

            total -= total * 0.35;


        } else if(nights > 15){

            total -= total * 0.50;

        }

    } else if(roomType === "president apartment"){

        total += 35 * nights;

        if (nights < 10) {


            total -= total * 0.10;
            
        } else if(nights >= 10 && nights <= 15){

            total -= total * 0.15;


        } else if(nights > 15){

            total -= total * 0.20;

        }
    }

    if (feedback === "positive") {

        total += total * 0.25;
        
    } else if (feedback === "negative") {

        total -= total * 0.10;

    }

    console.log(total.toFixed(2));
}

solution(["14", "apartment", "positive"]);
