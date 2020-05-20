var jcrop_api;

$(function($) {
    var canvas1 = $("#canvas1").get(0);
    var cntxt1 = canvas1.getContext("2d");
    var img1 = new Image();
    img1.src = "../images/girl.png";
    img1.onload = function(){
        cntxt1.drawImage(img1, 0 , 0);
        width = canvas1.width;
        var imageData1 = cntxt1.getImageData(0, 0, 1920, 1080);
        cntxt1.putImageData(imageData1, 0, 0);

    }
    var canvas2 = $("#canvas2").get(0);
    var img2 = new Image();
    img2.src = "../images/bike.png";
    var cntxt2 = canvas2.getContext("2d");
    
    img2.onload = function() {

        cntxt2.drawImage(img2, 0, 0);
        $('#canvas1').Jcrop({
            onSelect: makeTransparent
          },function(){
              jcrop_api = this;
          });
    }  
});


function makeTransparent(c){
    canvas2 = $("#canvas2").get(0);
    cntxt2 = canvas2.getContext("2d");
    var width = canvas2.width;
    var imageData = cntxt2.getImageData(0, 0, 1920, 1080);
    
    for(var x_cord = c.x; x_cord < c.x + c.w; x_cord++){
        for(var y_cord = c.y; y_cord < c.y + c.h; y_cord++){
            imageData.data[((width * y_cord) + x_cord) * 4] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 1] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 2] = 255;
            imageData.data[((width * y_cord) + x_cord) * 4 + 3] = 0;
        }
    }
    cntxt2.putImageData(imageData, 0 ,0);
    jcrop_api.release();
};






