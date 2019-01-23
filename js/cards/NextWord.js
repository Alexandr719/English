let view = {
    showCount: function (currentValue, maxValue) {
        $('#counter').text(currentValue + " / " + maxValue);
    },
    showWord: function (currentWord) {
        document.getElementById('currentRusWord').innerHTML = currentWord.rusWord;
        document.getElementById('currentEngWord').innerHTML = currentWord.engWord;
    }
};
let model = {
    learners: [],
    words: [],
    counterValue: 0,
    maxCounterValue: 10,
    incrementCounter: function () {
        this.counterValue = (this.counterValue + 1) % this.maxCounterValue;
        view.showCount(this.counterValue, this.maxCounterValue);
        view.showWord(this.words[this.counterValue]);
    },
    decrementCounter: function () {
        if (this.counterValue === 0) {
            this.counterValue = this.maxCounterValue - 1;
        } else {
            this.counterValue--;
        }

        view.showCount(this.counterValue, this.maxCounterValue);
        view.showWord(this.words[this.counterValue]);
    },
    setWords: function (categoryCategoty, random) {
        let currentWords = [];
        wordsList.forEach(function (item) {
            if (item.category === categoryCategoty) {
                currentWords = item.wordsList;
            }
        });

        if (random) {
            let shuffleWords = array => array.sort(() => Math.random() - 0.5);
            this.words = shuffleWords(currentWords);
        } else {

            this.words = currentWords;
        }

        this.counterValue = 0;
        this.maxCounterValue = this.words.length;
        view.showCount(this.counterValue, this.maxCounterValue);
        view.showWord(this.words[this.counterValue]);
    },
    addLearnWord: function () {
        this.learners.push(this.words[this.counterValue]);
        let indexToRemove = wordsList.findIndex(obj => obj.category === "learner");
        wordsList.splice(indexToRemove, 1);
        let learnWord = new WordWithCategory(this.learners, "Learners");
        wordsList.push(learnWord);
        //todo
        selectAllCategories(); //add into view
    }


};
let controller = {
    nextWordClick: function () {
        model.incrementCounter();

    },
    prewWordClick: function () {
        model.decrementCounter();
    },
    playWord: function () {
        let currentWord = model.words[model.counterValue]
            .engWord.trim().toLowerCase();
        let msg = new SpeechSynthesisUtterance(currentWord);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    },
    selectCategory: function () {
        let selectedCategoty = $("select#words_category").val();
        let random = document.getElementById("randomCheck").checked;
        model.setWords(selectedCategoty, random);
    },
    addLearners: function () {
        model.addLearnWord();
    }

};
(function () {
    let app = {
        init: function () {

            //Изначальная инициализация выбранной категории
            controller.selectCategory();
            this.main();
            this.event();
        },
        main: function () {

        },
        event: function () {

            document.getElementById("nextWord").onclick = controller.nextWordClick;
            document.getElementById("prewWord").onclick = controller.prewWordClick;
            document.getElementById("learners_words").onclick = controller.addLearners;

            $(".front .fa").click(function () {
                controller.playWord("hello");
            });

            $("#words_category").change(function () {
                controller.selectCategory();
            });
            $('#randomCheck').change(function () {
                controller.selectCategory();
            });


        }
    };
    app.init();
})();


