function sumOf2Numbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]); 
    
    let counter = 0;                   
    let isFound = false;
    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            counter++;
            if(i + j === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);  
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOf2Numbers(["1","10","5"])