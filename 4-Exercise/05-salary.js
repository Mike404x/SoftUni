function solve(input) {
    // let tabCount = Number(input[0]);
    let salary = Number(input[1]);

    // tabCount can be 1 or 2 !!!
    for (let i = 2; i < input.length; i++) {
        switch (input[i]) {
            case "Facebook":
                salary = salary - 150
                break;
            case "Instagram":
                salary = salary - 100
                break;
            case "Reddit":
                salary = salary - 50
                break;
            default: break;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.")
            break;
        }
    }

    if (salary > 0) {
        console.log(salary)
    }
}