function climbingMania (input){
    let groupCount = input[0];

    let musala = 0;
    let mountblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let index=1;

    for(let i = 1; i <= groupCount; i++){
        let climbers = Number(input[index]);
        index++;

         if(climbers <= 5){
            musala+=climbers;
        }else if(climbers <=12) {
            mountblanc += climbers;
        } else if(climbers <= 25) {
            kilimanjaro += climbers;
        } else if(climbers <=40) {
            k2 += climbers;
        } else {
            everest += climbers;
        }
    }
    let allClimbers = musala+mountblanc+kilimanjaro+k2+everest;

    console.log(((musala/allClimbers)*100).toFixed(2) + "%");
    console.log(((mountblanc/allClimbers)*100).toFixed(2)+"%");
    console.log(((kilimanjaro/allClimbers)*100).toFixed(2)+ "%");
    console.log(((k2/allClimbers)*100).toFixed(2) +"%");
    console.log(((everest/allClimbers)*100).toFixed(2) + "%") ;
}
climbingMania(["10","10","5","1","100","12","26","17","37","40","78"]);
climbingMania(["5","25","41","31","250","6"])
