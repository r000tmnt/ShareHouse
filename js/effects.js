$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

        $(".forHeader").load("header.html");//移植header

        $(".forFooter").load("footer.html");//移植footer

    // $("a").click(function(){ //開啟指定的房間資料頁面 需修改

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

    /*按鈕生成開始*/
    var num= 25;
    var tag= "#JS";
    //('0' + i).slice(-2) 產生圖尾端數字01,02,03....25

    for(var i=1; i<=num; i++){
        $(".img_preview").append("<a class='JS"+ i +"' href='"+ tag+ i +"'><button class='btn for_center'><img class='centered' src='images/house_JS"+ ('0' + i).slice(-2)+".jpg'></button></a>");
    }
    /*按鈕生成結束*/
    
    /*塞照片到div.photos*/
    for(var i=1; i<=num; i++){
        $(".photos").append("<img id='JS"+ i +"' class='centered slider' src='images/house_JS"+ ('0' + i).slice(-2) +".jpg' >"); 
    }
    

    $("a").click(function(){ //開啟指定的照片 修改版
        for(var i=1; i<=num; i++){
            if($(this).is(".JS"+i)){
             $("#dialog, #JS"+i).show();
            }
        }    
    });

    $(".close").click(function(){ //關閉
        $("#dialog, .slider").hide();
    });
    
    // var imgID= Array.from(Array(26).keys()); //產生0~25的陣列，從1開始對應照片ID
    // console.log(imgID);

    $(".slider").click(function(){ //改為點照片換下一張
        var i;//從1開始對應照片ID
        
        for(var i=1; i<=num; i++){
            if($(this).is("#JS"+i)){
             $("#JS"+(i+1)).show();
             $("#JS"+i).hide();
            }else if($(this).is("#JS25")){ //若為最後一張照片，則跳至第一張照片
                $("#JS1").show();
                $("#JS25").hide();
            }
        }    
    });

    $(".photos").append("<div class='hint'></div>");//產生提示文字的位置
    $(".hint").html("點圖看下一張");

    // $(".toleft").click(function(){
    //     var i;//從1開始對應照片ID
        
    //         if(i < num && i > 1){
    //            i= i-1;
    //         }else{
    //             i=num;
    //         }
    //         $(".slider, #JS"+i).show();

    // });

    // $(".toright").click(function(){
    //     var i;//從1開始對應照片ID
        
    //         if(i < num){
    //             i= i+1;
    //         }else{
    //             i= 1;
    //         }
    //         $(".slider, #JS"+i).show();

    // });

});