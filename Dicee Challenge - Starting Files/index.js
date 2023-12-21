var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomPic = "dice" + randomNumber1 + ".png";

var randomSource = "images/" + randomPic;

document.querySelector("img").setAttribute("src", randomSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomPic2 = "dice" + randomNumber2 + ".png";

var randomSource2 = "images/" + randomPic2;

document.querySelector("img.img2").setAttribute("src", randomSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}
