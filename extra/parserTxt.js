const fs = require("fs");
let fileContent = fs.readFileSync("hello.txt", "utf8");
let responseText = fileContent.replace(/\r|\n/g, '')



let massWords = responseText.split(';');


massWords.forEach(function (item){

    item.replace(new RegExp("\r\n",'g')," ");


    let word = item.split('=');
    console.log("{ engWord: '"+currentWord[0]+"' , rusWord: '"+currentWord[1]+"' },");
});