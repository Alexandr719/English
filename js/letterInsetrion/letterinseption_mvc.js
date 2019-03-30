let view = {
    insertWord: function (rusWord) {
        $('#eng').html(rusWord);

    },
    insertcounter: function (current, max) {
        $('#counter').html(current + "/" + max);
    }

};
let model = {
    words: [],
    counter: 0,
    max: 0,
    category: null,
    shuffledWords: [],
    currentWord: null,
    init: function () {
        this.counter = 0;
        this.max = this.words.length;
        this.start();
    },
    start: function () {
        this.shuffledWords = this.words.sort(this.random);
        view.insertcounter(this.counter, this.max);

        this.currentWord = this.shuffledWords[this.counter];
        view.insertWord(this.currentWord.rusWord);
    },
    random: function (a, b) {
        return Math.random() - 0.5;
    },
    next: function () {
        $("#users_text").val("");
        this.counter++;
        if (counter >= this.max) {
            this.init();
        }
        this.currentWord = this.shuffledWords[this.counter];
        view.insertcounter(this.counter, this.max);
        view.insertWord(this.currentWord.rusWord);
    },setWords:function (dictionaryWords) {
        let context = this;
        this.category = $("select#words_category").val();

        dictionaryWords.forEach(function (item, i, arr) {
            if (item.category === context.category) {
                context.words = item.wordsList;
            }
        });
    }

};
let controller = {

    init: function (words) {
        model.init(words);
    },
    check: function (usersText) {
        if (usersText !== undefined) {
            if (usersText.toLowerCase().trim() === model.currentWord.engWord.toLowerCase().trim()) {
                $('#eng').effect('highlight', {color: '#70e086'});
                $('#errorWord').html("");
            } else {
                $('#eng').effect('highlight', {color: '#e01f20'});
                $('#errorWord').html(model.currentWord.engWord);
            }
        }
    },
    next: function () {
        model.next();
    },
    setWords:function (dictionaryWords) {
        model.setWords(dictionaryWords);
    }


};
(function () {
    let app = {
        init: function () {
            //Изначальная инициализация выбранной категории
            controller.init(wordsList);
            this.main();
            this.event();
        },
        main: function () {
        },
        event: function () {

            $("#words_category").change(function () {
                controller.init(wordsList);
            });

        }
    };
    app.init();
})();