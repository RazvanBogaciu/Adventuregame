var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title = document.getElementById("title");
var inventoryItem = document.getElementById("inventoryItem");
var description = document.getElementById("description");
var image = document.getElementById("image");
var gameContainer = document.getElementById("");

title.innerHTML = "Dark Souls 4"
image.src = "darksouls4.jpg"
button1.innerHTML = "Start Game";
button1.setAttribute ="startGame()";
button2.innerHTML = "Commit Suicide";
button2.setAttribute ="Death()";
button3.style.display = "none";
inventoryItem.style.display = "none"
description.innerHTML = "<a id='text'>Welcome to my awsome game </a>"

function startGame(){

}