function LunchBreak(input){
    let SerialName = String(input[0]);
    let Duration = Number(input[1]);//48
    let Break = Number(input[2]);//60
    
    let FoodTime =  Break/8; //7.5
    let ChillTime = Break/4; //15
    let TimeLeft = Break - FoodTime - ChillTime; //37.5
    if (TimeLeft >= Duration){
        console.log(`You have enough time to watch ${SerialName} and left with ${Math.ceil(TimeLeft-Duration)} minutes free time.`);
    }else {
       console.log(`You don't have enough time to watch ${SerialName}, you need ${Math.ceil(Duration-TimeLeft)} more minutes.`);
    }
}
LunchBreak(["Game of Thrones","60","96"])
LunchBreak(["Teen Wolf","48","60"])
