const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progContainer = document.querySelector('.progress-container')
const songTitle = document.querySelector('#title')
const musicImg = document.querySelector('#cover')

//song titles
const songs = ['hey', 'summer', 'ukulele']

//keep track of songs
let songIndex = 2

//intially load song into DOM
loadSong(songs[songsIndex])

//update song details
function loadSong(song) {
    songTitle.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

//even listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})