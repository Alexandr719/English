function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('profile-menu').style.width = '0';
}


$("#navbar_user_profile").click(function () {
    document.getElementById('profile-menu').style.width = '350px';


});



$('#href_lib').on('click', function(){
    $( "#content" ).load( "/pages/library/lib.html");
    $("#main").hide();
});