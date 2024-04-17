function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    for(let curFloor = floors; curFloor >= 1; curFloor--){
        let room = "";
        for(let curRoom = 0; curRoom < rooms; curRoom++){
            if(curFloor === floors){
                room += `L${curFloor}${curRoom} `   
            } else if (curFloor % 2 === 0){
                room += `O${curFloor}${curRoom} `
            } else {
                room += `A${curFloor}${curRoom} `
            }
        }
        console.log(room);
    }
}
building(["6", "4"])