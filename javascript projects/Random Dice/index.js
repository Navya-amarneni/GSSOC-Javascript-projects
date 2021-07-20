var randomNumber1=Math.random();
randomNumber1=randomNumber1*6+1;
randomNumber1=Math.floor(randomNumber1);

var string1="images/dice"+randomNumber1+".png";

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber2=Math.floor(randomNumber2);

var string2="images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src",string1);
document.querySelector(".img2").setAttribute("src",string2);

if(randomNumber1==randomNumber2){
  document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 won!!!!";
}
else{
  document.querySelector("h1").textContent="Player 2 won!!!!";
}
