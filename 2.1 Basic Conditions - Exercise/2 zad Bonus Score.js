function solution(input) {
    let number = Number(input[0]);
    let bonus = 0.0;
    let score = number + bonus;
    
    if (score <= 100) {
        bonus = 5;
    } else if (score > 100 && score < 1000) {
        bonus = score * 0.20;
    } else if (score > 1000) {
        bonus = score * 0.10;
    }

    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
}

solution(["20"])