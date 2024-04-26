song=""
leftWristX="" 
leftWristY=""
rightWristX=""
rightWristY=""
function preload() {
    song=loadSound("music.mp3")
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    ps=ml5.poseNet(video,modelLoaded)
    ps.on('pose',gotPoses)
}
function draw() {
    image(video,0,0,400,400)
}
function play() {
    song.play()
    song.setVolume(0.2)
    song.rate(1.3)
}
function modelLoaded() {
    console.log("model is loaded")
}
function gotPoses(results) {
    if(results.length>0) {
        //console.log(results)
        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y 
        console.log(leftWristX)
        console.log(leftWristY)
        rightWristX=results[0].pose.rightWrist.x
        rightWristY=results[0].pose.rightWrist.y
        console.log("rightWrist " + rightWristX+","+rightWristY)
    }
}