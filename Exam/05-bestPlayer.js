function bestPlayer(input) {
    let bestPlayer = "";
    let maxGoals = -1;
    let hatTrick = false;

    let index = 0;
    while (input[index] !== "END") {
        let player = input[index];
        let goals = Number(input[index + 1]);

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = player;
            hatTrick = goals >= 3;
        }

        if (goals >= 10) {
            break;
        }

        index += 2;
    }

    console.log(`${bestPlayer} is the best player!`);
    if (hatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva","5","Harry Kane","10"])
