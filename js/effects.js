$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(".btn").click(function(){ //開啟指定的房間資料頁面
        var btn= $(".btn");

        if(btn.hasClass('A')){
                $("#dialog").show(),
                $("div.A").show();
               }
               else if(btn.hasClass('B')){
                $("#dialog").show(),
                $("div.B").show();
               }
               else if(btn.hasClass('C')){
                $("#dialog").show(),
                $("div.C").show();    
               }
               else if(btn.hasClass('D')){
                $("#dialog").show(),
                $("div.D").show();
               }

    });

    $(".close").click(function(){ //關閉
        $("#dialog").hide();
    });
});