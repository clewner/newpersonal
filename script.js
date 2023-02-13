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
    
        /*if (pos > winH * 2 && pos < winH * 3){
            if(lastScrollTop > lastScrollTop){
                pos
                $('changertextone').css("opacity",)
            }
            
        }
        lastScrollTop = pos;*/
    
    });

});