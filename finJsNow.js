

//Start Game Code

function startGame() {
var newText = " You fall out of a tree that you were sleeping in," +
" and because you fell so hard you lost your memory!";

var mapText = "<button onclick='walkTrail()'>A Small Trail</button>"


document.getElementById('map').innerHTML = mapText;
document.getElementById('story').innerHTML = newText;
}

function walkTrail(set) {
if(set == 1 || skillBook == 1){
getSkillBook();
var newText = " A Small Walking Path, You Cannot View Anything Else";
}
else{
var newText = " A Small Walking Path, However You Can See A <i onclick='walkTrail(1)'>Skill Book</i>"
}
var mapText = "<button onclick='walkTree()'>The Tree</button>" 

document.getElementById('map').innerHTML = mapText;
document.getElementById('story').innerHTML = newText;
}
function walkTree(set){
var newText = " The Tree You Woke Up At";
var mapText = "<button onclick='walkTrail(1)'>The Trail</button>"

document.getElementById('map').innerHTML = mapText;
document.getElementById('story').innerHTML = newText;
}
var skillBook = 0;
function getSkillBook(){
skillBook += 1;
var newText = "<h1>Skill-Book</h1>"+
"<p>Observation: <i id='observationSk'>1</i></p>"+
"<p>Jumping: <i id='jumpingSk'>1</i></p>";

document.getElementById('skillDiv').innerHTML = newText;
}

//View Below For Inventory System

var allItems = [' Knife'];
var curItems = [];


//Variables Used In Dealing With Items
//Checking Items Here
var amountItem = 0;
var temporaryAmount = 0;
var tmpItem = -1;

function CheckItem(input){
return curItems.lastIndexOf(allItems[input]); 
}

function checkAmountItem(item) {
amountItem = 0;
temporaryAmount = 0;
tmpItem = item;
curItems.forEach(checkAmount);
temporaryAmount = 0;
tmpItem = -1;
return(amountItem);}

function checkAmount(curVal, index){
if(curVal == allItems[tmpItem]){
temporaryAmount ++; // <--- Spaghetti Codes
amountItem = temporaryAmount;}
}
//Adding/Removal Of Items Is Dealt With Here
function AddItem(input){
curItems.unshift(allItems[input])
console.log(curItems);
}
function RemoveItem(input){
var removalOfThing = CheckItem(input);
	console.log(removalOfThing);
	curItems.splice(removalOfThing, 1);
}
