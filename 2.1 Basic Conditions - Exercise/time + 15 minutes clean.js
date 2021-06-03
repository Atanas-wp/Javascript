function solution(input) {
    let initialHours = Number(input[0]);

    let initialMinutes = Number(input[1]);

    let totalMinutes = initialMinutes + 15;

    if (totalMinutes >= 60) {

        initialHours += 1;

        initialMinutes = totalMinutes - 60;

        if (initialHours === 24) {

            initialHours = 0;

        }

    } else{

        initialMinutes = totalMinutes;
    }

    if (initialMinutes < 10) {

        console.log(`${initialHours}:0${initialMinutes}`);

    } else {

        console.log(`${initialHours}:${initialMinutes}`);
    }

}

solution((["23", "59"]));
