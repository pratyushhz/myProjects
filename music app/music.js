console.log('This is music.js')

const music = document.querySelector("audio");
const play = document.getElementById("play");

const img =document.querySelector("img");

const title = document.getElementById("title");
const singer = document.getElementById("singer");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

// array of an object:
const songs =[ {
    name:"music1",
    title:"Music 1",
    singer:"Singer 1",
},
{
    name:"music2",
    title:"Music 2",
    singer:"Singer 2",
},
{
    name:"music3",
    title:"Music 3",
    singer:"Singer 3",
}]

// functions for play button:
let isPlaying = false;
// for play function:
const playMusic = () => {
    isPlaying= true;
    music.play();
    // replace play button to pause
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause function:
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
} 
play.addEventListener("click", () => {
    // if(isPlaying) {
    //     pauseMusic();
    // } else {
    //     playMusic();
    // }

    // using ternary operator:
    isPlaying ? pauseMusic() : playMusic();
})

// changing the music data:
// define function for changing the song data
const loadSong = (songs) => {
    title.textContent = songs.title;
    singer.textContent = songs.singer;
    music.src = "music/" + songs.name + ".mp3";
    // music.src = `music/${songs.name}.mp3`;
    img.src = "images2/" + songs.name + ".jpg";

}

// calling the array
// loadSong(songs[0]);

let songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex =(songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);






