function Supplies(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let Price4pens = pens * 5.80;
    let Price4markers = markers * 7.20;
    let Price4detergent = detergent *1.20;
    let Price4Everything = Price4pens + Price4markers + Price4detergent;

    let FinalPrice = Price4Everything - (Price4Everything* (discount/100));

    console.log(FinalPrice);
}
Supplies([`2`,`3`,`4`,`25`]);
Supplies (["4","2","5","13"]);