function BB (input){
    let YearlyTax = Number(input[0]);

    let PriceTraining = YearlyTax;
    let Shoes = YearlyTax - (YearlyTax*40/100);
    let Outfit = Shoes - (Shoes*20/100);
    let Ball = Outfit/4;
    let Accessory = Ball/5;
    
    let FullPrice = PriceTraining+Shoes+Outfit+Ball+Accessory;

    console.log(FullPrice)
}
BB([`365`]);
BB([`550`]);