$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(".btn").click(function(){ //開啟指定的房間資料頁面
        
        if($(this).is('.A')){
            $("#dialog, .room_a").show();
        }
        else if($(this).is('.B')){
            $("#dialog, .room_b").show();
        }
        else if($(this).is('.C')){
            $("#dialog, .room_c").show();
        }
        else if($(this).is('.D')){
            $("#dialog, .room_d").show();
        }
    });

    $(".close").click(function(){ //關閉
        $("#dialog, .room").hide();
    });
});