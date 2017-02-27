function enterBridge() {

	if (powerOn.toggle == 0) {
	
	description = 
		"<p>You find yourself on a dimly lit spaceship and can see a small sign hanging above an "+
		"entrance to another room. You're not sure how you got here but you have to get back home "+
		"before the spaghetti burns.</p> "+
		"<p>You can just barely make out the sign, it says "+
		"'<a href='#' onclick='enterEngine()'>Engine Room</a>'.</p>";
	} else {
	
	description = 
		"<p>The spaceship is now brightly lit up and you can see other entrances, </p>"+
		"<p>back to the <a href='#' onclick='enterEngine()'>engine room</a>, "+
		"another entrance to the <a href='#' onclick='lckrRoom(1)'>locker room</a></p> "+
		"<p>and one more that leads to the "+
		"<a href='#' onclick='enterLightPod()'>escape pod bay</a></p>";
	}
		roomDesc = document.getElementById('RoomDesc');
		roomDesc.innerHTML = description;
		document.getElementById('RoomTitle').innerHTML = "The Bridge";
		
}

function enterEngine() {

	description = 
		"<p>You enter the engine room and find a button that turns on the <a href='#' onclick='powerOn.press()'>emergency power</a>.</p> "+
		"<p>There is only one exit in this room, back to the <a href='#' onclick='enterBridge()'>bridge</a></p>";
	
	document.getElementById('RoomTitle').innerHTML = "Engine Room";
	roomDesc = document.getElementById('RoomDesc');
	roomDesc.innerHTML = description;

}

var powerOn = {

	toggle: 0,
	
	press: function() {
	
		
		if(powerOn.toggle == 1){
		
			description = 
				"<p>You already turned on the emergency power.</p>";
		roomDesc = document.getElementById('RoomDesc');
		roomDesc.style.color = 'white';
		body = document.getElementById('body');
		body.style.backgroundColor = 'black';
		
		}
		if(powerOn.toggle == 0) {
		
			description = 
				"<p>You turned on the power! Now you can go check out the other rooms</p>";
				
			roomDesc = document.getElementById('RoomDesc');
			roomDesc.style.color = 'black';
			body = document.getElementById('body');
			body.style.backgroundColor = 'white';
			powerOn.toggle = 1
			
			
		
		}
		roomDesc = document.getElementById('RoomDesc');
		roomDesc.style.color = 'black';
		body = document.getElementById('body');
		body.style.backgroundColor = 'white';
		roomDesc.innerHTML += description;
		
		console.log(powerOn.toggle)
	
	}

}

function placeholder() {

	console.log('this has not been implemented yet');

}

//code for the locker room

var curInv =[];
var posInv =["Laser-Tool", "Holy-Bible"];

function lckrRoom(input) {
if(curInv[0] == posInv[0]) {input ++;}
if (input == 1) {
	description = "<p>As you enter the locker room, you can see</p>" +
	"<p> many lockers, each of which are unlocked due to the manual power</p>" +
	"<p> reset which occured when you turned the power back on. </p>" +
	"<br><p><a href='#' onclick='lckrOpen()'>Crack Open A Locker</a></p><p id='lckrNum'>10/10</p>" +
	"<br><p>Or you could head back to the <a href='#' onclick='enterBridge()'>Bridge</a></p>";
var roomRan = document.getElementById('RoomDesc');
roomRan.innerHTML = description;}
if (input == 2) {
	description = "<p>As you enter the locker room, you can see</p>" +
	"<p> many lockers, each of which are unlocked due to the manual power</p>" +
	"<p> reset which occured when you turned the power back on. </p>" +
	"<br><p><a href='#' onclick='enterBridge()'>Bridge</a></p>";
var roomRan = document.getElementById('RoomDesc');
roomRan.innerHTML = description;
}
document.getElementById('RoomTitle').innerHTML = "Locker Room";
}

var lckrOpenable = 9;

