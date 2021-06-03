function solution(input){

    const addedTime = 75;

    let initialHours = Number(input[0]);

    let initialMinutes = Number(input[1]);

    let totalMinutes = initialMinutes + addedTime;

    let hoursToAdd = Math.floor(totalMinutes / 60);

    let hours = initialHours + hoursToAdd;

    if (hours > 23) {

        hours -= 24;
    } 
    
    let minutes = totalMinutes % 60;

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else{
        console.log(`${hours}:${minutes}`);
    }
}

solution(["1", "46"]);