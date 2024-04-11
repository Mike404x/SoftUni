function WorldSwimRecord(input){
    let RecordSeconds = Number(input[0]);
    let DistanceMeters = Number(input[1]);
    let TimeSfor1M = Number(input[2]);
    
    let totaltime = DistanceMeters*TimeSfor1M + Math.floor(DistanceMeters/15).toFixed(0)*12.5;
    let diff = Math.abs(totaltime - RecordSeconds);

    if (RecordSeconds > totaltime){
        console.log(`Yes, he succeeded! The new world record is ${(totaltime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
        }
}
WorldSwimRecord(["10464","1500","20"]);
WorldSwimRecord(["55555.67","3017","5.03"]);