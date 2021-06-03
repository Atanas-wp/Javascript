function solution(input){

    let total = Number(input[0]);

    let season = input[1];

    let expenses = 0;

    let destination = "";
    
    let type = "";


    if (total <= 100) {
        
        destination = "Bulgaria";

        if (season === "summer") {

            expenses = total * 0.30;

            type = "Camp";
            
        } else if(season === "winter"){

            expenses = total * 0.70;

            type = "Hotel";

        }

    } else if(total > 100 && total <= 1000){

        destination = "Balkans";

        if (season === "summer") {

            expenses = total * 0.40;

            type = "Camp";
            
        } else if(season === "winter"){

            expenses = total * 0.80;

            type = "Hotel";

        }

    } else if(total > 1000){


        destination = "Europe";

        expenses = total * 0.90;

        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);

    console.log(`${type} - ${expenses.toFixed(2)}`);
}

solution(["75", "winter"]);