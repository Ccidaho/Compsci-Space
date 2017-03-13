


//View Below For Inventory System

var allItems = [' Stick', ' Rock', ' Axe', ' Gas', ' Fire'];
var curItems = [];

var col = {
	
	
	
	Stick: function() {
	console.log(checkAmountItem(0))
	if(checkAmountItem(0) < 4){
	AddItem(0)
	console.log(amountItem + ' <-- This Is The Amount Of Item');
	amountItem = 0;
	};
	document.getElementById('inventory').innerHTML = curItems.toString();
	},
	
	Rock: function() {
	console.log(checkAmountItem(1))
	if(checkAmountItem(1) < 4){
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
	RemoveItem(0);
	RemoveItem(1);
	AddItem(2)
	};
	
	document.getElementById('inventory').innerHTML = curItems.toString();
	},
	
	Gas: function() {
	AddItem(3)
	document.getElementById('inventory').innerHTML = curItems.toString();
	},
	
	Fire: function() {
	if(CheckItem(3) > -1){
	RemoveItem(3);
	AddItem(4)
	};
	document.getElementById('inventory').innerHTML = curItems.toString();
	},
	BurnAxe: function() {
	if(CheckItem(4) > -1 && CheckItem(2) > -1){
	RemoveItem(2)
	
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
}

function checkAmountItem(item) {
amountItem = 0;
temporaryAmount = 0;
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
function RemoveItem(input){
var removalOfThing = CheckItem(input);
	console.log(removalOfThing);
	curItems.splice(removalOfThing, 1);
}


