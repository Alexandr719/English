function Bird() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.7;
    this.lift = -10;
    this.velocity = 0;

    this.show = function () {
        //image(skyImage2, this.x, this.y, 32, 32);
        fill(111);
        textSize(32);
        text('Word', this.x , this.y) ;

    };

    this.up = function () {
        this.velocity = this.velocity;
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