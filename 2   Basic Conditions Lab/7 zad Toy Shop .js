function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesQuantity = Number(input[1]);
    let talkingDollsQuantity = Number(input[2]);
    let bearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);
    let allToys = puzzlesQuantity + talkingDollsQuantity + bearsQuantity +
                  minionsQuantity + trucksQuantity;

    let puzzlesPrice = puzzlesQuantity * 2.60;
    let talkingDollsPrice = talkingDollsQuantity * 3;
    let bearsPrice = bearsQuantity * 4.10;
    let minionsPrice = minionsQuantity * 8.20;
    let trucksPrice = trucksQuantity * 2;

    let sumPrices = puzzlesPrice + talkingDollsPrice + bearsPrice + 
                    minionsPrice + trucksPrice;
    if (allToys >= 50) {
        sumPrices -= (sumPrices * 0.25);
        // console.log(sumPrices);
    }
    
    sumPrices -= (sumPrices * 0.10);

    if (sumPrices >= excursionPrice) {
        let leftMoney = sumPrices - excursionPrice;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = excursionPrice - sumPrices;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);