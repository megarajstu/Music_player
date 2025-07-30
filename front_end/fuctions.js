const { use } = require("react");

const play_list = [use("song1.mp3"), use("song2.mp3"), use("song3.mp3")];
play = ()=>{
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;';
    } else {
        audio.pause();
        playButton.innerHTML = '&#9654;'; 
    }
}

prev = ()=>{
    const audio = document.getElementById('');

}