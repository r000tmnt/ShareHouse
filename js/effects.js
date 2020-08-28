$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    // $(".btn").click(function(){ //開啟指定的房間資料頁面 需修改
        
    //     if($(this).is('.A')){
    //         $("#dialog, .room_a").show();
    //     }
    //     else if($(this).is('.B')){
    //         $("#dialog, .room_b").show();
    //     }
    //     else if($(this).is('.C')){
    //         $("#dialog, .room_c").show();
    //     }
    //     else if($(this).is('.D')){
    //         $("#dialog, .room_d").show();
    //     }
    // });

    // $(".close").click(function(){ //關閉
    //     $("#dialog, .room").hide();
    // });

       /*按鈕生成開始*/
        var num= 25;
        var source= "../images/house_JS";

        for(var i=1; i<=num; i++){
            $(".img_preview").append("<button class='btn'><a><img></a></button>");
        } 
        // var setnum= [], j, split;
        // for(j=1; j<=num; j++){
        //     split = ('0'+j).slice(-2);
        //     setnum.push(split);
        //     console.log(setnum);
        // }

        var k;
        var l;
        for(k=0; k<=2; k++){
            for(l=1; l<=9; l++){
                $("button > a img").attr('src', source + k + l +'.jpg');
            }
        }

});