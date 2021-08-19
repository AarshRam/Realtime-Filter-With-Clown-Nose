nose_x = 0;
nose_y= 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png'); 
}

function setup (){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,400,400);
    image(clown_nose , nose_x , nose_y , 35 , 35);
}

function modelLoaded() {
    console.log("Pose Net Initialized");
}

function gotPoses(results) {
    console.log("Clown nose loaded");
if(results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x-15;
    nose_y = results[0].pose.nose.y-15;
    console.log("Clown nose loaded");
}
}

function take_snapshot(){
    save('clown_nose.png');
}