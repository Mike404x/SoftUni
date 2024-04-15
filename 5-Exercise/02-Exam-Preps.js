function examPreparation(input) {
  let poorGradesLimit = Number(input.shift());
  let poorGradesCount = 0;
  let totalGrade = 0;
  let problemsSolved = 0;
  let lastProblem = "";

  while (true) {
      let problem = input.shift();
      if (problem === "Enough") {
          let averageScore = totalGrade / problemsSolved;
          console.log(`Average score: ${averageScore.toFixed(2)}`);
          console.log(`Number of problems: ${problemsSolved}`);
          console.log(`Last problem: ${lastProblem}`);
          break;
      }

      let grade = Number(input.shift());
      totalGrade += grade;
      problemsSolved++;
      lastProblem = problem;

      if (grade <= 4) {
          poorGradesCount++;
          if (poorGradesCount === poorGradesLimit) {
              console.log(`You need a break, ${poorGradesCount} poor grades.`);
              break;
          }
      }
  }
}

// Примерни извиквания на функцията:
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
