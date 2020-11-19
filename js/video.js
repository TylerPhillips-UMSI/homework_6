var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower"+video.playbackRate);
	video.playbackRate *=.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster"+video.playbackRate);
	video.playbackRate /=.9;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("currentTime"+video.playbackRate);
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5;
}
	else {
		video.currentTime = 0;
		console.log("going back to start");
	}
		console.log(video.duration);
		console.log("currentLocation"+video.currentTime);
		video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML="Mute";
} else {
	video.muted = true;
	this.innerHTML="Unmute";
}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this / 100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});
