window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    frame = 1;
}

$(document).ready(function(){
    var winH = $(window).height();
    var winW = $(window).width();
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
    canva.width = winW * ratio;
    canva.height = winH * 2 * ratio;

    var matrix = "10";
    matrix = matrix.split("");
    

    var columnratio;
    var rowratio;
    /*1470 max width*/

    ctx.fillStyle = '#FFFFFF';
    console.log(winW);
    if(winW<370){
        ctx.font = "3vw Arial";
        columnratio = 100;
        rowratio = 200;
    }else if(winW < 500){
        ctx.font = "2vw Arial";
        columnratio = 100;
        rowratio = 200;

    }else if(winW < 700){
        ctx.font = "2vw Arial";
        columnratio = 100;
        rowratio = 150;
    }else if(winW < 800){
        ctx.font = "2vw Arial";
        columnratio = 100;
        rowratio = 150;
    }else if(winW < 1000){
        ctx.font = "2vw Arial";
        columnratio = 100;
        rowratio = 150;

    }else{
        ctx.font = "2vw Arial";
        columnratio = 150;
        rowratio = 100;
    }

    
    ctx.textAlign = "left";

    var columns = canva.width/columnratio;
    var rows = canva.height/rowratio;
    
   
    for(var i = 0; i<columnratio; i++){
        for(var j = 0; j<rowratio; j++){
            var text = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(text, i * columns, j * rows);
        }
    }

    
      
    

    
    
    var lastScrollTop = 0;
    
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
            
        }
        
        lastScrollTop = pos;
    
    });

});


