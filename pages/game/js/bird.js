function Bird() {
    this.y = height / 2;
    this.x = 64;


    this.show = function () {
        //image(skyImage2, this.x, this.y, 32, 32);
        fill(255,0,0);
        textSize(50);
        text('House', this.x , this.y) ;

    };

    this.move = function (mouseY) {
             this.y = mouseY;
    };

    this.update = function () {
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        };

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        };

    }

}