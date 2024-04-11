function Time_15_Min (input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);  
    
    let time = hour *60 + minutes +15;
    let h=Math.floor(time/60);  
    let m = time % 60 ;

    if (h>23){
        h =0;
    }
    if (m<10){
        console.log(`${h}:0${m}`);
    }else{
        console.log(`${h}:${m}`);
    } 
}
Time_15_Min(["1","46"])
Time_15_Min(["0","01"])
Time_15_Min(["23","59"])
Time_15_Min(["11","08"])
Time_15_Min(["12","49"])