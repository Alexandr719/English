
$('.card').click(function(event){
    if(!(event.target ==$('.fa')[0])){

        $(this).toggleClass('flipped');
    }

});