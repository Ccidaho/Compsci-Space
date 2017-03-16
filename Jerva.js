


//View Below For Game Code

var allUpgrades = [' Rock', ' Sticked', ' Test'];
var curUpgrades = [];
var VirtualMoney = 0;
var Sticks = 0;
var costStick = 4;


function getMoney(value) {
VirtualMoney += value;

updateInfo();
}

function getStick(value) {
if(VirtualMoney >= costStick) {
Sticks += value;
VirtualMoney -= costStick;
costStick
	}
updateInfo();
}

function updateInfo() {
document.getElementById('CurMoney').innerHTML = VirtualMoney + '$';
document.getElementById('CurSticks').innerHTML = Sticks;
document.getElementById('StickCost').innerHTML = costStick + '$';
document.getElementById('Upgrades').innerHTML = curUpgrades.toString();
}



//Variables Used In Dealing With Items
//Checking Items Here
var amountUpgrade = 0;
var temporaryAmount = 0;
var tmpUpgrade = -1;

function CheckUpgrade(input){
return curUpgrades.lastIndexOf(allUpgrades[input]); 
}

function checkAmountUpgrade(upgrade) {
amountUpgrade = 0;
temporaryAmount = 0;
tmpUpgrade = upgrade;
curUpgrades.forEach(checkAmount)
temporaryAmount = 0;
tmpUpgrade = -1;
return(amountItem);}

function checkAmount(curVal, index){
if(curVal == allUpgrades[tmpItem]){
temporaryAmount ++; // <--- Spaghetti Codes
amountUpgrade = temporaryAmount;}
}
//Adding/Removal Of Items Is Dealt With Here
function AddUpgrade(input){
curUpgrades.unshift(allUpgrades[input]);
updateInfo();
}
function RemoveUpgrade(input){
var removalOfThing = CheckUpgrade(input);
	curUpgrades.splice(removalOfThing, 1);
}
function addUpgrades(){
if(VirtualMoney >= 10) {
document.getElementById('StickButtonTd').innerHTML = "<button onclick='getStick(30)'>Buy A Stick</button>"
AddUpgrade(1);
VirtualMoney -= 10;
	}
updateInfo();
}


//Saving
function addDash(item) {return item + "-";}
function checkNonsense(item) {return item !== ' '}
function svData() {


var tmpUpgrades = (curUpgrades.map(addDash)).toString();
var svUpgrades = tmpUpgrades.replace(/,/gi, "");
var save ={svUpgrades: svUpgrades, VirtualMoney: VirtualMoney, Sticks: Sticks};
localStorage.setItem("advntSave",JSON.stringify(save));
}



function svLoadData() {

var savegame = JSON.parse(localStorage.getItem("advntSave"));
if (typeof savegame.svUpgrades !== undefined) {
svUpgrades = savegame.svUpgrades;
curUpgrades = svUpgrades.split("-");
curUpgrades.splice(curUpgrades.lastIndexOf(""));
	}
if(typeof savegame.VirtualMoney !== undefined) {
VirtualMoney = Math.floor(savegame.VirtualMoney);
	}	
if(typeof savegame.Sticks !== undefined) {
Sticks = Math.floor(savegame.Sticks);
}
	
	
updateInfo();	
}

function rmvSave() {localStorage.removeItem("advntSave");}




