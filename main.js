song = ""
leftWristX = ""
leftWristY = ""
rightWristX = ""
rightWristY = ""
scoreleftwrist = ""
isplaying = ""

function preload() {
    song = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    ps = ml5.poseNet(video, modelLoaded)
    ps.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 600, 500)
    fill("red")
    stroke("red")
    if (scoreleftwrist > 0.2) {
        circle(leftWristX, leftWristY, 25)
        n = Number(leftWristY)
        r = floor(n)
        if(song.isPlaying()) {
            song.pause()
            song2.play()
        }
        if(song2.isPlaying()) {
            song2.pause()
            song.play()
        }
    }
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
    if (results.length > 0) {
        //console.log(results)
        scoreleftwrist = results[0].pose.keypoints[9].score
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log(leftWristX)
        console.log(leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWrist " + rightWristX + "," + rightWristY)
    }
}