let view = {
    pasteDistionaryHTML: function (dictionary_words) {
        $(".word_list").empty();
        for (let i = 0; i < dictionary_words.length; i++) {
            let word_item = document.createElement('div');
            word_item.className = "word_item";
            $('<div>', {class: 'word_list_eng', text: dictionary_words[i].engWord}).appendTo(word_item);
            $('<div>', {class: 'word_list_rus', text: dictionary_words[i].rusWord}).appendTo(word_item);
            $('.word_list').append(word_item);
        }
    },
    pasteCheckBox: function (dictionary_words) {
        wordsList.forEach(function (item, i, arr) {
            let checkbox_field = $("#checkbox_fields");
            let div_field = document.createElement('div');
            $(div_field).append("<input class='check_box' type='checkbox' id=" + item.category + "  name=" + item.category + " value=" + item.category + " checked>");
            $(div_field).append("<label for=" + item.category + ">" + item.category + "</label>");
            checkbox_field.append(div_field);

        });
    }

};
let model = {
    checked_values: [],
    dictionary_words: [],
    pattern_words: undefined,
    outWords: [],

    setWords: function (dictionary_words) {
        this.dictionary_words = dictionary_words;

        let context = this;
        dictionary_words.forEach(function (item, i, arr) {
            context.checked_values.push(item.category);
        });
        dictionary_words.forEach(function (item) {
            for (let i = 0; i < item.wordsList.length; i++) {
                context.outWords.push(item.wordsList[i]);
            }
            console.log(item.wordsList);
        });

        view.pasteCheckBox(this.dictionary_words);
        view.pasteDistionaryHTML(this.outWords);
        console.log(this.checked_values);
    },
    showFilteredWords: function () {
        let context = this;
        this.outWords = [];
        this.dictionary_words.forEach(function (itemList) {
            if (context.checked_values.indexOf(itemList.category) !== -1) {
                itemList.wordsList.forEach(function (item) {
                    if (context.pattern_words !== undefined) {
                        if (item.engWord.toLowerCase().indexOf(context.pattern_words) !== -1
                            || item.rusWord.toLowerCase().indexOf(context.pattern_words) !== -1)
                            context.outWords.push(item);
                    } else {
                        context.outWords.push(item);
                    }
                });
            }
        });
        view.pasteDistionaryHTML(this.outWords);

    }

};
let controller = {
    filter: function () {
        model.showFilteredWords();
    },
    addCheckedValue: function (value) {
        model.checked_values.push(value);
        this.filter();
    },
    deleteCheckedValue: function (deletedValue) {
        model.checked_values.splice(model.checked_values.indexOf(deletedValue), 1);
        console.log(model.checked_values);
        this.filter();
    },
    addPatternWords: function (pattern) {
        model.pattern_words = pattern;
        this.filter();
    },
    initialize: function (words) {
        console.log(words);
        model.setWords(words);
    }

};
(function () {
    let app = {
        init: function () {
            controller.initialize(wordsList);
            this.main();
            this.event();
        },
        main: function () {

        },
        event: function () {
            $('.check_box').change(
                function () {
                    if ($(this).is(':checked')) {
                        controller.addCheckedValue(this.value);
                    } else {

                        controller.deleteCheckedValue(this.value);
                    }

                });

            $('#search_word').keyup(function (e) {
                pattern_words = e.target.value.toLowerCase();
                controller.addPatternWords(pattern_words);
            });

            $('.filtrbtn').click(function () {
                if ($('.filter').is(":visible")) {
                    $('.filter').hide("slow");
                } else {
                    $('.filter').show("slow");
                }
            });

        }
    };
    app.init();
})();