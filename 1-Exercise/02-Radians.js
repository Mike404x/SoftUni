function radians(input){
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;
    console.log(degree);
}
radians([`3.1416`]);
radians([`6.2832`]);