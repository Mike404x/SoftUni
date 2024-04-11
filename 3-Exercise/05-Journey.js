function planVacation(input) {
    let budget =  Number(input[0]);
    let season = String(input[1]);
    let finalDestination = "";
    let vacationType = "";
    let amountToSpend = 0;

    season = season.toLowerCase();

    if (budget <= 100) {
        finalDestination = "Bulgaria";
        if (season === "summer") {
            amountToSpend = budget * 0.3;
            vacationType = "Camp";
        } else if (season === "winter") {
            amountToSpend = budget * 0.7;
            vacationType = "Hotel";
        }
    } else if (budget <= 1000) {
        finalDestination = "Balkans";
        if (season === "summer") {
            amountToSpend = budget * 0.4;
            vacationType = "Camp";
        } else if (season === "winter") {
            amountToSpend = budget * 0.8;
            vacationType = "Hotel";
        }
    } else {
        finalDestination = "Europe";
        amountToSpend = budget * 0.9;
        vacationType = "Hotel";
    }

    console.log(`Somewhere in ${finalDestination}`);
    console.log(`${vacationType} - ${(amountToSpend).toFixed(2)} `);
}

planVacation(["50", "summer"]);
planVacation(["75", "winter"]);
planVacation(["312", "summer"]);
planVacation(["678.53", "winter"]);
planVacation(["1500", "summer"]);