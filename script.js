const video = document.querySelector('video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('.progress');
const timestamp = document.querySelector('.timestamp');
console.log(timestamp)


function updateStatusVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';

    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor((video.currentTime) / 60);
    if (mins < 10) { mins = `0${mins}` }
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) { secs = `0${secs}` };
    timestamp.innerHTML = `${mins} : ${secs}`
}

function setTimestamp() {

    console.log(progress.value)
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('pause', updateIcon);
video.addEventListener('stop', stopVideo);
video.addEventListener('play', updateIcon);
video.addEventListener('click', updateStatusVideo);
video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('change', setTimestamp);
play.addEventListener('click', updateStatusVideo);


stop.addEventListener('click', stopVideo);