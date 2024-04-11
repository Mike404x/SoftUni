function skiTrip(input){
    let days = Number(input[0])-1;
    let typeRoom = String(input[1]);
    let review  = String(input[2]);
    let price = 0;

    if  (days < 10) {
        if  (typeRoom == "room for one person"){
            price = 18.00 * days;
            } else if (typeRoom == "apartment"){
                price = (25.00 * days) * 0.70 ;
            } else if (typeRoom == "president apartment"){
                price = (35.00 * days) * 0.90;
         }
    } else if  (days >= 10 && days <= 15) {
        if  (typeRoom == "room for one person"){
            price = 18.00 * days;
            } else if (typeRoom == "apartment"){
                price = (25.00 * days) * 0.65 ;
            } else if (typeRoom == "president apartment"){
                price = (35.00 * days) * 0.85;
        }
    } else if (days > 15) {
            if  (typeRoom == "room for one person"){
                price = 18.00 * days;
                } else if (typeRoom == "apartment"){
                    price = (25.00 * days) * 0.50 ;
                } else if (typeRoom == "president apartment"){
                    price = (35.00 * days) * 0.80;
        }
    }
    if  (review === "positive"){
        price += price * 0.25;
    } else if (review === "negative"){
        price -= price * 0.10;
    }
    console.log(price.toFixed(2));
}
skiTrip(["14","apartment","positive"]);
skiTrip(["30","president apartment","negative"]);
skiTrip(["12","room for one person","positive"]);
skiTrip(["2","apartment","positive"]);

