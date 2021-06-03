function solution(input){

    let type = input[0];

    let r = Number(input[1]);

    let c = Number(input[2]);

    let total = 0;

    if (type === "Premiere") {

        total += r * c * 12;
        
    } else if(type === "Normal"){

        total += r * c * 7.50;

    } else if(type === "Discount"){

        total += r * c * 5.00;

    }

    console.log(`${total.toFixed(2)} leva`);
}

solution(["Premiere", "10", "12"]);
