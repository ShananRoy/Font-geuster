noseX=0 
noseY=0
difference=0
rightWristX = 0; leftWristX = 0;

function setup() {
  canvas = createCanvas(550, 550);
  canvas.position(560,150);
  video = createCapture(VIDEO);
  video.size(550,500);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX)
    console.log("leftWristX" +leftWristX);
    console.log("rightWristX" +leftWristX);
}
}
function draw() {
    background('grey')
document.getElementById("square_side").innerHTML="width and hight of the squar will be=" +difference+"px";
fill('red')
stroke('red')
square(noseX,noseY,difference)
}