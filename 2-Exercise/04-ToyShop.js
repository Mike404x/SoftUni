function ToyShop(input){
    let PriceE = Number(input[0]);
    let QPuzzle = Number(input[1]);
    let QDolls = Number(input[2]);
    let QBears = Number(input[3]);
    let QMinions = Number(input[4]);
    let QTrucks = Number(input[5]);

    let totalSum = (QPuzzle * 2.60) +  (QDolls * 3) + (QBears * 4.10) + (QMinions * 8.20) + (QTrucks * 2);
    let QSum = (QPuzzle + QDolls + QBears + QMinions + QTrucks);
    let discount = 0;
    
    if (QSum  >= 50) {
        totalSum = totalSum*0.75
    }

    totalSum =  totalSum *0.90

     let diff = Math.abs(totalSum -  PriceE);
     if  (totalSum >= PriceE) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

ToyShop(["40.8","20","25","30","50","10"]);
ToyShop(["320","8","2","5","5","1"]);

