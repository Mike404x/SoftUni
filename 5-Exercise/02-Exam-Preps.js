function examPreps (input){ {
        let unsatisfactoryGrades = input[0];
        let totalScore = 0;
        let problemCount = 0;
        let lastProblem = "";
      
        for (let i = 0; i < input.length; i += 2) {
          let problem = input[i];
          let grade = parseInt(input[i + 1]);
      
          if (grade <= 4) {
            unsatisfactoryGrades--;
          }
      
          totalScore += grade;
          problemCount++;
          lastProblem = problem;
      
          if (unsatisfactoryGrades === 0 || input[i + 2] === "Enough") {
            break;
          }
        }
      
        if (input[input.length - 1] === "Enough") {
          console.log(`Average score: ${(totalScore / problemCount).toFixed(2)}`);
          console.log(`Number of problems: ${problemCount}`);
          console.log(`Last problem: ${lastProblem}`);
        } else {
          console.log(`You need a break, ${unsatisfactoryGrades} poor grades.`);
        }
      }
      
}
examPreps(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
examPreps(["2","Income","3","Game Info","6","Best Player","4"])