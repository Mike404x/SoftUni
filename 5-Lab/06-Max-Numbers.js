function maxNumbers(input){
    let maxNumber= -Infinity;
    let index = 0;
    let command = input[index];

    while (command !=="Stop"){
     let currNumber = Number(command);
        if (currNumber > maxNumber){
            maxNumber = currNumber;
        }
        command = input[index];
        index++
        
    }
    console.log(maxNumber);
}
maxNumbers(["100","99","80","70","Stop"])
maxNumbers(["-10","20","-30","Stop"])
maxNumbers(["-1","-2","Stop"])
