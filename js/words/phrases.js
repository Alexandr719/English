'use strict';

function WordWithCategory(wordsList, category) {
    this.wordsList = wordsList;
    this.category = category;
}
let telephoneWords = [
    {engWord: ' Can I leave a message for Mr Black? ', rusWord: ' Могу ли я оставить сообщение для мистера Блэка?'},
    {engWord: '  Who is calling? ', rusWord: ' Кто звонит?'},
    {engWord: ' Sorry, but I\'m out of the office tomorrow ', rusWord: 'Пристите, но мееня не будет в офисе завтра'},
    {engWord: '  Could you tell me what it\'s about? ', rusWord: ' Можете мне сказать, что случилось?'},
    {engWord: '   Could you call me back in two hours? ', rusWord: ' Можете перезвонить через 2 часа?'},
    {engWord: '  What can I do for you? ', rusWord: ' Чем я могу вам помочь?'},
    {engWord: '   This is Mike from ... ', rusWord: ' Это Майк из....'},
    {engWord: ' Could you ask Leo to call me back? ', rusWord: ' Могу я попросить, чтобы Лео мне перезвонил?'},



];
let meetingWords = [
    {engWord: '  When would suit you?', rusWord: 'Когда вам удобно ?'},
    {engWord: '  Are you free tomorrow evening? ', rusWord: 'Вы свободны завтра вечером?'},
    {engWord: '  Does Monday work for you? ', rusWord: 'Понедельник вам подходит?'},
    {engWord: '  Let\'s meet in front of the theatre. ', rusWord: 'Давайте встретимся напротив театра.'},
    {engWord: '  I\'m afraid I\'ve got something on. ', rusWord: 'Боюсь, я меня будут дела ....'},
    {engWord: '  Shall we say 6.30 ? ', rusWord: 'Договорились на 6:30 '},
    {engWord: '  How about Tuesday instead ? ', rusWord: 'Что насчет понедельника, вместо этого ?'},
    {engWord: '  So that\'s 2 pm in the cafe. See you later.', rusWord: 'Так, в 2 часа после полудня в кафе.Увидися.'},
    {engWord: '  Can we find a different time ? ', rusWord: 'Мы можем найти другое время ?'},
    {engWord: '  Sorry but I\'m busy at that time.', rusWord: 'Извините, но я занят в это время.'},




];
let words_1 = new WordWithCategory(meetingWords,"Telephone");
let words_2 = new WordWithCategory(meetingWords,"Meetings");
//конечный объект со всеми словами
let wordsList = [];
wordsList.push(words_1);
wordsList.push(words_2);