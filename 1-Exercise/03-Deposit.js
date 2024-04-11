function DepositCalculator(input){
    let amount = Number(input[0]);
    let time = Number(input[1]);
    let percentage = Number(input[2]);

    let extra1year = amount * (percentage/100);
    let extra1month = extra1year/12;
    let endperiod = extra1month * time;

    let total = amount + endperiod;
    console.log(total);
}
DepositCalculator([`200`,`3`,`5.7`]);
DepositCalculator([`2350`,`6`,`7`]);