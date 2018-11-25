
var bird;
var pipes = [];


//функция запускается один раз
function setup() {
    createCanvas($(window).width(), $(window).height());
    skyImage = loadImage("e6.jpg");
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    image(skyImage,0,0, $(window).width(), $(window).height());

    for (var i = pipes.length-1; i >= 0; i--) {
         pipes[i].show();
         pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 90 == 0) {
        pipes.push(new Pipe());
    }
}


function mouseMoved() {
   bird.move(mouseY);
}
