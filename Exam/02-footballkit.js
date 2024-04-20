function calculatePurchase(input) {
    let tShirtPrice = Number(input[0]);
    let targetSum = Number(input[1]);

    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let sneakersPrice = (tShirtPrice + shortsPrice) * 2;

    let totalPrice = tShirtPrice + shortsPrice + socksPrice + sneakersPrice;
    let discountedPrice = totalPrice * 0.85; // 15% discount

    if (discountedPrice >= targetSum) {
        let earnedAmount = discountedPrice.toFixed(2);
        console.log(`Yes, he will earn the world-cup replica ball!\nHis sum is ${earnedAmount} lv.`);
    } else {
        let neededAmount = (targetSum - discountedPrice).toFixed(2);
        console.log(`No, he will not earn the world-cup replica ball.\nHe needs ${neededAmount} lv. more.`);
    }
}
calculatePurchase(["25","100"]);
