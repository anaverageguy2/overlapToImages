$(window).load(function() {
    var cnavas1 = $("#canvas1").get(0);
    var canvas2 = $("#canvas2").get(0);
    var cntxt1 = canvas1.getContext("2d");
    var cntxt2 = canvas2.getContext("2d");
    var img1 = new Image();
    img1.src = "../images/bike.png";
    var img2 = new Image();
    img2.src = "../images/girl.png";
    img1.onload = function (){
        cntxt1.drawImage(img1, 0, 0);
    }
    img2.onload = function() {
        cntxt2.drawImage(img2, 0, 0);
    }
    cntxt2.drawImage(img2, 0, 0);
    
})
