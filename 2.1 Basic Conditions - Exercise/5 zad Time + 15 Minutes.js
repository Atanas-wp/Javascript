function solution(input) {

    // 1. Вземане на входни данни

    let initialHours = Number(input[0]);

    let initialMinutes = Number(input[1]);



    // 2. Прибавяне на 15 минути към минутите които подават на входа


    let totalMinutes = initialMinutes + 15;

    if (totalMinutes >= 60) {

        initialHours += 1;

        initialMinutes = totalMinutes - 60;

        if (initialHours === 24) {

            initialHours = 0;

        }

    } else {

        initialMinutes = totalMinutes;
    }




    // 3. Отпечатване на изходни данни 

    // {hours:minutes}

    // Часовете са от 0 до 23, а минутите са с водеща нула ако са по-малко от 10 и без водеща нула ако са повече от 9

    if (initialMinutes < 10) {

        console.log(`${initialHours}:0${initialMinutes}`);

    } else {

        console.log(`${initialHours}:${initialMinutes}`);
    }

}

solution((["23", "59"]));
