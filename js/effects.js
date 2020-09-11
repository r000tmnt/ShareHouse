$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(".forHeader").load("header.html");//移植header

    $(".forFooter").load("footer.html");//移植footer


    // /*按鈕生成開始*/
    var num= 25;
    var tag= "#JS";
    //('0' + i).slice(-2) 產生圖尾端數字01,02,03....25

    for(var i=1; i<=num; i++){
        $(".previews").append("<a class='JS"+ i +"' href='"+ tag+ i +"'><button class='btn for_center'><img class='centered' src='images/house_JS"+ ('0' + i).slice(-2)+".jpg'></button></a>");
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

    $(".enlarge").append("<div class='hint'></div>");//產生提示文字的位置
    $(".hint").html("點圖看下一張");


    /*南郭路*/
    for(var i=1; i<=12; i++){ //A房間
        tag= "#NQ";
        $(".roomA").append("<a class='NQ"+ i +"' href='"+ tag+ i +"'><button class='btn for_center'><img class='centered' src='images/house_NQ"+ ('0' + i).slice(-2)+".jpg'></button></a>");
    }

    for(var i=13; i<=22; i++){ //B房間
        tag= "#NQ";
        $(".roomB").append("<a class='NQ"+ i +"' href='"+ tag+ i +"'><button class='btn for_center'><img class='centered' src='images/house_NQ"+ ('0' + i).slice(-2)+".jpg'></button></a>");
    }

      /*塞照片到div.photo_NQ*/
      for(var i=1; i<=(num-3); i++){
        $(".photo_NQ").append("<img id='NQ"+ i +"' class='centered slider' src='images/house_NQ"+ ('0' + i).slice(-2) +".jpg' >"); 
    }

    $("a").click(function(){ //打開指定的照片
        for(var i=1; i<=(num-3); i++){
            if($(this).is(".NQ"+i)){
                $("#dialog, #NQ"+i).show();
            }
        }
    });

    $(".slider").click(function(){ //改為點照片換下一張
        var i;//從1開始對應照片ID
        
        for(var i=1; i<=(num-3); i++){
            if($(this).is("#NQ"+i)){
             $("#NQ"+(i+1)).show();
             $("#NQ"+i).hide();
            }else if($(this).is("#NQ22")){ //若為最後一張照片，則跳至第一張照片
                $("#NQ1").show();
                $("#NQ22").hide();
            }
        }    
    });

});