$(document).ready(function(){
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);
});

// var box= document.getElementById('dialog');

// function popUp(){
//     box.style.display="block";
// }

// function close(){
//     box.style.display= "none";
// }

$(".btn").click(function(){
    $("#dialog").show();
});

$(".close").click(function(){
    $(".contain").parent().hide();
});