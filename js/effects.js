$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(".forHeader").load("header.html");//移植header

    $(".forFooter").load("footer.html");//移植footer

    // /*按鈕生成開始*/
    var num= 25;
    //('0' + i).slice(-2) 產生圖尾端數字01,02,03....25

    for(let i=1; i<=num; i++){
        $(".previews").append("<button id='JS"+ i +"' class='btn for_center'><img class='centered' src='images/house_JS"+ ('0' + i).slice(-2)+".jpg'></button>");
    }

    /*南郭路*/
    for(var i=1; i<=12; i++){ //A房間
        tag= "#NQ";
        $(".roomA").append("<button id='NQ"+ i +"' class='btn for_center'><img class='NQ"+ i +"'centered' src='images/house_NQ"+ ('0' + i).slice(-2)+".jpg'></button>");
    }

    for(var i=13; i<=22; i++){ //B房間
        tag= "#NQ";
        $(".roomB").append("<button id='NQ"+ i +"' class='btn for_center'><img class='NQ"+ i +"'centered' src='images/house_NQ"+ ('0' + i).slice(-2)+".jpg'></button>");
    }
    
    $("button").click(function(){ //推送指定的照片
        for(let i=1; i<=num; i++){
            if($(this).is("#JS"+i)){
                $(".photos").append("<img tag='JS"+ i +"' class='centered slider' src='images/house_JS"+ ('0' + i).slice(-2) +".jpg' >");   
                $("#dialog").show();
            }

            if($(this).is("#NQ"+i)){
                $(".photos").append("<img tag='NQ"+ i +"' class='centered slider' src='images/house_NQ"+ ('0' + i).slice(-2)+".jpg'>");   
                $("#dialog").show();                    
            }
        }    
    });

    $(".close").click(function(){ //關閉
        $(".photos").empty();//移除照片
        $("#dialog").hide();
    });
    
    $("#right").click(function(){ //改為點照片換下一張
        for(let i=1; i<=num; i++){
            let tag = $('.slider').attr('tag');
            if(tag === 'JS'+num){ //若為最後一張照片，則跳至第一張照片
                $(".photos").html("<img tag='JS1' class='centered slider' src='images/house_JS01.jpg'>");
            }else if(tag === 'JS'+i){
                return $(".photos").html("<img tag='JS"+ (i+1) +"' class='centered slider' src='images/house_JS"+ ('0' + (i+1)).slice(-2)+".jpg'>");
            }

            if(tag === 'NQ'+ (num-3)){ //若為最後一張照片，則跳至第一張照片
                $(".photos").html("<img tag='NQ1' class='centered slider' src='images/house_NQ01.jpg'>");
            }else if(tag === 'NQ'+i){
                return $(".photos").html("<img tag='NQ"+ (i+1) +"' class='centered slider' src='images/house_NQ"+ ('0' + (i+1)).slice(-2)+".jpg'>");
            }
        }    
    });

    $("#left").click(function(){ //改為點照片換下一張
        for(let i=1; i<=num; i++){
            let tag = $('.slider').attr('tag');
            if(tag === 'JS1'){ //若為最後一張照片，則跳至第一張照片
                return $(".photos").html("<img tag='JS"+num+"' class='centered slider' src='images/house_JS"+num+".jpg'>");
            }else if(tag === 'JS'+i){
                return $(".photos").html("<img tag='JS"+ (i-1) +"' class='centered slider' src='images/house_JS"+ ('0' + (i-1)).slice(-2)+".jpg'>");
            }

            if(tag === 'NQ1'){ //若為最後一張照片，則跳至第一張照片
                return $(".photos").html("<img tag='NQ"+(num-3)+"' class='centered slider' src='images/house_NQ"+(num-3)+".jpg'>");
            }else if(tag === 'NQ'+i){
                return $(".photos").html("<img tag='NQ"+ (i-1) +"' class='centered slider' src='images/house_NQ"+ ('0' + (i-1)).slice(-2)+".jpg'>");
            }
        }    
    });
});