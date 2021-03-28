$(document).ready(function(){ //導入頁淡入特效
    $(".JS").hide().fadeIn(1300);
    $(".NQ").hide().fadeIn(2200);

    $(".forHeader").load("header.html");//移植header

    $(".forFooter").load("footer.html");//移植footer

    // /*按鈕生成開始*/
    var num= 25;

    for(let i=1; i<=num; i++){
        $(".previews").append("<button id='JS"+ i +"' class='btn for_center'><img class='centered' src='images/house_JS"+ i +".jpg'></button>");
    }

    /*南郭路*/
    for(var i=1; i<=12; i++){ //A房間
        $(".roomA").append("<button id='NQ"+ i +"' class='btn for_center'><img class='NQ"+ i +"'centered' src='images/house_NQ"+ i +".jpg'></button>");
    }

    for(var i=13; i<=22; i++){ //B房間
        $(".roomB").append("<button id='NQ"+ i +"' class='btn for_center'><img class='NQ"+ i +"'centered' src='images/house_NQ"+ i +".jpg'></button>");
    }

    var bIDs = []
    $('.btn').each(function(){
        bIDs.push($(this).attr('id')) 
    })
    
    $(".btn").click(function(){ //推送指定的照片
        for(let i=0; i<=bIDs.length; i++){
            if($(this).attr('id') === bIDs[i]){
                $(".photos").append("<img tag='"+ bIDs[i] +"' class='centered slider' src='images/house_"+ bIDs[i] +".jpg' >");
                setBody();   
                return $("#dialog").show();
            }
        } 
    });

    function setBody(){
        if($('body').is('.modal_open')){
            $('body').removeClass('modal_open')
        }else{
           $('body').attr('class', 'modal_open'); 
        }
        
    }

    $(".close").click(function(){ //關閉
        $("#dialog").hide();
        setBody();
        $(".photos").empty();//移除照片
    });
    
    $("#right").click(function(){ //往右切換
        for(let i=0; i<= bIDs.length; i++){
            let tag = $('.slider').attr('tag');
            if(tag === bIDs[bIDs.length-1]){ //若為最後一張照片，則跳至第一張照片
                $(".photos").html("<img tag='"+ bIDs[0] +"' class='centered slider' src='images/house_"+ bIDs[0] +".jpg'>");
            }else if(tag === bIDs[i]){
                return $(".photos").html("<img tag='"+ bIDs[i+1] +"' class='centered slider' src='images/house_"+ bIDs[i+1] +".jpg'>");
            }
        }    
    });

    $("#left").click(function(){ //往左切換
        for(let i=0; i<= bIDs.length; i++){
            let tag = $('.slider').attr('tag');
            if(tag === bIDs[0]){ //若為第一張照片，則跳至最後一張照片
                $(".photos").html("<img tag='"+ bIDs[bIDs.length-1] +"' class='centered slider' src='images/house_"+ bIDs[bIDs.length-1] +".jpg'>");
            }else if(tag === bIDs[i]){
                return $(".photos").html("<img tag='"+ bIDs[i-1] +"' class='centered slider' src='images/house_"+ bIDs[i-1] +".jpg'>");
            }
        }    
    });
});