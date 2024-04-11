function accountBalance(input){
    let index = 0;
    let command = input[index];
    index++
    let balance = 0;

    while (command !== "NoMoreMoney"){
        let currSum = Number(command);

        if(command<0){
            console.log("Invalid operation!");
            break;
        }
        balance+=currSum;
        console.log(`Increase: ${currSum.toFixed(2)}`)
        command = input[index];
        index++
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51", "69.42","100","NoMoreMoney"])
accountBalance(["120","45.55","-150"])