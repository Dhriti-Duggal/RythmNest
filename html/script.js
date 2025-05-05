const music = new Audio('audio/Glass Animals - Heat Waves.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 2,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/2.jpg" 
    },
    {
        id: 3,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 4,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 5,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 6,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 7,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    {
        id: 8,
        songName:`Jhol<br> 
        <div class="subtitle">Maanu and Annural Khalid</div>`,
        poster: "img/1.jpg" 
    },
    

]    

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',() =>{
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click',() =>{
    Artists_bx.scrollLeft -= 330;
});

