function trainTheTrainers(input) {
    let index = 0;

    let judges = Number(input[index++]);
    let presentation = input[index++];
    let command = input[index++];

    let numberOfPresentation = 1;
    let grade = 0;
    let gradeTotal = 0;
    let counter = 0;
    while (command !== 'Finish') {
        if (counter === judges) {
            console.log(`${presentation} - ${(grade / judges).toFixed(2)}.`);
            gradeTotal += grade;
            counter = 0;
            grade = 0;
            presentation = command;
            numberOfPresentation++;
        } else {
            grade += Number(command);
            counter++;
        }
        command = input[index];
        index++;
    }

    console.log(`${presentation} - ${(grade / judges).toFixed(2)}.`);
    gradeTotal += grade;
    console.log(`Student's final assessment is ${(gradeTotal / (numberOfPresentation * judges)).toFixed(2)}.`);
}
trainTheTrainers(['2', 'While-Loop', '6.00', '5.50', 'For-Loop', '5.84', '5.66', 'Finish']);