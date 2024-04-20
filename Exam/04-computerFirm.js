function calculateSales(input) {
    let numberOfComputers = Number(input.shift());
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 0; i < numberOfComputers; i++) {
        let computerData = input[i];
        let sales = Number(computerData.slice(0, -1));
        let rating = Number(computerData.slice(-1));

        switch (rating) {
            case 2:
                totalSales += sales * 0;
                break;
            case 3:
                totalSales += sales * 0.5;
                break;
            case 4:
                totalSales += sales * 0.7;
                break;
            case 5:
                totalSales += sales * 0.85;
                break;
            case 6:
                totalSales += sales;
                break;
        }

        totalRating += rating;
    }

    let averageRating = totalRating / numberOfComputers;
    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}

// Извикване на функцията
calculateSales(["5", "122", "156", "202","214","185"]);
