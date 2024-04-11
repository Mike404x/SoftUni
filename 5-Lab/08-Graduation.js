function graduation (input){
    let name = input[0];
    let gradeSum = 0;
    let year =1;
    let index = 1;
    let grade = Number(input[index]);
    index++
    
    let fail = 0;

    while (year <= 12){
        gradeSum += grade;

        if (grade<4){
            fail++;
            if (fail > 1){
            console.log(`${name} has been excluded at ${year} grade`);
            return;
           }
        }else {
            year++;
        }
        grade = Number(input[index]);
        index++;
    }
    let avgSum= gradeSum/12;

    console.log(`${name} graduated. Average grade: ${avgSum.toFixed(2)}`)
}
graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])