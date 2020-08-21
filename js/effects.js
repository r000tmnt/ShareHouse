$(document).ready(function(){
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);
});

function popUp(){
    var box= document.getElementById('dialog');
    box.style.display="block";
}

function close(){
    var close= document.getElementsByClassName('dialog');
    close.style.display= "none";
}