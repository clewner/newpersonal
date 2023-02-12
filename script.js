$(document).ready(function(){



    var canvas = document.getElementById('space_box');
    var c = canvas.getContext('2d');





    var innerWidth = window.innerWidth - 20,
        innerHeight = window.innerHeight - 20,
        radius = 1,
        starsIndex = 0,
        stars = [],
        TWO_PI = Math.PI*2,
        centerX = innerWidth/2,
        centerY = innerHeight/2,
        focalLength = innerWidth - 20,
        starRadius = null,
        starX = null,
        starY = null,
        numStars = 250;

        canvas.width = innerWidth;
        canvas.height = innerHeight;
        
        
    // Move the stars with mouse pointer



    // Zoom in/out into the Space on mouse scroll


        
    // Function for create new start
    function star(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.radius = radius;
        this.color = "#fff";
        starsIndex++;
        stars[starsIndex] = this;
        
        this.id = starsIndex;
        
        // Animate Stars
        this.update = function(){
            
            starX = (this.x - centerX) * (focalLength / this.z) + centerX;
            
            starY = (this.y - centerY) * (focalLength / this.z) + centerY;
            
            starRadius = radius * (focalLength / this.z);
            
            
            
            this.z += -3;
            
            if(this.z <= 0){
                this.z = parseInt(innerWidth);
            }
            
            this.draw();

            /* STAR RADIUS IS FUCKING */
        
        }

        this.unupdate = function(){
            

            this.z += 10;
            
            starX = (this.x - centerX)/(focalLength/this.z) + centerX;
            starY = (this.y - centerY)/(focalLength/this.z) + centerY;
            

            starRadius = radius * this.z/focalLength;
            
            
            
            this.draw();
            
        }
        
        // Function for draw star
        this.draw = function(){
            
            console.log(starX);
            c.beginPath();
            c.arc(starX,starY,starRadius, TWO_PI, false);
            
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
            console.log(starX);
        }
        
    }	

    // X,Y,Z values
    var s;
    for(s = 0; s < numStars; s++){
        x = Math.random() * canvas.width/5 + canvas.width * 0.4;
        y = Math.random() * canvas.height/5 + canvas.height * 0.4;
        z = Math.random() * innerWidth;
        new star(x,y,z);
    }

    // Function for animate canvas objects
    var lastScrollTop = 0;
    var winH = $(window).height();
    $(window).on('scroll', function() {
        
      
        var pos = $(window).scrollTop();
    
        if (pos > $('#opening').offset().top - $('#opening').outerHeight()){
            if(pos > lastScrollTop){
                c.fillStyle = "#000";
                c.fillRect(0,0,innerWidth,innerHeight);
                
                for( var i in stars){
                stars[i].update();
                }

            }else{
                c.fillStyle = "#000";
                c.fillRect(0,0,innerWidth,innerHeight);
                for( var i in stars){
                stars[i].update();
                }
                
            }
            lastScrollTop = pos;
        }

        if(pos > winH * 3){
            if(pos < winH * 3.5){

            }
            document.getElementById("appear").style.display = "block";
        }else{
            document.getElementById("appear").style.display = "none";
        }
    
    });
    
});


