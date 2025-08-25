function gameStart(){
    var randomdice1 = Math.floor(Math.random() * 6) + 1;
    var randomdice2 = Math.floor(Math.random() * 6) + 1;
    switch(randomdice1){
        case 1: document.querySelector(".dice1").setAttribute("src","./dice1.png");break;
        case 2: document.querySelector(".dice1").setAttribute("src","./dice2.png");break;
        case 3: document.querySelector(".dice1").setAttribute("src","./dice3.png");break;
        case 4: document.querySelector(".dice1").setAttribute("src","./dice4.png");break;
        case 5: document.querySelector(".dice1").setAttribute("src","./dice5.png");break;
        case 6: document.querySelector(".dice1").setAttribute("src","./dice6.png");break;
    }
    switch(randomdice2){
        case 1: document.querySelector(".dice2").setAttribute("src","./dice1.png");break;
        case 2: document.querySelector(".dice2").setAttribute("src","./dice2.png");break;
        case 3: document.querySelector(".dice2").setAttribute("src","./dice3.png");break;
        case 4: document.querySelector(".dice2").setAttribute("src","./dice4.png");break;
        case 5: document.querySelector(".dice2").setAttribute("src","./dice5.png");break;
        case 6: document.querySelector(".dice2").setAttribute("src","./dice6.png");break;
    }
    if(randomdice1 > randomdice2){
        document.querySelector("h1").innerHTML="CONGRATULATIONS PLAYER 1 YOU WON ";
    }
    else if (randomdice2 > randomdice1){
        document.querySelector("h1").innerHTML="CONGRATULATIONS PLAYER 2 YOU WON ";
    }
    else{
        document.querySelector("h1").innerHTML="DRAW";
    }
}

