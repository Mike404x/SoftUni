function maxNumbers(input){
    let minNumber= Infinity;
    let index = 0;
    let command = input[index];

    while (command !=="Stop"){
     let currNumber = Number(command);
        if (currNumber < minNumber){
            minNumber = currNumber;
        }
        command = input[index];
        index++
        
    }
    console.log(minNumber);
}
maxNumbers(["100","99","80","70","Stop"])
maxNumbers(["-10","20","-30","Stop"])
maxNumbers(["-1","-2","Stop"])
