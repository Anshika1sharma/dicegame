var dicee = Math.random() * 6;
var dice = Math.floor(dicee); 
var final = dice + 1 ;


switch (final) {
  case 1:
    document.querySelector(".one img").setAttribute("src", "./assets/one.png");
    break;
  case 2:
    document.querySelector(".one img").setAttribute("src", "./assets/two.png");
    break;
  case 3:
    document.querySelector(".one img").setAttribute("src", "./assets/three.png");
    break;
  case 4:
    document.querySelector(".one img").setAttribute("src", "./assets/four.png");
    break;
  case 5:
    document.querySelector(".one img").setAttribute("src", "./assets/five.png");
    break;
  case 6:
    document.querySelector(".one img").setAttribute("src", "./assets/six.png");
    break;
}

var diceeTwo = Math.random() * 6;
var diceTWO = Math.floor(diceeTwo); 
var finaltwo = diceTWO + 1 ;

switch (finaltwo) {
  case 1:
    document.querySelector(".two img").setAttribute("src", "./assets/one.png");
    break;
  case 2:
    document.querySelector(".two img").setAttribute("src", "./assets/two.png");
    break;
  case 3:
    document.querySelector(".two img").setAttribute("src", "./assets/three.png");
    break;
  case 4:
    document.querySelector(".two img").setAttribute("src", "./assets/four.png");
    break;
  case 5:
    document.querySelector(".two img").setAttribute("src", "./assets/five.png");
    break;
  case 6:
    document.querySelector(".two img").setAttribute("src", "./assets/six.png");
    break;
}

if(final == finaltwo){
    document.querySelector("h1").innerHTML="DRAW !";
}
else if (final > finaltwo){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩";
}
else{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
}