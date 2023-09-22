prediction_1=""
prediction_2=""

Webcam.set({
    height:300,
    width:300,
    image_format:'jpeg',
    jpeg_quality:100
});
Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML='<img id="output" src="'+data_uri+'">'
    })
}


console.log('ml5version',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3nJTc27AY/model.json",loaded);
 function loaded(){
    console.log("Model is loaded");

 }
 function check(){
    img=document.getElementById("output")
    classifier.classify(img,got_result)
 }
 function got_result(){
    
 }

