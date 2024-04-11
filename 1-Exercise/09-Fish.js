function FishTank(input){
 //Входни данни
    let Length = Number(input[0]);
    let Width = Number(input[1]);
    let Height = Number(input[2]);
    let percentage = Number(input[3]/100);
    
//Сметки    
    let Volume0 = (Length*Width*Height);
    let Volume1 = Volume0/1000;
    let NeededLitre = Volume1 * (1-percentage);

    console.log(NeededLitre);
}
FishTank([`85`,`75`,`47`,`17`]);
FishTank([`105`,`77`,`89`,`18.5`]);