function FoodDelivery(input){
//Цени на менюта
    let PriceCMenu = Number(10.35);
    let PriceFMenu = Number(12.40);
    let PriceVMenu = Number(8.15);
    let DeliveryFee = Number(2.50);

//Входни данни
    let CChickenMenu = Number(input[0]);
    let CFishMenu = Number(input[1]);
    let CVeganMenu = Number(input[2]);

    let FinalPriceMenu = (CChickenMenu*PriceCMenu) + (CFishMenu*PriceFMenu) + (CVeganMenu*PriceVMenu);
    let DesertPrice = FinalPriceMenu*20/100;

    let FinalPriceDelivery = FinalPriceMenu+DesertPrice+DeliveryFee;

console.log(FinalPriceDelivery);
}  
    FoodDelivery([`2`,`4`,`3`]);
    FoodDelivery([`9`,`2`,`6`]);