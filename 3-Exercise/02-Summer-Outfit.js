function summerOutfit(input){
    let degree = Number(input[0]);
    let time = (input[1]);
    let outfit;
    let shoes;


    if( degree >= 10 && degree <= 18){
        if(time === "Morning"){
        outfit  = "Sweatshirt"
        shoes = "Sneakers"
    }else if(time === "Afternoon" || time === "Evening"){
        outfit = "Shirt"
        shoes = "Moccasins"
    }
    }else if(degree > 18 && degree <= 24){
              if(time === "Morning"){
                outfit = "Shirt"
                shoes = "Moccasins"
            }else if(time === "Afternoon"){ 
                outfit = "T-Shirt"
                shoes = "Sandals"
            }else if (time === "Evening"){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
        } else if(degree >= 25){
            if(time === "Morning"){
                outfit = "T-Shirt"
                shoes = "Sandals"
            }else if(time === "Afternoon"){
                outfit = "Swim Suit"
                shoes = "Barefoot"
            }else if(time === "Evening"){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
         } 
         console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16","Morning"]);
summerOutfit(["22","Afternoon"]);
summerOutfit(["28","Evening"]);