function calculateAwards(input) {
    let numberOfDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let totalAwards = 0;

    if (place === "Bulgaria") {
        totalAwards = numberOfDancers * points;
    } else if (place === "Abroad") {
        totalAwards = (numberOfDancers * points) + ((numberOfDancers * points) * 0.5);
    }

    let expensesPercentage = 0;

    if (season === "summer" && place === "Bulgaria") {
        expensesPercentage = 0.05;
    } else if (season === "winter" && place === "Bulgaria") {
        expensesPercentage = 0.08;
    } else if (season === "summer" && place === "Abroad") {
        expensesPercentage = 0.10;
    } else if (season === "winter" && place === "Abroad") {
        expensesPercentage = 0.15;
    }

    let afterExpenses = totalAwards - (totalAwards * expensesPercentage);
    let charity = afterExpenses * 0.75;
    let perDancer = (afterExpenses - charity) / numberOfDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${perDancer.toFixed(2)}`);
}
calculateAwards(["1", "89.5", "summer", "Abroad"]);
