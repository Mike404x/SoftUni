function Repainting(input){
    let NeededQNylon = Number(input[0]);
    let NeededQPaint = Number(input[1]);
    let Thinner = Number(input[2]);
    let Hours = Number(input[3]);

    let PriceNylon = (NeededQNylon + 2)*1.50;
    let PricePaint =(NeededQPaint + ((NeededQPaint*10)/100)) * 14.50;
    let PriceThinner = Thinner * 5.00;
    let PriceBags = 0.40;

    let PriceEverything = PriceNylon + PricePaint + PriceThinner + PriceBags;
    let PriceWork = (PriceEverything * 30/100) * Hours;

    let FinalP = PriceEverything + PriceWork;

    console.log(FinalP);
}
Repainting(["10","11","4","8"]);
Repainting(["5","10","10","1"]);