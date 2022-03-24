function preload()
{}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tc="";
}

function draw(){
    image(video, 0,0,canvas.width,canvas.height);
    tint(tc)
}

function applyF(){
    tc = document.getElementById("input1").value;
}

function takeS(){
    save('image.jpg')
}