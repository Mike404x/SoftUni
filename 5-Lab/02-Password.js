function passwordCheck(input){
    let name = input[0];
    let password = input[1];
    let index= 2;
    let passwordGuess = input[index];
    index++;

    while (passwordGuess !== password){
        passwordGuess = input[index];
        index++;

    }if (passwordGuess === password){
        console.log(`Welcome ${name}!`)
    }
}
passwordCheck(["Nakov","1234",
"Pass","1324","1234"])