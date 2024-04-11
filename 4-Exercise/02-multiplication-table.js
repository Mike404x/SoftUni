function multiplicationTable(input){
    let multiplication = input[0];
    for(let i = 1; i <= 10; i++){
            console.log(`${i} * ${multiplication} = ${i*multiplication}`);
        }
    }
multiplicationTable(["5"]);