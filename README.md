# Music_player

A simple, elegant web-based music player with a beautiful dark-themed interface.

## Features

- 🎵 Play/pause controls
- ⏭️ Next/previous track navigation
- 🎚️ Progress bar with seek functionality
- ⏱️ Current time and duration display
- 🔄 Automatic playback of next track when current song ends
- 📱 Responsive design

## How to Use

1. Open `front_end/dashboard.html` in your web browser
2. Click the play button (▶) to start playing music
3. Use the previous (◀◀) and next (▶▶) buttons to navigate between tracks
4. Click on the progress bar to seek to a specific time in the song
5. The player will automatically play the next track when the current one ends

## Project Structure

```
Music_player/
├── front_end/
│   ├── dashboard.html    # Main HTML page
│   ├── script.js          # JavaScript functionality
│   └── style.css          # Styling
└── my_playlist/           # Music files folder
    └── [MP3 files]
```

## Adding More Songs

To add more songs to your playlist:
1. Add your MP3 files to the `my_playlist/` folder
2. Edit `front_end/script.js` and add new entries to the `playlist` array with the song title, artist, and file path

## Browser Compatibility

This music player works in all modern browsers that support HTML5 audio (Chrome, Firefox, Safari, Edge).

