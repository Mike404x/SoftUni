function boat(input){
    let budget = Number(input[0]);
    let season = String(input[1]);
    let qtypeople = Number(input[2]);
    let priceboat = 0;
    
        switch(season){
            case "Spring":
                priceboat = 3000;
                if (qtypeople<=6){
                    priceboat *=0.90;
                }
                else if (qtypeople>=7 && qtypeople<=11){
                    priceboat *= 0.85;
                }
                else if (qtypeople>12){
                    priceboat *= 0.75;
                }break;
            case "Autumn":
                    priceboat = 4200;
                    if (qtypeople<=6){
                        priceboat *=0.90;
                    }
                    else if (qtypeople>=7 && qtypeople<=11){
                        priceboat *= 0.85;
                    }
                    else if (qtypeople>12){
                        priceboat *= 0.75;
                    }break;
            case "Summer":
                priceboat = 4200;
                if (qtypeople<=6){
                    priceboat *= 0.90;
                }
                else if (qtypeople>=7 && qtypeople<=11){
                    priceboat *= 0.85;
                }
                else if (qtypeople>12){
                    priceboat *= 0.75;
                }break;
            case "Winter":
                priceboat = 2600;   
                if (qtypeople<=6){
                    priceboat *=0.90;
                }
                else if (qtypeople>=7 && qtypeople<=11){
                    priceboat *= 0.85;
                }
                else if (qtypeople>12){
                    priceboat *= 0.75;
                }break;
                
    }
        if (qtypeople % 2 == 0 && season !=="Autumn"){
            priceboat*=0.95;}
    
        let diff = Math.abs(priceboat-budget);
        if (budget>=priceboat){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
        }else {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
        }
    }