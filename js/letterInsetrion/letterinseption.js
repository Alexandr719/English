let words;
let counter;
let selectedWordCategory = $("select#words_category").val();
startCards(selectedWordCategory);

//If user change category
$("#words_category").change(function () {
    selectedWordCategory = $("select#words_category").val();
    startCards(selectedWordCategory);
});


function startCards(select_val) {
    wordsList.forEach(function (item, i, arr) {
        if (item.category === select_val) {
            words = item.wordsList;
        }
    });
    startScript();
}


function startScript() {
    shuffle = words.sort(compareRandom);  //перемешиваем массив слов
    counter = 0;
    $('#eng').html(shuffle[counter].rusWord);
    $('#counter').html("0/" + shuffle.length);
}

function check() {
    let usersText = $("#users_text").val();

        if(usersText.toLowerCase().trim() === shuffle[counter].engWord.toLowerCase().trim()){
            $('#eng').effect('highlight', {color: '#70e086'});
            $('#errorWord').html("");
        }else{
            $('#eng').effect('highlight', {color: '#e01f20'});
            $('#errorWord').html(shuffle[counter].engWord);
        }

}




function next() {
    $("#users_text").val("");
    counter++;
    $('#counter').html(counter + "/" + shuffle.length);
    if (counter < shuffle.length) {
        $('#eng').html(shuffle[counter].rusWord);
    }else{
        startScript();
    }
}


function compareRandom(a, b) {
    return Math.random() - 0.5;
}