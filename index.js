var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6)+1;

randomNumber1 = Math.floor(randomNumber1);
//src="dice1.png"
var src1 = "dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",src1);


var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6)+1;

randomNumber2 = Math.floor(randomNumber2);
//src="dice1.png"
var src2 = "dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",src2);




if(randomNumber2>randomNumber1){

  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else{

  document.querySelector("h1").innerHTML = "Its a tie";
}
