function solution(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let total = 1;
    let isValid = true;

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

            if (fruit === "banana") {

                total = quantity * 2.50;

            } else if (fruit === "apple") {

                total = quantity * 1.20;

            } else if (fruit === "orange") {

                total = quantity * 0.85;

            } else if (fruit === "grapefruit") {

                total = quantity * 1.45;

            } else if (fruit === "kiwi") {

                total = quantity * 2.70;

            } else if (fruit === "pineapple") {

                total = quantity * 5.50;

            } else if (fruit === "grapes") {

                total = quantity * 3.85;

            } else{

                isValid = false;
            }

            break;

        case "Saturday":
        case "Sunday":

            if (fruit === "banana") {

                total = quantity * 2.70;

            } else if (fruit === "apple") {

                total = quantity * 1.25;

            } else if (fruit === "orange") {

                total = quantity * 0.90;

            } else if (fruit === "grapefruit") {

                total = quantity * 1.60;

            } else if (fruit === "kiwi") {

                total = quantity * 3.00;

            } else if (fruit === "pineapple") {

                total = quantity * 5.60;

            } else if (fruit === "grapes") {

                total = quantity * 4.20;

            } else{

                isValid = false;

            }

            break;
    
            default:

                isValid = false;
                
                break;

    }

    if (isValid === false) {

        console.log("error");
        
    } else{

        console.log(total.toFixed(2));
    } 
}

solution(["apple","Tuesday","2"])






