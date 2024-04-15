function vacation(input){
    let neededMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let spendCounter = 0;
    let daysCounter = 0;
    
    while(currentMoney < neededMoney){
        let command = input[index];
        index++;
        let money = Number(input[index]);
        index++;

        if(command === "spend"){
            currentMoney -= money
            if(currentMoney < 0){
                currentMoney = 0;
            }
            spendCounter++;
        }else if(command === "save"){
            currentMoney += money;
            spendCounter = 0;
        }
        daysCounter++;
        if(spendCounter === 5){
            console.log("You can't save the money.");
            console.log(daysCounter);
            break;
        }
    }
    if(currentMoney >= neededMoney){
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
vacation(["2000","1000","spend","1200","save","2000"])
vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])