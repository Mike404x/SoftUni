function pcstore (input){

    let priceCPU = Number(input[0])*1.57; //500
    let priceVideoCard = Number(input[1])*1.57;  //1200
    let priceRAM = Number(input[2])*1.57; //80
    let quantityRAM = Number(input[3]); //2
    let discount = Number(input[4]); //0.05

    let totalRAM = priceRAM*quantityRAM;
    let discountPrice = priceCPU* (1-discount);
    let discountedVideoCard = priceVideoCard * (1 - discount);
    let totalPrice = discountPrice + discountedVideoCard + totalRAM;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);

}
pcstore(["500","200","80","2","0.05"])