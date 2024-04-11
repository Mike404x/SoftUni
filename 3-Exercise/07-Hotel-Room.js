function hotelRoomCost(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            if (nights > 7 && nights <= 14) {
                studioPrice *= 0.95;
            } else if (nights > 14) {
                studioPrice *= 0.7;
            }
            apartmentPrice = 65;
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            if (nights > 14) {
                studioPrice *= 0.8;
            }
            apartmentPrice = 68.70;
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
        default:
            return;
    }
    if (nights > 14) {
        apartmentPrice *= 0.9;
    }
    studioPrice *= nights;
    apartmentPrice *= nights;

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoomCost(["May", "15"]);
hotelRoomCost(["June", "14"]);
hotelRoomCost(["August", "20"]);