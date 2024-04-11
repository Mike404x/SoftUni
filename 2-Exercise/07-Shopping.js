function Shopping(input){
    let Budget = Number(input[0]);
    let GPUs = Number(input[1]);
    let CPUs = Number(input[2]);
    let RAMs = Number(input[3]);

    let PriceGPU = 250*GPUs;
    let PriceCPU = PriceGPU*0.35;
    let PriceRAM = PriceGPU*0.10;

    let FinalPrice= PriceGPU +  (PriceCPU*CPUs) + (PriceRAM*RAMs);

    if (GPUs > CPUs){
        FinalPrice = (FinalPrice*0.85);
    }
     if (FinalPrice <= Budget){
            console.log(`You have ${(Budget-FinalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(FinalPrice-Budget).toFixed(2)} leva more!`)
    }
 }

Shopping(["900","2","1","3"])
Shopping(["920.45","3","1","1"])