$(document).ready(function(){

    
    
    var lastScrollTop = 0;
    var winH = $(window).height();
    $(window).on('scroll', function() {
        
      
        var pos = $(window).scrollTop();

        if(pos > winH){
            if(!($("#secondscreen").hasClass("fixed"))){
                $("#secondscreen").addClass("fixed");
            }
            
        }else{
            if($("#secondscreen").hasClass("fixed")){
                $("#secondscreen").removeClass("fixed");
            }
        }
        if(pos < winH * 3 ){
            $('changertextone').css("opacity", "0");
            $('changertexttwo').css("opacity", "0");
        }
    
        if (pos > winH * 3 && pos < winH * 4){

                
                var addition = 75 - 75 * (pos - winH * 3)/(winH * 4 - winH * 3);
                var subtraction = -75 * (pos - winH * 3)/(winH * 4 - winH * 3);
                var opacitysubtraction = 1 - (pos - winH * 3)/(winH * 4 - winH * 3);
                var opacityaddition = (pos - winH * 3)/(winH * 4 - winH * 3);
                console.log(addition);
                
                $('#changertextone').css("opacity", opacitysubtraction);
                $('#changertexttwo').css("opacity", opacityaddition);
                $('#changertextone').css({"transform" : "translateY(" + subtraction + "%)"});
                $('#changertexttwo').css({"transform" : "translateY(" + addition + "%)"});

            
        }else if(pos > winH*4){
            $('changertextone').css("opacity", "0");
        }
        
        lastScrollTop = pos;
    
    });

});