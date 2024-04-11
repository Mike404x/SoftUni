function Exam (input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);
    
    let timeExam = examHour * 60 + examMinute;
    let timeArrive = arriveHour * 60 + arriveMinute;
    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff/60);
    let min = diff % 60;

    if (timeExam < timeArrive) {
        console.log("Late");
        if (h > 0){
            if (min < 10){
                console.log(`${h}:0${min} hours after the start`);
            }else {
                console.log(`${h}:${min} hours after the start`);
            }
        }else {
            console.log(`${min} minutes after the start`);
        }
    } else if (timeExam - timeArrive <= 30 ) {
        console.log("On time");
        if (min > 0){
            console.log(`${min} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (h > 0){
            if (min < 10){
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
            } else {
                console.log(`${min} minutes before the start`);
            }
        }
    }

Exam(["9","30","9","50"]);//Late / 20 minutes after the start
Exam(["9","00","8","30"]);//On time / 30 minutes before the start
Exam(["16","00","15","00"]);//Early / 1:00 hours before the start
Exam(["9","00","10","30"]);//Late / 1:30 hours after the start
Exam(["14","00","13","55"]);//On time / 5 minutes before the start
