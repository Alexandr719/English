let checked_values = [];
let pattern_words = undefined;


//Add check_box
wordsList.forEach(function (item, i, arr) {
    let checkbox_field = $("#checkbox_fields");
    let div_field = document.createElement('div');
    $(div_field).append("<input class='check_box' type='checkbox' id=" + item.category + "  name=" + item.category + " value=" + item.category + " checked>");
    $(div_field).append("<label for=" + item.category + ">" + item.category + "</label>");
    checkbox_field.append(div_field);
    checked_values.push(item.category);
    filterDictionary(checked_values);
});

//YES
function filterDictionary(checked_values, patternText) {
    let dictionary_words = [];
    wordsList.forEach(function (itemList) {
        if (checked_values.indexOf(itemList.category) !== -1) {
            itemList.wordsList.forEach(function (item) {
                if(patternText !== undefined ){
                    if(item.engWord.toLowerCase().indexOf(patternText) !== -1
                        || item.rusWord.toLowerCase().indexOf(patternText) !== -1)
                    dictionary_words.push(item);
                }else {
                    dictionary_words.push(item);
                }
            });
        }

        inputIntoHtml(dictionary_words);
    })

}

//YES
function inputIntoHtml(dictionary_words) {
    $(".word_list").empty();
    for (let i = 0; i < dictionary_words.length; i++) {
        let word_item = document.createElement('div');
        word_item.className = "word_item";

        $('<div>', {class: 'word_list_eng', text: dictionary_words[i].engWord}).appendTo(word_item);
        $('<div>', {class: 'word_list_rus', text: dictionary_words[i].rusWord}).appendTo(word_item);
        $('.word_list').append(word_item);
    }
}

$('.check_box').change(
    function () {
        if ($(this).is(':checked')) {
            checked_values.push(this.value);

        } else {
            checked_values.splice(checked_values.indexOf(this.value), 1);

        }
        filterDictionary(checked_values,pattern_words);
    });


$('#search_word').keyup(function (e) {
    pattern_words = e.target.value.toLowerCase()
    filterDictionary(checked_values, pattern_words);
});


$('.filtrbtn').click(function(){
    if($('.filter').is(":visible")){
        $('.filter').hide("slow" );
    }else{
        $('.filter').show("slow" );
    }
});



