function GodzillaKong(input){
    let Budget = Number(input[0]);
    let Static = Number(input[1]);
    let PClothes =  Number(input[2]);

    let PriceDecor = Budget*0.1
    let PriceStatic = Static*PClothes;

    if (Static>=150){
        PriceStatic=PriceStatic*0.9;
    }

    let All = PriceDecor + PriceStatic;
    let diff = Math.abs(Budget-All)
    if (All <= Budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }else {
        console.log( "Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
}
}
GodzillaKong(["20000","120","55.5"]);
GodzillaKong(["15437.62","186","57.99"]);
GodzillaKong(["9587.88","222","55.68"]);
