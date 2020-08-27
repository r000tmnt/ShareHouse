$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(function(){//移植header
        $(".forHeader").load("header.html");
    });

    $(function(){//移植footer
        $(".forFooter").load("footer.html");
    });

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
        var source= "images/house_JS";
        var tag= "#JS";

        // for(var i=1; i<=num; i++){
        //     $(".img_preview").append("<button class='btn'><a><img></a></button>");
        // } 

        for(var i=1; i<=num; i++){
            $(".img_preview").append("<a href='"+ tag+ i +"'><button class='btn for_center'><img class='centered' src='"+ source + ('0' + i).slice(-2)+".jpg'></button></a>");
        } 
        

        // var preset= Array.from(Array(26).keys());//產生 00 ~ 25的陣列
        // console.log(preset);

        // for(var i=0; i < 10; i++){ //更改小於10的位置。前面加上"0"
        //     preset[i]= "0" + preset[i];
        // }
        // console.log(preset);
        
        // var setnum= [], j, split; 
        // for(j=1; j<=num; j++){ //產生圖尾端數字01,02,03....25
        //     split = ('0'+j).slice(-2); //保留兩個數字
        //     setnum.push(split);
        //     console.log(setnum);
        // }

        // for(var k=0; k<setnum.length; k++){ //取出上列產生的數字  放到路徑尾端
        //     console.log(setnum[k]);
        //     $("button > a > img").attr('src', source + setnum[k] +'.jpg');
        // }

        // setnum.forEach((nums)=>{ //取出上列產生的數字  放到路徑尾端
        //     console.log(nums);
        //     $("button > a > img").attr('src', source + nums +'.jpg');
        // });

});