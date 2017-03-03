



//View Below For Inventory System

var allItems = [' Stick', ' Rock', ' Axe']
var curItems = []

var col = {
	
	
	
	Stick: function() {
	
	if(checkAmountItem(0) < 5){
	AddItem(0)
	console.log(amountItem + ' <-- This Is The Amount Of Item');
	amountItem = 0;
	};
	document.getElementById('inventory').innerHTML = curItems.toString();
	},
	
	Rock: function() {
	
	if(checkAmountItem(1) < 5){
	AddItem(1)
	console.log(amountItem + ' <-- This Is The Amount Of Item');
	amountItem = 0;
	};
	document.getElementById('inventory').innerHTML = curItems.toString();
	},

	Axe: function() {
		console.log(CheckItem(1) + " ROCK REMOVAL")
		console.log(CheckItem(0) + " STICK REMOVAL")
	if(CheckItem(1) > -1 && CheckItem(0) > -1){
	
	
	var stickRemoval = CheckItem(0)
	console.log(stickRemoval);
	curItems.splice(stickRemoval, 1)
	

	var rockRemoval = CheckItem(1)
	console.log(rockRemoval);
	curItems.splice(rockRemoval, 1)
	
	
	AddItem(2)
	};
	
	document.getElementById('inventory').innerHTML = curItems.toString();
	},



}




//Variables Used In Dealing With Items
//Checking Items Here
var amountItem = 0;
var temporaryAmount = 0;
var tmpItem = -1;

function CheckItem(input){
return curItems.lastIndexOf(allItems[input]); 
//For The Record. JP. This Says "The Array Of Current Items
//Get The Last Index (Index Being Number Where It's Stored), Of 
//The Name Of The Item That You Would Get If You Put The Input
//Into The Array Of All Possible Items"
}

function checkAmountItem(item) {
tmpItem = item;
curItems.forEach(checkAmount)
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
curItems.unshift(allItems[input]);
}








