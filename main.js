function preload(){}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,500);
    canvas.position(560,100);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
    }
function draw(){
    background('white');
}

function modelloaded(){
    console.log("modelloaded");
}

function gotposes(results){
 if(results.length > 0){
     console.log(results);
 }
}