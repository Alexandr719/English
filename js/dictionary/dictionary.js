
let dictionary_words = [];
wordsList.forEach(function (itemList) {
     itemList.wordsList.forEach(function (item) {
         dictionary_words.push(item);
     });
});


for(let i = 0 ; i < dictionary_words.length; i++){
    let word_item = document.createElement('div');
    word_item.className = "word_item";
    $('<div>', { class: 'word_list_eng', text: dictionary_words[i].engWord}).appendTo(word_item);
    $('<div>', { class: 'word_list_rus', text: dictionary_words[i].rusWord}).appendTo(word_item);
    $('.word_list').append(word_item);
}





