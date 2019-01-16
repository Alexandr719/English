'use strict';

function WordWithCategory(wordsList, category) {
    this.wordsList = wordsList;
    this.category = category;
}
let introductoryWords = [
    {engWord: ' Can I leave a message for Mr Black? ', rusWord: ' Могу ли я оставить сообщение для мистера Блэка?'},
    {engWord: '  Who is calling? ', rusWord: ' Кто звонит?'},
    {engWord: ' Sorry, but I\'m out of the office tomorrow ', rusWord: 'Пристите, но мееня не будет в офисе завтра'},
    {engWord: '  Could you tell me what it\'s about? ', rusWord: ' Можете мне сказать, что случилось?'},
    {engWord: '   Could you call me back in two hours? ', rusWord: ' Можете перезвонить через 2 часа?'},
    {engWord: '  What can I do for you? ', rusWord: ' Чем я могу вам помочь?'},
    {engWord: '   This is Mike from ... ', rusWord: ' Это Майк из....'},
    {engWord: ' Could you ask Leo to call me back? ', rusWord: ' Могу я попросить, чтобы Лео мне перезвонил?'},



];
let words_1 = new WordWithCategory(introductoryWords,"Telephone");
//конечный объект со всеми словами
let wordsList = [];
wordsList.push(words_1);