let view = {
    showCount: function (currentValue, maxValue) {
        $('#counter').text(currentValue + " / " + maxValue);

    },
    showEngWord: function (currentWord) {
        $('#eng').html(currentWord.engWord);
    },
    showAnswers: function (answers) {
        for (let i = 0; i < 4; i++) {

            $('#button' + i).html(answers[i].rusWord);

        }
    },
    showTimer: function (timer) {
        $("#testTimer").html(timer);
    },
    showResult: function (rightAnswers, maxAnswers) {

        $("#main_test_area").hide();
        alert("Right answers:" + rightAnswers + "/" + maxAnswers);
        this.showWrongWords();

    },
    showTest: function () {

        $("#main_test_area").show();


    },
    trueGuess: function () {
        $('#eng').effect('highlight', {color: '#70e086'});
    },
    falseGuess: function () {
        $('#eng').effect('highlight', {color: '#e01f20'});
    },
    showWrongWords: function () {
        $("#wrongWords_list").empty();
        model.wrongWords.forEach(function (item) {
            $("#wrongWords_list").append('<div class="word_item">' + '<div class="word_list_eng">' + item.engWord + '</div>' +
                '<div class="word_list_rus">' + item.rusWord + '</div>' +
                '</div>');
        });


    },

};
let model = {
    wrongWords: [],
    words: [],
    answers: [],
    rightAnswer: 0,
    counterRightAnswers: 0,
    counterValue: 0,
    maxCounterValue: 0,
    timer: 0,
    decrementTimerValue: 3,
    incrementCounter: function () {
        this.counterValue = (this.counterValue + 1) % this.maxCounterValue;
        if (this.counterValue === 0) {
            view.showResult(this.counterRightAnswers, this.maxCounterValue);
            controller.stopTimer();

        }
        view.showCount(this.counterValue, this.maxCounterValue);
    },
    initWords: function (wordCategory) {

        let currentWords = [];
        wordsList.forEach(function (item) {
            if (item.category === wordCategory) {
                currentWords = item.wordsList;
            }
        });

        let shuffleWords = array => array.sort(() => Math.random() - 0.5);
        this.words = shuffleWords(currentWords);

        this.counterRightAnswers = 0;
        this.counterValue = 0;
        this.maxCounterValue = this.words.length;
        this.wrongWords = [];
        view.showWrongWords();
        this.setWords();


    },
    setWords: function () {
        this.generateAnswers();
        view.showCount(this.counterValue, this.maxCounterValue);
        view.showEngWord(this.words[this.counterValue]);
        view.showAnswers(this.answers);
    },
    setTimer: function (levelTime) {
        //Todo constants
        if (levelTime === "Easy") {
            this.timer = 50;
        } else if (levelTime === "Suck") {
            this.timer = 1000;
        } else if (levelTime === "Hard") {
            this.timer = 15;
        } else if (levelTime === "Painful_death") {
            this.timer = 2;
        } else {
            this.timer = 20;
        }
        view.showTimer(this.timer);
    },
    generateRandomMass: function (rightNumber) {
        let outArray = []; // массив, в котором будем хранить уникальные числа
        outArray[0] = rightNumber;
        let i = 1; // индекс для массива
        let countNum = 4; // количество нужных чисел
        let max = this.words.length - 1; // максимальное число
        let min = 0; // минимальное  число
        // цикл, пока не получим массив с уникальными числами

        while (i < countNum) {
            let chislo = Math.floor((Math.random() * max) + min); // генерим случайное число
            if (find(outArray, chislo) == 0) { // Проверяем уникальность числа.
                outArray[i] = chislo; // если уникальное, то заисываем его в массив
                i++;
            }

        }

        // проверяем вхождение в массив
        function find(array, value) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] == value) return 1;
            }
            return 0;
        }


        return outArray;
    },
    generateAnswers: function () {
        this.answers = [];
        this.rightAnswer = Math.floor(Math.random() * 4);
        console.log(this.rightAnswer);
        let randomMass = this.generateRandomMass(this.counterValue);
        let j = 1;
        for (let i = 0; i < 4; i++) {
            if (i === this.rightAnswer) {
                this.answers[i] = this.words[this.counterValue];
            } else {
                this.answers[i] = this.words[randomMass[j]];
                j++;
            }
        }
        console.log(this.answers);
    },
    decrementTimer: function () {
        this.timer--;
        view.showTimer(this.timer);
    },
    incrementTimer: function () {
        this.timer += 3;
        view.showTimer(this.timer);
    },
    addWrongWord: function () {
        this.wrongWords.push(this.words[this.counterValue - 1]);
    },
    countAnswer: function (check) {
        model.incrementCounter();
        model.setWords();
        if (check === true) {
            model.incrementTimer();
            view.trueGuess();
            this.counterRightAnswers++;
        }
        else {
            model.addWrongWord();
            view.falseGuess();
        }
    }

};
let controller = {
    timerId: null,
    nextWordClick: function () {
        model.incrementCounter();
    },
    selectCategory: function () {

        let selectedCategoty = $("select#words_category").val();
        model.initWords(selectedCategoty);
    },
    selectDifficultLevel: function () {

        let difficultLevel = $("select#test_level").val();
        model.setTimer(difficultLevel);

    },
    addLearners: function () {
        model.addLearnWord();
    },
    checkAnswer: function (buttonNumber) {
        if (model.counterValue === 0) {
            this.startTimer();
        }
        model.countAnswer(model.rightAnswer == buttonNumber)


    },
    startTimer: function () {

        this.timerId = setInterval(this.timerGo, 1000);

    },
    timerGo: function () {
        if (model.timer > 0) {
            model.decrementTimer();
        }
        if (model.timer <= 0) {
            alert("Лучше повтори слова");
            controller.stopTimer();
            controller.selectCategory();
            controller.selectDifficultLevel();
        }
    },
    stopTimer: function () {
        clearInterval(this.timerId);
    },
    initTest: function () {
        this.stopTimer();
        this.selectDifficultLevel();
        this.selectCategory();
        view.showTest();
    }


};
(function () {
    let app = {
        init: function () {

            //Изначальная инициализация выбранной категории
            controller.selectCategory();
            //Изначальная инициализация выбранной сложности
            controller.selectDifficultLevel();
            this.main();
            this.event();
        },
        main: function () {

        },
        event: function () {

            $(".rus").on('click', function (event) {
                let last = event.target.id.toString().slice(-1);
                controller.checkAnswer(last);

            });

            $("select#words_category").change(function () {
                controller.initTest();
            });
            $("select#test_level").change(function () {
                controller.initTest();
            });
            $("button#test_restart").click(function () {

                controller.initTest();
            });
            $(".wrongWord b").click(function () {
               view.showWrongWords();

            });

        }
    };
    app.init();
})();