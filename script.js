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
    
    

    function random (min, max) {
        return Math.round((Math.random() * max - min) + min);
    }


    


    function philosophy () {
        var STAR_COLOURS = ["#ffffff", "#ffe9c4", "#d4fbff"]; 
        var HEIGHT = 1.5 * $(window).height();
        var WIDTH = $(window).width();
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
        var canvas = document.getElementById('philosophybackground'),
        context = canvas.getContext('2d');
        
        context.fillRect(0,0,canvas.width,canvas.height);
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        star_field(context, 300);
        var grd = context.createLinearGradient(canvas.width/2, 0, canvas.width/2, canvas.height);
        grd.addColorStop(0, "rgba(0,0,0,1)");
        grd.addColorStop(0.25, "rgba(0,0,0,0.3)");
        grd.addColorStop(0.75, "rgba(0,0,0,0.3)");
        grd.addColorStop(1, "rgba(0,0,0,1)");

        context.fillStyle = grd;
    }

    
    /*stars end*/
    function coding(){
        var canva = document.getElementById('codingbackground');
        var ctx = canva.getContext('2d');
        
        const ratio = Math.ceil(window.devicePixelRatio);
        canva.width = winW;
        canva.height = winH * 1.5;
    
        var matrix = "10";
        matrix = matrix.split("");
        
    
        var columnratio;
        var rowratio;
        /*1470 max width*/
    
    
        
        font_size = 15;
    
        ctx.fillStyle = "rgba(0,255,65,1)";
        ctx.font = "1em Courier New, Courier, monospace";
    
        
        
        columnratio = winW/15;
        rowratio = winH * 1.5/15;
        
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
        grd.addColorStop(0.25, "rgba(0,0,0,0.3)");
        grd.addColorStop(0.75, "rgba(0,0,0,0.3)");
        grd.addColorStop(1, "rgba(0,0,0,1)");
    
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,canva.width,canva.height);
        
    }
    

    
    

    function writing(){
        var canvas = document.getElementById('writingbackground');
        var ctx = canvas.getContext('2d');
    
        // Enable high DPI support
        var devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = winW;
        canvas.height = winH * 1.5;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    
        // Word bank
        var words = ["story", "novel", "book", "pen", "write", "literature", "words", "imagination", "creativity", "inspiration"];
    
        // Base font size, based on a minimum size and screen size
        var screenDiagonal = Math.sqrt(winW * winW + winH * winH);
        var baseFontSize = Math.max(16, screenDiagonal * 0.015);  // Adjust this proportion as necessary
    
        // Number of words to display, increase it for smaller screens
        var wordCount = Math.floor(Math.max(winW, winH) * 0.02);  // Slight increase here
    
        // Draw words at random positions
        for (var i = 0; i < wordCount; i++) {
            var word = words[Math.floor(Math.random() * words.length)];
            var fontSize = baseFontSize * (0.75 + Math.random() * 0.5);  // Add some randomness to size
            ctx.font = fontSize + 'px Brush Script MT';
    
            var x = Math.floor(Math.random() * canvas.width / devicePixelRatio);
            var y = fontSize + Math.floor(Math.random() * (canvas.height / devicePixelRatio - 2 * fontSize));
    
            // Calculate opacity based on y position
            var opacity = 1 - Math.pow(Math.abs(canvas.height / devicePixelRatio / 2 - y) / (canvas.height / devicePixelRatio / 2), 2);
            ctx.fillStyle = 'rgba(173, 216, 230, ' + opacity + ')';
    
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate((Math.random() - 0.5) * Math.PI / 6); // Rotate up to 30 degrees
            ctx.fillText(word, 0, 0);
            ctx.restore();
        }
    }

    /*
    var svgs = [
            "data:image/svg+xml;utf8,<svg stroke='rgb(144, 238, 144)' fill='rgb(144, 238, 144)' stroke-width='0' viewBox='0 0 640 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z'></path></svg>",
            'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg>',
            'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>',
            'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>',
            'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>',
            'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"></path></svg>'
        ];
     */   

        function humanitarian(){
            var canvas = document.getElementById('humanitarianbackground');
            var ctx = canvas.getContext('2d');
        
            // Enable high DPI support
            var devicePixelRatio = window.devicePixelRatio || 1;
            canvas.width = winW;
            canvas.height = winH * 1.5;
            
        
            // SVG sources
            var svgs = [
                "data:image/svg+xml;utf8,<svg stroke='rgb(144, 238, 144)' fill='rgb(144, 238, 144)' stroke-width='0' viewBox='0 0 640 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z'></path></svg>",
                'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg>',
                'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>',
                'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>',
                'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>',
                'data:image/svg+xml;utf8,<svg stroke="rgb(144, 238, 144)" fill="rgb(144, 238, 144)" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"></path></svg>'
            ];
        
            // Create image objects for each SVG
            var images = svgs.map(function(svg) {
                var img = new Image();
                img.src = svg;
                return img;
            });
        
            var loadedImagesCount = 0;
            images.forEach(function(img) {
                img.onload = function() {
                    loadedImagesCount++;
                    if (loadedImagesCount === images.length) {
                        createAndDrawIcons();
                    }
                };
            });
        
            function createAndDrawIcons() {
                // Icon parameters based on screen size
                var minSize = Math.max(canvas.width * 0.04, 30);  // 1% of screen width
                var maxSize = Math.max(canvas.width * 0.07, 40);  // 2% of screen width
                var rotationVariance = 360;
                var opacity = 0.7;
            
                // Set how many icons you want to draw
                var numIcons = 50;
            
                // Create and draw icons
                for (var i = 0; i < numIcons; i++) {
                    // Choose a random image
                    var img = images[Math.floor(Math.random() * images.length)];
            
                    // Calculate size and position
                    var size = minSize + Math.random() * (maxSize - minSize);
                    var posX = Math.random() * (canvas.width - size);
                    var posY = Math.random() * (canvas.height - size);
            
                    // Calculate opacity
                    var distanceFromCenter = Math.abs(canvas.height / 2 - posY);
                    var opacityMod = 1 - (distanceFromCenter / (canvas.height / 2));
                    var finalOpacity = opacity * opacityMod;
            
                    // Set rotation
                    var rotation = Math.random() * rotationVariance;
            
                    // Save context state, translate, rotate, draw image, then restore state
                    ctx.save();
                    ctx.translate(posX + size / 2, posY + size / 2);
                    ctx.rotate(rotation * Math.PI / 180);
                    ctx.globalAlpha = finalOpacity;
                    ctx.drawImage(img, -size / 2, -size / 2, size, size);
                    ctx.restore();
                }
            }
            
        }


    
       

    
    
    writing();
    coding();
    philosophy();
    humanitarian();
    
    

    
    
    var lastScrollTop = 0;
    
    $(window).on('scroll', function() {
        
      
        var pos = $(window).scrollTop();
        
        
        if(pos > winH){
            
            $(".secondallcontain").attr("data-aos", "");
            
            
        }else{
            $(".secondallcontain").attr("data-aos", "fade-left");
            
        }

        var startpos = 1.5;
        var endpos = 2;

        var secondstartpos = 3;
        var secondendpos = 3.5;

        var thirdstartpos = 4.5;
        var thirdendpos = 5;


        if(pos < winH * startpos ){
            
            $('#changertextone').css({"transform" : "translateY(0px)"});
            $('#changertextone').css("opacity", "1");
            $('#changertexttwo').css("opacity", "0");
            $('#changertextthree').css("opacity", "0");
        }else if (pos > winH * startpos && pos < winH * endpos){
            

                
                var addition = 300 - 300 * (pos - winH * startpos)/(winH * endpos - winH * startpos);
                var subtraction = -300 * (pos - winH * startpos)/(winH * endpos - winH * startpos);
                var opacitysubtraction = 1 - (pos - winH * startpos)/(winH * endpos - winH * startpos);
                var opacityaddition = (pos - winH * startpos)/(winH * endpos - winH * startpos);
                
                
                $('#changertextone').css("opacity", opacitysubtraction);
                $('#changertexttwo').css("opacity", opacityaddition);
                $('#changertextone').css({"transform" : "translateY(" + subtraction + "px)"});
                $('#changertexttwo').css({"transform" : "translateY(" + addition + "px)"});
                $('#changertextthree').css("opacity", "0");
            
        }else if(pos > winH*endpos && pos < winH  * secondstartpos){
            
            $('#changertextone').css("opacity", "0");
            $('#changertexttwo').css({"transform" : "translateY(0px)"});
            $('#changertextthree').css("opacity", "0");
            
        
        }else if (pos > winH * secondstartpos && pos < winH * secondendpos){
            

                
                var addition = 300 - 300 * (pos - winH * secondstartpos)/(winH * secondendpos - winH * secondstartpos);
                var subtraction = -300 * (pos - winH * secondstartpos)/(winH * secondendpos - winH * secondstartpos);
                var opacitysubtraction = 1 - (pos - winH * secondstartpos)/(winH * secondendpos - winH * secondstartpos);
                var opacityaddition = (pos - winH * secondstartpos)/(winH * secondendpos - winH * secondstartpos);
                
                
                $('#changertexttwo').css("opacity", opacitysubtraction);
                $('#changertextthree').css("opacity", opacityaddition);
                $('#changertexttwo').css({"transform" : "translateY(" + subtraction + "px)"});
                $('#changertextthree').css({"transform" : "translateY(" + addition + "px)"});

            
        }else if(pos > winH*secondendpos && pos < winH*thirdstartpos){
            
            $('#changertexttwo').css("opacity", "0");
            $('#changertextthree').css({"transform" : "translateY(0px)"});
            $('#changertextthree').css("opacity","1");
            $('#changertextfour').css("opacity", "0");
            
        }else if (pos > winH*thirdstartpos && pos < winH * thirdendpos){
                var addition = 300 - 300 * (pos - winH * thirdstartpos)/(winH * thirdendpos - winH * thirdstartpos);
                var subtraction = -300 * (pos - winH * thirdstartpos)/(winH * thirdendpos - winH * thirdstartpos);
                var opacitysubtraction = 1 - (pos - winH * thirdstartpos)/(winH * thirdendpos - winH * thirdstartpos);
                var opacityaddition = (pos - winH * thirdstartpos)/(winH * thirdendpos - winH * thirdstartpos);
                
                
                $('#changertextthree').css("opacity", opacitysubtraction);
                $('#changertextfour').css("opacity", opacityaddition);
                $('#changertextthree').css({"transform" : "translateY(" + subtraction + "px)"});
                $('#changertextfour').css({"transform" : "translateY(" + addition + "px)"});
        }else if(pos > winH*thirdendpos){
            $('#changertextthree').css("opacity","0");
            $('#changertextfour').css("opacity","1");
            $('#changertextfour').css({"transform" : "translateY(0px)"});
        }
        
        lastScrollTop = pos;
    
    });

});


 
