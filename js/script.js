var jcrop_api;
var canvas1, canvas3;
var cntxt1, cntxt3, stage;

$(function($) {
    canvas1 = $("#canvas2").get(0);
    canvas3 = document.getElementById("canvas3");
    cntxt1 = canvas1.getContext("2d");
    cntxt3 = canvas3.getContext("2d");
    var img1 = new Image();
    img1.src = "../images/girl.png";
    img1.src = "../images/girl.png";
    img1.onload = function(){  
        canvas1.width = document.body.clientWidth;
        canvas1.height = (552/984) * canvas1.width;
        canvas3.width = canvas1.width;
        canvas3.height = canvas1.height;
        cntxt1.drawImage(img1, 0 , 0, img1.width, img1.height, 0, 0, canvas1.width, canvas1.height);
        cntxt3.drawImage(canvas1, 0,0, canvas1.width, canvas1.height, 0, 0, canvas3.width, canvas3.height)
        console.log("ATTACH")
    }
    var canvas2 = $("#canvas2").get(0);
    var img2 = new Image();
    img2.src = "../images/girl.png";
    var cntxt2 = canvas2.getContext("2d");
    
    img2.onload = function() {

        $('#target1').Jcrop({
            onSelect: makeTransparent
          },
          function(){
              jcrop_api = this;
          });
    }  
});


function makeTransparent(c){
    /*
    canvas2 = $("#canvas2").get(0);
    cntxt2 = canvas2.getContext("2d");
    var width = canvas2.width;
    var imageData = cntxt2.getImageData(0, 0, 1920, 1080);
    
    for(var x_cord = c.x; x_cord < c.x + c.w; x_cord++){
        for(var y_cord = c.y; y_cord < c.y + c.h; y_cord++){
            if(x_cord % 50 == 0 && y_cord % 50 == 0){
                console.log("2500");
            }
            imageData.data[((width * y_cord) + x_cord) * 4] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 1] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 2] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 3] = 0;
        }
    }

    cntxt2.putImageData(imageData, 0 ,0);*/
    let x, y, width_img, height;
    x = Math.floor(c.x);
    y = Math.floor(c.y);
    width_img = Math.floor(c.w);
    height = Math.floor(c.h);
    console.log(x, y, width, height);
    
    var width = canvas1.width;

    var imageData = cntxt1.getImageData(0, 0, canvas1.width, canvas1.height);
    
    for(var x_cord = x; x_cord < x + width_img; x_cord++){
        for(var y_cord = y; y_cord < y + height; y_cord++){
            imageData.data[((width * y_cord) + x_cord) * 4] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 1] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 2] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 3] = 0;
        }
    }
    cntxt1.putImageData(imageData,0 ,0);
    cntxt3.putImageData(imageData, 0, 0);
    jcrop_api.release();
};






