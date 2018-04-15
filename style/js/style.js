$(document).ready(function(){
    // Contact navbar scrolls to the footer
    $("#contact").click(function(event){
        $('html,body').animate({
        scrollTop: $("#footer").offset().top
        });
    });
});