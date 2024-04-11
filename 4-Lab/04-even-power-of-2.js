function even2n(input){
    let n = input[0];
    for(let i = 0; i <=n; i+=2) {
        console.log(Math.pow(2,i));
    }
}
even2n(["3"]);
even2n(["7"]);