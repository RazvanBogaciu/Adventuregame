var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.createElement("button");
var title = document.getElementById("title");
var inventoryItem = document.getElementById("inventoryItem");
var description = document.getElementById("description");
var image = document.getElementById("image");
var gameContainer = document.getElementById("game-buttons");

var img = document.createElement("img");
 
img.src = "stats.jpg";
var stats = document.createElement("div");
stats.setAttribute('id',"stats")
 document.body.appendChild(stats)
stats.appendChild(img);

var statmenu = document.createElement("div");
statmenu.setAttribute('id',"statsmenu")

var stat1 = document.createElement("div");
stat1.setAttribute('id',"stat1")
stat1.innerHTML = "<a id='stat1'>0</a>"
document.body.appendChild(stat1)

var stat2 = document.createElement("div");
stat2.setAttribute('id',"stat2")
stat2.innerHTML = "<a id='stat2'>0</a>"
document.body.appendChild(stat2)

var stat3 = document.createElement("div");
stat3.setAttribute('id',"stat3")
stat3.innerHTML = "<a id='stat3'>0</a>"
document.body.appendChild(stat3)

var stat4 = document.createElement("div");
stat4.setAttribute('id',"stat4")
stat4.innerHTML = "<a id='stat4'>0</a>"
document.body.appendChild(stat4)

title.innerHTML = "Dark Souls 4"
image.src = "darksouls4.jpg"

button1.innerHTML = "Start Game";
button1.setAttribute('onclick' ,"startGame()")

button2.innerHTML = "Commit Suicide";
button2.setAttribute('onclick' ,"death()")

button3.style.display = "none";
inventoryItem.style.display = "none"
description.innerHTML = "<a id='text'>Welcome to my awsome game <br> press Start Game to start a new game </a>"

function death(){
    image.src = "youdied.gif"
    button1.innerHTML = "restart";
    description.innerHTML = "<a id='text'>You died a very painfull death , press restart to reset the game </a>"
    button1.setAttribute('onclick' ,"document.location.reload(true)")
    button2.style.display = "none";
    button3.style.display = "none";
}

  
  function startGame(){
  image.src = "forrest.jpg"
  description.innerHTML = "<a id='text'>You wake up in a forrest , not having any of your memories, <br> Who are you? </a>"
  
  button1.innerHTML = "A wizard (+1 vitality, <br>+7 inteligence)";
  button1.setAttribute('onclick' ,"wizardClass()")

  button2.innerHTML = "A warrior (+3 vitality, <br>+5 strenght)";
  button2.setAttribute('onclick' ,"wizardNpc()")

  button3.style.display = "inline-block";
  button3.innerHTML = "An archer (+2 vitality, <br>+5 dexterity)";
  button3.setAttribute('onclick' ,"wizardNpc()")

  gameContainer.appendChild(button4);
  button4.style.display = "inline-block";
  button4.innerHTML = "A thief (+3 vitality, <br>3+dexterity)";
  button4.setAttribute('onclick',"wizardNpc()")
  button4.setAttribute('id',"button4")
  description.style.height='173px'
  }
function wizardNpc(){
    image.src = "forrest2.png"
    description.innerHTML = "<a id='text'>You see a wandering wizard walking by you , what do you wanna do? </a>"
    
    button1.innerHTML = "Talk to the wandering wizard";
    button1.setAttribute('onclick' ,"talkwizard()")

    button2.innerHTML = "Attack the wandering wizard";
    button2.setAttribute('onclick' ,"attackwizard()")

    button3.style.display = "none";
    button4.style.display = "none";
    description.style.height='195px'
}
function talkwizard(){
    button2.style.display = "none";

    description.innerHTML = "<a id='text'>Hello there adventurer what is your name? </a>"
    
    var name = document.createElement("input");   
    name.setAttribute('id',"nameid")
    description.appendChild(name)

    button1.innerHTML = "Confirm";
    button1.setAttribute('onclick' ,"talkwizard2()")
}
function talkwizard2() {
    nameCheck = (document.querySelector('input[id="nameid"]').value)
    description.innerHTML = "<a id='text'>So your name is "+nameCheck+" , that name fits you perfectly</a>"
    if (nameCheck == "") {
        description.innerHTML = "<a id='text'> You won't tell me your name? <br> How dare you , i the great wizard will annihilate you </a>"
        button1.innerHTML = "Continue";
        button1.setAttribute('onclick' ,"death()")
    }
    else {
        button1.innerHTML = "Continue";
        button1.setAttribute('onclick' ,"talkwizard3()")

    }
}
function talkwizard3() {
    image.src = "forrest3.png"
    button1.innerHTML = "sword";
    button1.setAttribute('onclick' ,"byewizard()")

    button2.style.display = "inline-block";
    button2.innerHTML = "shield";
    button2.setAttribute('onclick' ,"byewizard()")

    description.innerHTML = "<a id='text'> i have a gift for you "+nameCheck+", i have a sword and a shield which one would you like to have </a>"
}

function attackwizard() {
    description.innerHTML = "<a id='text'> you try to punch the wizard as hard as you can <br> but just before it hit he teleported behind you and burned you to a crisp</a>"
    
    button1.innerHTML = "Continue";
    button1.setAttribute('onclick' ,"death()")

    button2.style.display = "none";
}

function byewizard() {
    description.innerHTML = "<a id='text'> as you grabbed your gift the wizard mysteriously disapeared</a>"
    image.src = "forrest.jpg"
    button1.innerHTML = "go to the ringed city";
    button1.setAttribute('onclick' ,"()")

    button2.style.display = "inline-block";
    button2.innerHTML = "go to the slime swamp";
    button2.setAttribute('onclick' ,"()")

}

function ringedCity() {
    image.src = ""
    button1.innerHTML = "talk to the suspicious guard";
    button1.setAttribute('onclick' ,"()")

    button2.innerHTML = "attack the suspicious guard";
    button2.setAttribute('onclick' ,"()")
}

function wizardClass() {
    stat1.innerHTML = 1  
    stat4.innerHTML = 7

    wizardNpc()
}