var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	volume.innerHTML = "100%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.9;
	console.log("Slower"+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.9;
	console.log("faster"+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5;
}
	else {
		video.currentTime = 0;
		console.log("going back to start");
	}
		video.play();
		console.log(video.duration);
		console.log("currentLocation"+video.currentTime);
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
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(this.value);
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});
