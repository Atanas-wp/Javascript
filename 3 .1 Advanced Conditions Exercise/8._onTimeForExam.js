function solution(input){

    let examHour = Number(input[0]);

    let examMinutes = Number(input[1]);

    let arrivingHour = Number(input[2]);

    let arrivingMinutes = Number(input[3]);

    let totalExamMinutes = examHour * 60 + examMinutes;

    let totalArrivalMinutes = arrivingHour * 60 + arrivingMinutes;

    let difference = Math.abs(totalExamMinutes - totalArrivalMinutes);

    let hours = Math.floor(difference / 60);

    let minutes = difference % 60;

    if (totalArrivalMinutes > totalExamMinutes) {
        console.log("Late");
    }
    else if (totalExamMinutes - totalArrivalMinutes <= 30) {
        console.log("On time");
    }
    else {
        console.log("Early");
    }

    if (totalExamMinutes > totalArrivalMinutes) {

        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else if (totalArrivalMinutes > totalExamMinutes) {
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }
}

solution(["9",
"00",
"7",
"55"]);
























