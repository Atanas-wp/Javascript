function solution(input){

    let month = input[0];

    let nights = Number(input[1]);

    let studuiPrice = 0;

    let apartmentPrice = 0;

    if (month === "May" || month === "October") {

        studuiPrice = nights * 50;

        apartmentPrice = nights * 65; 

        if (nights > 14) {

            studuiPrice = nights * 50 * 0.70;

            apartmentPrice = nights * 65 * 0.90;

        } else if(nights > 7){

            studuiPrice = nights * 50 * 0.95;

        }
    } else if(month === "June" || month === "September"){

        studuiPrice = nights * 75.20;

        apartmentPrice = nights * 68.70;

        if (nights > 14) {

            studuiPrice = nights * 75.20 * 0.80;

            apartmentPrice = nights * 68.70 * 0.90;

        }
    } else if(month === "July" || month === "August"){

        studuiPrice = nights * 76.00;

        apartmentPrice = nights * 77.00;

        if (nights > 14) {

            apartmentPrice = nights * 77.00 * 0.90;
        }   
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    
    console.log(`Studio: ${studuiPrice.toFixed(2)} lv.`);
}

solution(["August",
"20"])






