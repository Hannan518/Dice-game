var numberRandom1 = Math.floor((Math.random()*6) + 1);//1-6
var diceImgSource1 = "images/dice" + numberRandom1 + ".png";

document.querySelector(".img1").setAttribute("src",diceImgSource1)


var numberRandom2 = Math.floor((Math.random()*6) + 1);//1-6
var diceImgSource2 = "images/dice" + numberRandom2 + ".png";

document.querySelector(".img2").setAttribute("src",diceImgSource2)




if(numberRandom1===numberRandom2){
    document.querySelector("h1").innerHTML = "DRAW!";
}
if(numberRandom1>numberRandom2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
}
if(numberRandom1<numberRandom2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
