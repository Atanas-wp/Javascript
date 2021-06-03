function solution(input) {

    // 1. Вземане на входни данни
    // 1.	Рекордът в секунди 
    // 2.	Разстоянието в метри 
    // 3.	Времето в секунди, за което плува разстояние от 1 м. 
    

    let worldRecord = Number(input[0]);

    let distance = Number(input[1]);

    let secondsPerMeter = Number(input[2]);


    // 2. Загуба на време: На всеки 15 м губи 12.5 секуди. 
    //Резултата трябва да се закръгли до най близкото цяло число!!!

    let lostTime = Math.floor(distance / 15) * 12.5;

    // 3. Да се изчисли времето в секунди за което Иван преплува 
    //разстоянието и разликата спрямо свтовния рекорд

    let totalTime = (distance * secondsPerMeter) + lostTime;


    // 4. Печатане на изходни данни
    // Резултатът трябва да се форматира до втория знак след
    // десетичната запетая.

    if (worldRecord > totalTime) {

        console.log(`Yes, he succeeded! The new world record is
         ${totalTime.toFixed(2)} seconds.`);
        
    } else {

        console.log(`No, he failed! He was
         ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
    }

}

solution(["55555.67","3017","5.03"]);