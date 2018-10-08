function WordsListGroup(words, group) {
    this.words = words;
    this.group = group;
}


var wordsListGroup1 = new WordsListGroup(words, 1);
var wordsListGroup2 = new WordsListGroup(wordsMonthTwo, 2);

console.log(wordsListGroup1.words[0].rusWord)

var wordsList = [];
wordsList.push(wordsListGroup1);
wordsList.push(wordsListGroup2);

