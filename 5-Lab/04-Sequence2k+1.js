function sequence(input){
    let endNum = Number(input[0]);
    let currNum = 1;

    while(currNum<=endNum){
        console.log(currNum);
        currNum = currNum * 2 + 1;
    }
}
sequence(["31"])