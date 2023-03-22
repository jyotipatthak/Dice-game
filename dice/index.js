var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomDiceImages= "dice" + randomNumber1 + ".png";
var randomeImagesSource="images/" + randomDiceImages;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages2 = "dice" + randomNumber2 + ".png";
var randomeImagesSource2 = "images/" + randomDiceImages2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomeImagesSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="1st player win!!!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="2nd player win!!!";
    
} 
else {
    document.querySelector("h1").innerHTML="match drow!!!";
}