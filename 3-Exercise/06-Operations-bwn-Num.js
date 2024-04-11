function operation (input){
    let num1 = Number(input[0]);
    let num2 =  Number(input[1]);
    let operator = input[2];
    let result = 0;

    if (operator === "+") {
        result = num1 + num2;
        console.log(`${num1} ${operator} ${num2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
    } else if (operator === "-") {
        result = num1 - num2;
        console.log(`${num1} ${operator} ${num2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
    } else if (operator === "*") {
        result = num1 * num2;
        console.log(`${num1} ${operator} ${num2} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
    } else if (operator === "/") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    } else if (operator === "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
        }
    }
}
operation(["10","12","+"]);
operation(["123","12","/"]);
operation(["112","0","/"]);
operation(["10","1","-"]);
