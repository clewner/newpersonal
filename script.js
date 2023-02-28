window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    frame = 1;
}

$(document).ready(function(){


    var winH = $(window).height();
    var winW = $(window).width();

    console.log(winH);
    console.log(window.innerHeight);
    /*Stars*/
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
    /*stars end*/

    var canva = document.getElementById('codingbackground');
    var ctx = canva.getContext('2d');
    
    const ratio = Math.ceil(window.devicePixelRatio);
    canva.width = winW;
    canva.height = winH * 2;

    var matrix = "10";
    matrix = matrix.split("");
    

    var columnratio;
    var rowratio;
    /*1470 max width*/


    
    font_size = 15;

    ctx.fillStyle = "rgba(0,255,65,1)";
    ctx.font = "1em Courier New, Courier, monospace";

    
    
    columnratio = winW/15;
    rowratio = winH*2/15;
    
    ctx.textAlign = "center";

    var columns = canva.width/columnratio;
    var rows = canva.height/rowratio;
    
   
    for(var i = 0; i<columnratio + 1; i++){
        for(var j = 0; j<rowratio; j++){
            var text = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(text, i * columns, j * rows);
        }
    }
    

    /*ctx.fillRect(0, 0, canva.width, canva.height/4);*/
    var grd = ctx.createLinearGradient(canva.width/2, 0, canva.width/2, canva.height);
    grd.addColorStop(0, "rgba(0,0,0,1)");
    grd.addColorStop(0.4, "rgba(0,0,0,0.3)");
    grd.addColorStop(0.6, "rgba(0,0,0,0.3)");
    grd.addColorStop(1, "rgba(0,0,0,1)");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canva.width,canva.height);



    
      
    

    
    
    var lastScrollTop = 0;
    
    $(window).on('scroll', function() {
        
      
        var pos = $(window).scrollTop();
        
        
        if(pos > winH){
            
            $(".secondscreen").setAttribute("data-aos", "");
            
            
        }else{
            $(".secondscreen").setAttribute("data-aos", "fade-left");
        }
        if(pos < winH * 2 ){
            
            $('#changertextone').css({"transform" : "translateY(0px)"});
            $('#changertextone').css("opacity", "1");
            $('#changertexttwo').css("opacity", "0");
        }
    
        if (pos > winH * 2 && pos < winH * 2.5){
            

                
                var addition = 300 - 300 * (pos - winH * 2)/(winH * 2.5 - winH * 2);
                var subtraction = -300 * (pos - winH * 2)/(winH * 2.5 - winH * 2);
                var opacitysubtraction = 1 - (pos - winH * 2)/(winH * 2.5 - winH * 2);
                var opacityaddition = (pos - winH * 2)/(winH * 2.5 - winH * 2);
                
                
                $('#changertextone').css("opacity", opacitysubtraction);
                $('#changertexttwo').css("opacity", opacityaddition);
                $('#changertextone').css({"transform" : "translateY(" + subtraction + "px)"});
                $('#changertexttwo').css({"transform" : "translateY(" + addition + "px)"});

            
        }
        if(pos > winH*2.5){
            
            $('#changertextone').css("opacity", "0");
            $('#changertexttwo').css({"transform" : "translateY(0px)"});
            
        }
        
        lastScrollTop = pos;
    
    });

});


 
