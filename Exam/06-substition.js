function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let count = 0;

    for (let f1 = K; f1 <= 8; f1++) {
        for (let s1 = 9; s1 >= L; s1--) {
            for (let f2 = M; f2 <= 8; f2++) {
                for (let s2 = 9; s2 >= N; s2--) {
                    if (f1 % 2 === 0 && s1 % 2 !== 0 && f2 % 2 === 0 && s2 % 2 !== 0) {
                        if (f1 !== f2 || s1 !== s2) {
                            if (count < 6) {
                                console.log(`${f1}${s1} - ${f2}${s2}`);
                                count++;
                            } else {
                                return;
                            }
                        } else {
                            console.log("Cannot change the same player.");
                        }
                    }
                }
            }
        }
    }
}

substitute([6, 7, 8, 5]);
