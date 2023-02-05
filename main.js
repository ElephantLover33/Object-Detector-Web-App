img = "";

function preload()
{
    img = loadImage('');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#BFDEAD");
    text('Squishmallow', 47, 75);
    noFill();
    stroke("#BFDEAD");
    rect(30, 60, 450, 350);
}

