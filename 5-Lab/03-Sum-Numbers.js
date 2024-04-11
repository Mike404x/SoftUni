function sumNumber (input){
    let mainNumber = input[0];
    let sum = 0

    let index = 1;
    let number = Number(input[index]);
    index++;

    while(sum < mainNumber){
        sum += number;
   
        number = Number(input[index]);
        index++;
    }
    console.log(sum);
}
sumNumber(["100","10","20","30","40"])
sumNumber(["20","1","2","3","4","5","6"])
