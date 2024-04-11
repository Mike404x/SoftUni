function isNumberValid(input) {
    let number = Number(input[0]);
    let isValid = (number >= 100 && number <=200) || number === 0; 
    if (!isValid) {
        console.log("invalid");
    }
}

isNumberValid(["75"]); // invalid
isNumberValid(["150"]); // (no output)
isNumberValid(["220"]); // invalid
isNumberValid(["199"]); // (no output)
isNumberValid(["-1"]); // invalid
isNumberValid(["100"]); // (no output)
isNumberValid(["200"]); // (no output)
isNumberValid(["0"]); // (no output)

