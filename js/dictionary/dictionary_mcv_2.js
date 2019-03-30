let view = {
    showWords: function (parentNode) {
        $(parentNode).find(".word_list").css('display', 'flex');
    },

    hideWords: function (parentNode) {
        $(parentNode).find(".word_list").hide();
    },
    showCategories:function(parentNode){
        $(parentNode).find(".users_categories").show("slow");
        $(parentNode).find(".add_words").show("slow");
    },
    hideCategories:function(parentNode){
        $(parentNode).find(".users_categories").hide();
        $(parentNode).find(".add_words").hide();
    },





};
let model = {};
let controller = {

    showHideMyCategories: function (target) {

        if ($(target.parentNode).find(".add_words").css('display') !== 'none') {
            view.hideCategories(target.parentNode);
        }else{
            view.showCategories(target.parentNode);
        }

    },
    showHideMyWords: function (target) {
        if ($(target.parentNode).find(".word_list").css('display') !== 'none') {
            view.hideWords(target.parentNode);
        } else {

            view.showWords(target.parentNode);
        }
    }


};
(function () {
    let app = {
        init: function () {

            this.main();
            this.event();
        },
        main: function () {

        },
        event: function () {
            $(".word_own").click(function (e) {
                controller.showHideMyCategories(e.target);
            });

            $(".word_category").click(function (e) {
                controller.showHideMyWords(e.target);
            });

        }


    };
    app.init();
})();