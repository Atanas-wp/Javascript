function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesQuantity = Number(input[1]);
    let talkingDollsQuantity = Number(input[2]);
    let bearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);
    let allToys = puzzlesQuantity + talkingDollsQuantity + bearsQuantity + minionsQuantity + trucksQuantity;

    let puzzlePrice = puzzlesQuantity * 2.60;
    let talkingDollsPrice = talkingDollsQuantity * 3;
    let bearsPrice = bearsQuantity * 4.10;
    let minionPrice = minionsQuantity * 8.20;
    let trucksPrice = trucksQuantity * 2;

    let sumPrices = puzzlePrice + talkingDollsPrice + bearsPrice + 
                    minionPrice + trucksPrice;
    if (allToys >= 50) {
        sumPrices -= (sumPrices * 0.25);
        // console.log(sumPrices);
    }
    sumPrices -= (sumPrices * 0.10);
    let moneyLeft = Math.abs(sumPrices - excursionPrice);

    if (sumPrices >= excursionPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
    console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);