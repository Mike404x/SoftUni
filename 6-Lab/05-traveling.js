function travel(input) {
    let index = 0;

    while (index < input.length) {
        let destination = input[index];
        if (destination === "End") break; // Add this line to exit the loop when "End" is encountered
        let budget = Number(input[index + 1]);
        let totalSavings = 0;
        let savingIndex = index + 2;

        while (true) {
            let saving = Number(input[savingIndex]);
            totalSavings += saving;

            if (totalSavings >= budget) {
                console.log(`Going to ${destination}!`);
                break;
            }

            savingIndex++;

            // Add a condition to exit the loop if we reach the end of input
            if (savingIndex >= input.length) break;
        }
        index = savingIndex + 1;
    }
}

travel(["Greece","1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])