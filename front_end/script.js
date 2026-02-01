// Playlist with songs from my_playlist folder
const playlist = [
    {
        title: "Akka Petha Jakkavandi",
        artist: "Unknown Artist",
        src: "/my_playlist/Akka Petha Jakkavandi.mp3"
    },
    {
        title: "Molachu Moonu - Bass Boosted",
        artist: "Velayudham - Vijay",
        src: "/my_playlist/Molachu Moonu _ Bass Boosted _ Velayudham _ Vijay _ BK Atmos.mp3"
    },
    {
        title: "Padi Padi Leche",
        artist: "Unknown Artist",
        src: "/my_playlist/Padi Padi Leche.mp3"
    },
    {
        title: "Padigaapulo",
        artist: "Unknown Artist",
        src: "/my_playlist/Padigaapulo.mp3"
    },
    {
        title: "Pougalaam",
        artist: "Unknown Artist",
        src: "/my_playlist/Pougalaam.mp3"
    },
    {
        title: "Prema Velluva",
        artist: "Hit - 3 (Telugu)",
        src: "/my_playlist/Prema Velluva (From  Hit - 3 ) (Telugu).mp3"
    },
    {
        title: "Thaensudare",
        artist: "Lover",
        src: "/my_playlist/Thaensudare (From  Lover ).mp3"
    },
    {
        title: "Ud-daa Punjab",
        artist: "Vishal Dadlani & Amit Trivedi",
        src: "/my_playlist/Ud-daa Punjab - Full Video _ Udta Punjab _ Vishal Dadlani & Amit Trivedi _ Shahid Kapoor.mp3"
    }
];

let currentTrackIndex = 0;
let audio = null;

// Initialize audio element and load first track
function init() {
    audio = document.getElementById('audio');
    loadTrack(currentTrackIndex);
    
    // Update progress bar as song plays
    audio.addEventListener('timeupdate', updateProgress);
    
    // Handle song end - play next track
    audio.addEventListener('ended', next);
    
    // Allow clicking on progress bar to seek
    const progressBar = document.querySelector('.progress-bar');
    progressBar.addEventListener('input', seekTrack);
}

// Load a track by index
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    
    // Update UI
    document.querySelector('.song-title').textContent = track.title;
    document.querySelector('.artist').textContent = track.artist;
    
    // Reset progress
    document.querySelector('.current-time').textContent = '0:00';
    document.querySelector('.progress-bar').value = 0;
}

// Play or pause the current track
function play() {
    const playButton = document.getElementById('play');
    
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<span>&#10074;&#10074;</span>';
    } else {
        audio.pause();
        playButton.innerHTML = '<span>&#9654;</span>';
    }
}

// Go to previous track
function prev() {
    // Remember if we were playing
    const wasPlaying = !audio.paused;
    
    currentTrackIndex--;
    
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    
    loadTrack(currentTrackIndex);
    
    // If music was playing, continue playing
    if (wasPlaying) {
        audio.play();
    }
}

// Go to next track
function next() {
    // Remember if we were playing
    const wasPlaying = !audio.paused;
    
    currentTrackIndex++;
    
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    
    loadTrack(currentTrackIndex);
    
    // If music was playing, continue playing
    if (wasPlaying) {
        audio.play();
    }
}

// Update progress bar and time display
function updateProgress() {
    if (!audio.duration) return;
    
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
    // Update progress bar
    const progressBar = document.querySelector('.progress-bar');
    progressBar.max = duration;
    progressBar.value = currentTime;
    
    // Update time displays
    document.querySelector('.current-time').textContent = formatTime(currentTime);
    document.querySelector('.duration').textContent = formatTime(duration);
}

// Seek to a specific time in the track
function seekTrack() {
    const progressBar = document.querySelector('.progress-bar');
    audio.currentTime = progressBar.value;
}

// Format time in minutes:seconds
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);
