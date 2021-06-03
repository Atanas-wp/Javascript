function solution(input){

    let flower = input[0];

    let quantity = Number(input[1]);

    let moneyAvailable = Number(input[2]);

    let total = 0;

    if (flower === "Roses") {
        if (quantity > 80) {
            
            total += quantity * 5;
            total -= total * 0.10;

        } else{

            total += quantity * 5;

        }
    } else if(flower === "Dahlias") {
        if (quantity > 90) {
            
            total += quantity * 3.8;
            total -= total * 0.15;

        } else{

            total += quantity * 3.8;

        }
    } else if(flower === "Tulips") {
        if (quantity > 80) {
            
            total += quantity * 2.8;
            total -= total * 0.15;

        } else{

            total += quantity * 2.8;

        }
    } else if(flower === "Narcissus") {
        if (quantity < 120) {
            
            total += quantity * 3.0;
            total += total * 0.15;

        } else{

            total += quantity * 3.0;

        }
    } else if(flower === "Gladiolus") {
        if (quantity < 80) {
            
            total += quantity * 2.50;
            total += total * 0.20;

        } else{

            total += quantity * 2.50;

        }
    }

    if (total <= moneyAvailable) {
        
        let moneyLeft = moneyAvailable - total;

        console.log(`Hey, you have a great garden with ${quantity} ${flower} 
        and ${moneyLeft.toFixed(2)} leva left.`);

    } else {

        let moneyNeeded =  total - moneyAvailable;

        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} 
        leva more.`);

    }
}

solution(["Tulips", "88", "260"]);