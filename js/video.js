// loading the video

var vid = document.getElementById("videoplayer");
vid.load();
vid.autoplay = false;
vid.loop = false;
var volVal = document.getElementById("slider").value;
vid.volume = volVal / 100;
document.getElementById("volume").innerHTML = volVal + "%";

// play button

function playVideo() {
    console.log("played the video")
    vid.play();
}
var playVid = document.getElementById("play").addEventListener("click", playVideo);

// pause button

function pauseVideo() {
    console.log("paused the video")
    vid.pause();
}
var pauseVid = document.getElementById("pause").addEventListener("click", pauseVideo);

// slow down button

function slowDown() {
    if (vid.playbackRate === 0.5) {
        window.alert("Video is at slowest speed!");
    }
    else if (vid.playbackRate === 1) {
        vid.playbackRate = 0.5;
    }
    else {
        vid.playbackRate = 1;
    }
    console.log("Slowed down the video")
}
var slowVid = document.getElementById("slower").addEventListener("click", slowDown);

// speed up button

function speedUp() {
    if (vid.playbackRate === 2) {
        window.alert("Video is at fastest speed!");
    }
    else if (vid.playbackRate === 1) {
        vid.playbackRate = 2;
    }
    else {
        vid.playbackRate = 1;
    }
    console.log("Sped up the video")
}
var speedVid = document.getElementById("faster").addEventListener("click", speedUp);

// skip button

function skipAhead() {
    vid.currentTime += 15;
    if (vid.duration < vid.currentTime) {
        vid.currentTime = 0;
    }
    console.log("skipped forward 15 seconds")
}
var skipVid = document.getElementById("skip").addEventListener("click", skipAhead);

//  mute/unmute button

function muteUnmute() {
    if (vid.muted) {
        // updating the text in the button using innerHTML
        document.getElementById("mute").innerHTML = "Mute";
        vid.muted = false;
        console.log("unmuted the video");
    }
    else {
        // updating the text in the button using innerHTML
        document.getElementById("mute").innerHTML = "Unmute";
        vid.muted = true;
        console.log("muted the video");
    }
}
var muteVid = document.getElementById("mute").addEventListener("click", muteUnmute);

// volume slider

function changeVolume() {
    // convert volume into percentage
    var volVal = document.getElementById("slider").value;
    vid.volume = volVal / 100;
    document.getElementById("volume").innerHTML = volVal + "%";
    console.log("volume changed");
    console.log(vid.volume)
}
var volChange = document.getElementById("slider").addEventListener("change", changeVolume);
