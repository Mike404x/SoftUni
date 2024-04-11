function ProjectCreation(input){
    let architectName = input[0];
    let projectsCount = input[1];
    let NeededHours= projectsCount*3;
    
    console.log(`The architect ${architectName} will need ${NeededHours} hours to complete ${projectsCount} project/s.`)
}
ProjectCreation([`Ivan`, `3.6`]);