function oscars(input){
    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;

    for (let i = 1; i <= n; i++){
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++;
        let result = name.length * tempPoints / 2;
        points += result;
     if (points>1250.5){
        break;
    }
}
    if ( points >1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }
}