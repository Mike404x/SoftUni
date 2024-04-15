function oldBook (input){
let bookName = input[0];
let index = 1;
let nextBook = input[index];
while (nextBook !== "No More Books"){
    if (nextBook === bookName){
        console.log(`You checked ${index - 1} books and found it.`);
        break;
    }
    index++;
    nextBook = input[index];
    }
    if (nextBook === "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }

}
oldBook(["Troy","Stronger","Life Style","Troy"])
oldBook(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])