var ctx;
var w;
var h;
var Pic = new Image();
var star = new Image();

var nums = 40;
var stars=[];

var switchy = false;
var life = 0;
//上一次刷新时间,两次时间间隔
var lastTime;
var deltaTime;

//初始化canvas
var canvas;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    Pic.src = "http://7xspf8.com2.z0.glb.clouddn.com/1.pic.jpg";
    star.src = "src/star.png";

    document.addEventListener("mousemove",mousemove,false);

    for( var i = 0 ; i < 40 ;i++ ) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();
    gameLoop();
}
//window.onload = init();
document.body.onload = init;
//填充画布
function drawBg() {
    ctx.fillStyle = "beige";
    ctx.fillRect(0,0,w,h);
}

//gameLoad刷新canvas画布
function gameLoop() {
    //此处应考虑requestAnimationFrame兼容性
    window.requestAnimationFrame(gameLoop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBg();
    drawGirl();
    drawStars();
    aliveUpdate();
}

function drawGirl() {
    // ctx.drawImgae(img,x,y,width,height);
    // x轴正方向向右,y轴正方形向下 (0,0)在右上角
    ctx.drawImage(Pic,150,25,350,600);
}

function mousemove(e) {
    //检测鼠标位置变化
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        // out switchy = false; in switchy = true;
        // px 在范围内,py在范围内
        if ( px > 200 && px < 600 && py > 50 && py < 600) {
            switchy = true;
        }else{
            switchy = false;
        }
    }
}