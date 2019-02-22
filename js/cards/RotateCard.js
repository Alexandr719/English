
$('.card').click(function(event){
    if(!(event.target ==$('.fa')[0])){

        $(this).toggleClass('flipped');
    }

});
$('html').keydown(function(e){ //отлавливаем нажатие клавиш
    if (e.which === 32 ) {

        $('.card').toggleClass('flipped');
    }

});