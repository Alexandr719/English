



for(var i = 0 ; i < words.length; i++){
    var word_item = document.createElement('div');
    word_item.className = "word_item";
    $('<div>', { class: 'word_list_eng', text: words[i].engWord}).appendTo(word_item);
    $('<div>', { class: 'word_list_rus', text: words[i].rusWord}).appendTo(word_item);
    $('.word_list').append(word_item);
}





