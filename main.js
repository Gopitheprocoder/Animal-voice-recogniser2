function recogniser(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/srWQWQhB8/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
if(error){
    console.error(error);
}else{
    console.log(results);
    rgb_r=Math.floor(Math.random()*255)+1;
    rgb_g=Math.floor(Math.random()*255)+1;
    rgb_b=Math.floor(Math.random()*255)+1;
document.getElementById('result').innerHTML='I can hear - '+results[0].label;
document.getElementById('accuracy').innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById('result').style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
document.getElementById('accuracy').style.color="rgb("+rgb_r+","+rgb_g+","+rgb_b+")";
img=document.getElementById('img1');
if (results[0].label == "barking") 
{ img.src = 'dog.jpeg';
 
}
else if(results[0].label == "meow") 
{ img.src = 'cat.jpeg';

}
else if(results[0].label == "mooing") 
{ img.src = 'cow.png';

}
else if(results[0].label == "roar") 
{ img.src = 'lion.png';
}
}
