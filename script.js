$(document).ready(function(){
    var STAR_COLOURS = ["#ffffff", "#ffe9c4", "#d4fbff"]; 
    var HEIGHT = 3 * $(window).height();
    var WIDTH = $(window).width(); 

    function random (min, max) {
        return Math.round((Math.random() * max - min) + min);
    }


    function star_field (context, star_number) {
        var x, y, brightness, radius; 

        context.fillStyle = "#000";
        context.fillRect(0, 0, WIDTH, HEIGHT);

        

        for (var i = 0; i < star_number; i++) {
            x = Math.random() * WIDTH;
            y = Math.random() * HEIGHT;
            radius = Math.random() * HEIGHT/750;
            brightness = random(80, 100) / 100;

            context.beginPath();
            context.globalAlpha = brightness;
            context.fillStyle = STAR_COLOURS[random(0, STAR_COLOURS.length)];
            context.arc(x, y, radius, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
        }


    }


    function init () {
        var canvas = document.getElementById('philosophybackground'),
        context = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        star_field(context, 300);
    }

    init();

    
    
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





// GO, GO, GO!
