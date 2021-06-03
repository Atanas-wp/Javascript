function solution(input){

    let availableMoney = Number(input[0]);

    let season = input[1];

    let fishermenQuantity = Number(input[2]);

    let totalExpenses = 0;

    if (season === "Spring") {
        
        totalExpenses += 3000;
        
    } else if(season === "Summer" || season === "Autumn"){

        totalExpenses += 4200;

    } else if(season === "Winter"){

        totalExpenses += 2600;

    }

    if (fishermenQuantity <= 6) {

        totalExpenses -= totalExpenses * 0.10;
        
    } else if(fishermenQuantity > 6 && fishermenQuantity <= 11){

        totalExpenses -= totalExpenses * 0.15;

    } else if(fishermenQuantity >= 12){

        totalExpenses -= totalExpenses * 0.25;

    }

    if (fishermenQuantity % 2 === 0 && season !== "Autumn") {
        
        totalExpenses -= totalExpenses * 0.05;

    }
    
    if (totalExpenses <= availableMoney) {

        let moneyLeft = availableMoney - totalExpenses;
        
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);

    } else{

        let moneyNeeded = totalExpenses - availableMoney;

        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);

    }
}

solution(["3000", "Summer", "11"]);
