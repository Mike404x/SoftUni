function trackSteps(input) {
    let index = 0;
    let target = 10000;
    let currentSteps = 0;
    let command = input[index];
    index++;

    while (command !== "Going home") {
        let steps = Number(command);
        currentSteps += steps;

        if (currentSteps >= target) {
            break;
        }

        command = input[index];
        index++;
    }

    
    if (command === "Going home") {
        let steps = Number(input[index]);
        index++;
        currentSteps += steps;
    }
    let diff = Math.abs(target-currentSteps);
        if (currentSteps >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }

// Примерни извиквания на функцията:
trackSteps(["1000", "1500", "2000", "6500"]);
trackSteps(["1500", "300", "2500", "3000", "Going home", "200"]);
trackSteps(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
trackSteps(["125", "250", "4000", "30", "2678", "4682"]);
