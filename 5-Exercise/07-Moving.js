function movingOut(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let volume = width * length * height;
    
    let command = input[index];
    while(command !=="Done") {
        let boxes = Number(command);
        volume -= boxes;
        
        if (volume < 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        }
        index++;
        command = input[index];
    }

    console.log(`${volume} Cubic meters left.`);
}

movingOut(["10", "10", "2", "20", "20", "20", "20", "122"]);
movingOut(["10", "1","2","4", "6","Done"])
