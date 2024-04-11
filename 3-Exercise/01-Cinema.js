function cinema(input){
    let movie = String(input[0]);
    let r = (input[1]);
    let c = (input[2]);
    let income = 0;

    if(movie == "Premiere"){
        income = r * c *  12.00;
    }else if(movie == "Normal"){
        income = r * c *  7.50;
    }else if(movie == "Discount"){
            income = r * c * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere","10","12"])
cinema(["Normal","21","13"])
cinema(["Discount","12","30"])

