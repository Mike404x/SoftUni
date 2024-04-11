function newHouse(input) {
    let type = input[0];
    let qty = Number(input[1]);
    let budget =  Number(input[2]);
    let price = 0;

    switch (type) {
        case "Roses":
            price = qty * 5.00;
            if (qty > 80) {
                price *= 0.90;
            }
            break;
        case "Dahlias":
            price = qty * 3.80;
            if (qty > 90) {
                price *= 0.85;
            }
            break;
        case "Tulips":
            price = qty * 2.80;
            if (qty > 80) {
                price *= 0.85;
            }
            break;
        case "Narcissus":
            price = qty * 3.00;
            if (qty < 120) {
                price *= 1.15;
            }
            break;
        case "Gladiolus":
            price = qty * 2.50;
            if (qty < 80) {
                price *= 1.20;
            }
            break;
    }
    let diff = Math.abs(budget-price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${qty} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses","55","250"])
newHouse(["Tulips","88","260"])
newHouse(["Dahlias", "100","400"]);
newHouse(["Narcissus","119","360"])