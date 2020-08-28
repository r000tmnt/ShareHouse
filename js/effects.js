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


    var current= $(".slider");//當前照片
    $(".toleft").click(function(){//照片往左切換的判斷
       current.hide();
       current.prev().show();
       
    //    if( current.is("#JS1")){//當位置在第一張照片時，前一張為最後一張
    //        $("#JS25").show();
    //    }
    });

    $(".toright").click(function(){//照片往右切換的判斷
        current.hide();
        current.next().show();
       
    //    if( current.is("#JS25")){//當位置在第一張照片時，前一張為最後一張
    //        $("#JS1").show();
    //    }
    });    

   

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