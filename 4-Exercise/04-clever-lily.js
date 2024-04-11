function smartLily (input){
    let age = input[0];
    let priceWasher = input[1];
    let priceToy = input[2];

    let money = 0;
    let currMoney =10;
    let toy = 0;

    for(let i = 1; i <= age; i++){
        if(i%2 === 0){
        money+=currMoney;
        currMoney+=10;
        money--;               
        }else {
            toy++;
        }
    }
    money+=toy*priceToy;
    let diff= Math.abs(money-priceWasher);
    if(money >= priceWasher){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`)
    }
}