var starObj = function () {
    this.x;
    this.y;

    this.picNum;
    this.timer;

    this.xSpd;
    this.ySpd;
};

starObj.prototype.init = function () {
    this.x = Math.random()*350 + 200;
    this.y = Math.random()*500 + 50;

    this.picNum = Math.floor(Math.random() * 7);
    this.timer = 0;

    this.xSpd = Math.random() * 3 - 1.5; //[-1.5,1.5]
    this.ySpd = Math.random() * 3 - 1.5 ; //[-1.5,1.5]
};

starObj.prototype.draw = function () {
    //save()
    ctx.save();
    //globalAlpha全局透明度
    ctx.globalAlpha = life;

    // drawImage(image,sx,sy,swidth,sheigth,x,y,width,height)
    // sx,sy x,y坐标起点
    ctx.drawImage(star, this.picNum * 7 ,0 ,7 ,7,this.x,this.y,7,7);

    //restroe()
    ctx.restore();
};

starObj.prototype.update = function () {
    this.x += this.xSpd * deltaTime * 0.004;
    this.y += this.ySpd * deltaTime * 0.004;

    //如果this.x超出范围,则init
    if(this.x < 150 && this.x > 700) {
        this.init();
        return;
    }

    if(this.y < 50 && this.y > 600) {
        this.init();
        return;
    }

    this.timer += deltaTime;
    if(this.timer > 30) {
        this.picNum += 1;
        this.picNum %= 7;
        this.timer = 0;
    }
};

function drawStars() {
    for( var i = 0 ;i<nums; i++ ) {
        stars[i].draw();
        stars[i].update();
    }
}

function aliveUpdate() {
    if(switchy) { //in area
        life += 0.03 * deltaTime * 0.05;
        if(life > 1) {
            life = 1;
        }
    }else{ //out area
        life -= 0.03 * deltaTime * 0.05;
        if(life < 0) {
            life = 0;
        }
    }
}