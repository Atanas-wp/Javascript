function solution(input){

    let yearType = input[0];

    let festiveDays = Number(input[1]);

    let weekendsInHomeTown = Number(input[2]);


    let playDays = 0;

    let weekendsInSofia = 48 - weekendsInHomeTown;

    if (yearType === "leap") {

        playDays = weekendsInHomeTown + festiveDays * 2/3 + weekendsInSofia * 3/4;

        let leapYearPlayDays = Math.floor(playDays * 1.15);

        console.log(leapYearPlayDays);
        
    } else if(yearType === "normal"){

        let normalYearPlayDays = Math.floor(weekendsInHomeTown + festiveDays * 2/3 + weekendsInSofia * 3/4);

        console.log(normalYearPlayDays);
    }

}

solution(["normal", "6", "13"]);


