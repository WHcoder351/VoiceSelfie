var SpeechRecognition = window.webkitSpeechRecognition;
var recognize = new SpeechRecognition();

function start() {
    document.getElementById("VIn").innerHTML = "";
    recognize.start();
}
recognize.onresult = function (event) {
    console.log(event);
    var Transc = event.results[0][0].transcript;
    console.log(Transc);
    document.getElementById("VIn").innerHTML = Transc;
if (Transc =="take my selfie") {
    console.log(Transc);
    speak();
}
}
var Cam = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 260,
    image_format: 'png',
    png_quality: 100
});

function speak() {
    var synth = window.speechSynthesis;
    sdata = "Taking selfie in 5 SECONDS"
    var utterThis = new SpeechSynthesisUtterance(sdata);
    synth.speak(utterThis);
    Webcam.attach(Cam);
    setTimeout(function(){
        snap();
        save();
    },5000);
}
function snap(){
    Webcam.snap(function(data_uri){
document.getElementById("Output1").innerHTML = '<img id ="S-i" src = " '+ data_uri+' " />';
    });
}
function save(){
    link = document.getElementById("link");
    img = document.getElementById("S-i").src;
    link.href = img;
    link.click();
}