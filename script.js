$(document).ready(function(){

    
    
    var lastScrollTop = 0;
    var winH = $(window).height();
    $(window).on('scroll', function() {
        
      
        var pos = $(window).scrollTop();

        if(pos > winH){
            console.log("weirdo")
            if(!($("#secondscreen").hasClass("fixed"))){
                $("#secondscreen").addClass("fixed");
            }
            
        }else{
            if($("#secondscreen").hasClass("fixed")){
                $("#secondscreen").removeClass("fixed");
            }
        }
        if(pos < winH * 2 ){
            
            
            $('#changertexttwo').css("opacity", "0");
        }
    
        if (pos > winH * 2 && pos < winH * 3){
            

                
                var addition = 300 - 300 * (pos - winH * 2)/(winH * 3 - winH * 2);
                var subtraction = -300 * (pos - winH * 2)/(winH * 3 - winH * 2);
                var opacitysubtraction = 1 - (pos - winH * 2)/(winH * 3 - winH * 2);
                var opacityaddition = (pos - winH * 2)/(winH * 3 - winH * 2);
                console.log(addition);
                
                $('#changertextone').css("opacity", opacitysubtraction);
                $('#changertexttwo').css("opacity", opacityaddition);
                $('#changertextone').css({"transform" : "translateY(" + subtraction + "px)"});
                $('#changertexttwo').css({"transform" : "translateY(" + addition + "px)"});

            
        }
        if(pos > winH*3){
            
            $('#changertextone').css("opacity", "0");
            
        }
        
        lastScrollTop = pos;
    
    });

});