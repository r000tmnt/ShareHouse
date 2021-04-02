$(document).ready(function(){
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $("a > img").css({
        width: window.innerWidth,
        height: window.innerHeight,
        objectFit: "cover"
    });
})