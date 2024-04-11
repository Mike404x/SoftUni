function Vacation(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    //Calculations
    let hoursNeeded = pages / pagesPerHour;
    let hoursPerDay = hoursNeeded / days;
    console.log(hoursPerDay);
}
Vacation([`212`,`20`,`2`]);
Vacation(["432","15","4"]);