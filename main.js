badlier = "";
bones = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    badlier = loadSound("Bad-Liar_320(PagalaSongs).mp3");
    bones = loadSound("Bones_320(PagalaSongs).mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PosenNet is Intialized");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist X = " + leftWristX + "LeftWrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWrist X = " + rightWristX + "RightWrist Y = " + rightWristY);
    }
}
