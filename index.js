{
	const btn = document.querySelectorAll(".drum").length
	for (var i = 0; i < btn; i++) {
		document.querySelectorAll(".drum")[i].addEventListener("click", click)
	}
}

function click() {
	const key = this.innerHTML;
	keyClick(key);
}

document.addEventListener("keypress", test);

function test(e) {
	keyClick(e.key);
}

function keyClick(key) {
	const tom1 = new Audio("sounds/tom-1.mp3");
	const tom2 = new Audio("sounds/tom-2.mp3");
	const tom3 = new Audio("sounds/tom-3.mp3");
	const tom4 = new Audio("sounds/tom-4.mp3");
	const crash = new Audio("sounds/crash.mp3");
	const kick = new Audio("sounds/kick-bass.mp3");
	const snare = new Audio("sounds/snare.mp3");

	switch (key) {
		case "w":
			tom1.play();
			break;
		case "a":
			tom2.play();
			break;
		case "s":
			tom3.play();
			break;
		case "d":
			tom4.play();
			break;
		case "j":
			crash.play();
			break;
		case "k":
			kick.play();
		case "l":
			snare.play();
			break;
		default: console.log("sound is not defind")
	}
}