function ranklist (input){
    let index=0;
    let tournaments = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++;
    let winCount = 0;
    let currPoints =0;
    for (let i=0;i<tournaments;i++){
        let stage = input[index];
        index++;

        switch (stage){
            case "F": currPoints +=1200; break;
            case "W": currPoints +=2000; winCount++; break;
            case "SF": currPoints += 720; break;
        }
    }
    let finalPoints = startPoints + currPoints;
    let avgPoints = Math.floor(currPoints/ tournaments);
    let percentage = winCount/tournaments*100;

        console.log(`Final points: ${finalPoints}\nAverage points: ${avgPoints}\n${percentage.toFixed(2)}%`);

}
ranklist(["5","1400","F","SF","W","W","SF"])