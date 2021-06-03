function solution(input){

    let first = Number(input[0]);

    let second = Number(input[1]);

    let sum = 0;

    let result = ""; 

    for(let i = first; i <= second; i++){

        if (i % 9 === 0) {

            sum += i;

            if (!result) {

                result = result + i;
                
            } else {

                result = result + " " + i;

            }
            
            
        }

        
    }
    console.log(`The sum: ${sum}`);
    
    let array = result.split(" ");
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }

    
}

solution(["100", "200"])