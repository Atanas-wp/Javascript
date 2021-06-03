function solution(input) {

    // 1. Вземане на входни данни

    let expenses = Number(input[0]);

    let statistQuantity = Number(input[1]);

    let statistDressingPrice = Number(input[2]);

    // 2. Изчисляване на декора за филма. 10% от разходите.

    let decoration = expenses * 0.10;

    // 3. При брой статисти над 150 има отстъпка 10% на облелклото.

    let totalDressingPrice = statistQuantity * statistDressingPrice;

    if (statistQuantity > 150) {

        totalDressingPrice -= totalDressingPrice * 0.10;
        
    }

    // 4. Отпечатване на резултата в зависимост от общата сума която 
    //ще получим след извършване на изчисленията. Форматиране на 
    //резултата до 2 знака след дес. запетая.

    let total = decoration + totalDressingPrice;

    if (total > expenses) {

        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(total - expenses).toFixed(2)} leva more.`);
        
    } else {

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(expenses - total).toFixed(2)} leva left.`);
    }
}

solution(["9587.88", "222", "55.68"]);