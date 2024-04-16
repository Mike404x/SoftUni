function vegetableMarket(input){
    let priceVegetableKG = Number(input[0]);
    let priceFruitKG = Number(input[1]);
    let totalVegetableKG = Number(input[2]);
    let totalFruitKG = Number(input[3]);

    let totalVegetable = priceVegetableKG * totalVegetableKG;
    let totalFruit = priceFruitKG * totalFruitKG;
    let total = (totalVegetable + totalFruit) / 1.94;

    console.log(total.toFixed(2));

}
vegetableMarket([0.194,19.4,10,10]);