function lckrOpen() {
	
	var tmpRan = Math.floor(Math.random() * lckrOpenable);
	lckrOpenable --;
	var tmpOpn = lckrOpenable + 1
	console.log(tmpOpn);
	document.getElementById('lckrNum').innerHTML = tmpOpn + "/10";
	if(tmpRan == 0||lckrOpenable == 0){
		description = "<p>As you enter the locker room, you can see</p>" +
		"<p> many lockers, each of which are unlocked due to the manual power</p>" +
		"<p> reset which occured when you turned the power back on. </p>" +
		"<br><p><a href='#' onclick='enterBridge()'>Bridge</a></p>";
		description += "<p>You managed to get the laser tool!</p>"

	curInv.unshift(posInv[0]);
	
	document.getElementById('allInv').innerHTML = laserTool.menuCreate();
	console.log(curInv);

	var roomRan = document.getElementById('RoomDesc');
	roomRan.innerHTML = description;

}else{

	var roomRan = document.getElementById('RoomDesc');
	roomRan.innerHTML += "<p>This locker had nothing inside of it.</p>"

}
}

var laserTool = {
	location:'locker',
		menuCreate: function () {
		menu = 
			"<span id='laserLinkId' class='popup'>" +
				"<a href='#' onclick='laserTool.menuDisplay()'>" +
					"Laser-Tool" +
				"</a>" +
				"<span id='laserMenuId' class='popuptext'>" +
					"<u onclick='laserTool.examine()'>" +
						"Examine" +
					"</u>";
		
		return(menu)
		},
		
		menuDisplay: function () {
		popup = document.getElementById('laserMenuId');
		popup.style.visibility = 'visible';
		},
		examine: function () {
		
		document.getElementById('RoomDesc').innerHTML += "<p>You examine the laser tool and" +
		" realize that it's a laser tool.</p>"
		
		popup = document.getElementById('laserMenuId');
		popup.style.visibility = 'hidden';
		},


}

/* ESCAPE POD */
function enterLightPod() {
console.log('enterLightPod')
var killChance = Math.floor(Math.random() * 3);
if(killChance == 0){
	var description =
		"<p>The escape pod starts to rattle! You realize that it's about to explode!</p>" +
		"<p>Before you can do anything you're blown to bits and all you hear is</p>" +
		"<p></p><br><h1>GAME OVER</h1>" +
		"<p><a href='#' onclick='window.location.reload()'>Restart?</a></p>"
		var roomRan = document.getElementById('RoomDesc');
		roomRan.innerHTML = description;
		document.getElementById('RoomTitle').innerHTML = "Escape Pod";
	}
		else{
	var description =
		"<p>You enter the escape pod bay and find one escape pod that hasn't been launched yet </p>"+
		"<p>The escape pod's engine is not functioning, " +
		"there might be a way to " +
		"<a href='#' onclick='fixPod()'>fix</a>" +
		" it...</p>";
		
	var roomRan = document.getElementById('RoomDesc');
	roomRan.innerHTML = description;
	document.getElementById('RoomTitle').innerHTML = "Escape Pod";
	}
}

/* FIX POD */
function fixPod() {
console.log('fixPod')
	if(curInv[0] == posInv[0]) {
		endGame();
	}
	else {
		enterRejection();
	}
}

/* REJECTED */
function enterRejection() {
console.log('enterRejection')

	
	var description =
		"<p>You need a tool it might be on the " +
		"<a href='#' onclick='enterBridge()'>bridge</a>." +
		"</p>";
		var roomRan = document.getElementById('RoomDesc');
		roomRan.innerHTML = description;
		document.getElementById('RoomTitle').innerHTML = "Escape Pod";
	
}

/* END GAME */
function endGame() {
console.log('endGame')
	var description =
		"<p>The door slammed shut behind you, the pod " +
		"has started to shake...<br>" +
		"You were lanched back to earth.</p>"+
		"<p>You Win</p>";
		var roomRan = document.getElementById('RoomDesc');
		roomRan.innerHTML = description;
		document.getElementById('RoomTitle').innerHTML = "Victory!";
}