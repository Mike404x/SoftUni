function Histogram (input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1Counter = 0
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 0; i< n; i++){
        let currentNum = Number(input[index]);
        index++
        if(currentNum <200){
            p1Counter++;
        }else if (currentNum <= 399){
            p2Counter++;
        }else if (currentNum <= 599){
            p3Counter++;
        }else if ( currentNum <= 799){
            p4Counter++;
        }else if (currentNum >=800){
            p5Counter++;
        }
    }
     p1 = p1Counter / n *100;
     p2 = p2Counter / n *100;
     p3 = p3Counter / n *100;
     p4 = p4Counter / n *100;
     p5 = p5Counter / n *100;

 console.log(`${p1.toFixed(2)}%`);
 console.log(`${p2.toFixed(2)}%`);
 console.log(`${p3.toFixed(2)}%`);
 console.log(`${p4.toFixed(2)}%`);
 console.log(`${p5.toFixed(2)}%`);
}