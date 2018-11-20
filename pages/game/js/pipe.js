
function Pipe() {
    this.spacing = 175;
    this.top = $(window).height()/4;
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;

    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    };

    this.show = function() {

         if (this.highlight) {
             fill(255, 0, 0);
         }
         rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top, this.w, this.top);
        rect(this.x, 2*this.top, this.w, this.top);
        rect(this.x, 3*this.top, this.w, this.top);

        // rect(this.x, height-this.bottom, this.w, this.bottom);
    };

    this.update = function() {
        this.x -= this.speed;
    };

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    };


}