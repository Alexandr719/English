
$('.card').click(function(event){
    if(!(event.target ==$('.fa-volume-move')[0])){

        $(this).toggleClass('flipped');
    }

});