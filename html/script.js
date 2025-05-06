// Music Data
const songs = [
    // Trending Songs (Mix of Bollywood and Punjabi)
    {
        id: 1,
        title: "Ae Dil Hai Mushkil",
        artist: "Arijit Singh",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStrv_oPE6vni313HxiliDz1adIGEbzlBmZH7Aczogkb7bLKVGz5chCNwrPYoCHR4KXYr0UjqWiEQHbwYIU6FgaiQ",
        duration: "4:28",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Ae%20Dil%20Hai%20Mushkil%20Title%20Track%20Full%20Video%20-%20Ranbir,%20Anushka,%20Aishwarya%20Arijit%20Pritam.mp3",
        category: "trending",
        genre: "bollywood"
    },
    {
        id: 2,
        title: "Pentagon - Shine",
        artist: "Pentagon",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/shine.jpeg",
        duration: "4:14",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/[MV]%20PENTAGON(펜타곤)%20_%20Shine(빛나리).mp3",
        category: "trending",
        genre: "punjabi"
    },
    {
        id: 3,
        title: "Legends",
        artist: "The Score",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/legends.jpg",
        duration: "3:50",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/1%20The%20score%20-%20Legend.mp3",
        category: "trending",
        genre: "bollywood"
    },
    {
        id: 4,
        title: "Born for Greatness",
        artist: "Papa Roach",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/born%20for%20greatness.jpg",
        duration: "3:36",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/2%20Papa%20Roach%20-%20Born%20For%20Greatness.mp3",
        category: "trending",
        genre: "punjabi"
    },
    {
        id: 5,
        title: "Seven Deadly Sins",
        artist: "Man With A Mission",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/seven%20deadly%20sins.jpg",
        duration: "3:36",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/3%20MAN%20WITH%20A%20MISSION%20-%20Seven%20Deadly%20Sins.mp3",
        category: "trending",
        genre: "bollywood"
    },
    {
        id: 10,
        title: "99",
        artist: "Mob Psycho",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/99.jpeg",
        duration: "4:08",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/99.mp3",
        category: "recommended",
        genre: "bollywood"
    },
    // Recommended Songs
    {
        id: 6,
        title: "Stay Gold",
        artist: "BTS",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/bts.webp",
        duration: "3:30",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/4%20BTS%20(防弾少年団)%20-%20Stay%20Gold%20(Color%20Coded%20Eng%20Rom%20Kan).mp3",
        category: "recommended",
        genre: "bollywood"
    },
    {
        id: 7,
        title: "Euphoria",
        artist: "Jung Kook",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/euphoria.jpg",
        duration: "3:26",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/5%20Euphoria.mp3",
        category: "recommended",
        genre: "punjabi"
    },
    {
        id: 8,
        title: "IDOL",
        artist: "BTS",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/bts.webp",
        duration: "2:58",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/6%20BTS%20(방탄소년단)%20-%20IDOL%20(Color%20Coded%20Eng%20Rom%20Han%20가사).mp3",
        category: "recommended",
        genre: "bollywood"
    },
    {
        id: 9,
        title: "Dynamite",
        artist: "BTS",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/luv.jpg",
        duration: "3:48",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/7%20BTS%20(방탄소년단)%20Dynamite%20Official%20MV.mp3",
        category: "recommended",
        genre: "punjabi"
    },
    {
        id: 10,
        title: "99",
        artist: "Mob Psycho",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/99.jpeg",
        duration: "4:08",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/99.mp3",
        category: "recommended",
        genre: "bollywood"
    },
    {
        id: 1,
        title: "Ae Dil Hai Mushkil",
        artist: "Arijit Singh",
        cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStrv_oPE6vni313HxiliDz1adIGEbzlBmZH7Aczogkb7bLKVGz5chCNwrPYoCHR4KXYr0UjqWiEQHbwYIU6FgaiQ",
        duration: "4:28",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Ae%20Dil%20Hai%20Mushkil%20Title%20Track%20Full%20Video%20-%20Ranbir,%20Anushka,%20Aishwarya%20Arijit%20Pritam.mp3",
        category: "trending",
        genre: "bollywood"
    },
      
    
    
    // New Releases
    
    {
        id: 11,
        title: "Boy With Luv",
        artist: "BTS",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/luv.jpg",
        duration: "3:03",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/9%20BTS%20(방탄소년단)%20작은%20것들을%20위한%20시%20(Boy%20With%20Luv)%20(feat.%20Halsey)%20Official%20MV.mp3",
        category: "new",
        genre: "punjabi"
    },
    {
        id: 12,
        title: "Akhyaan Gulaab",
        artist: "MITRAZ",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/akhian%20gulaab.jpg",
        duration: "4:28",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Akhiyaan%20Gulaab%20-%20MITRAZ%20(LyricsEnglish%20Meaning).mp3",
        category: "new",
        genre: "bollywood"
    },
    
    {
        id: 13,
        title: "Smack That",
        artist: "Akon",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/smack%20that.jpeg",
        duration: "3:20",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Akon%20-%20Smack%20That%20(Lyrics)%20ft.%20Eminem.mp3",
        category: "new",
        genre: "punjabi"
    },
    {
        id: 14,
        title: "Side To Side",
        artist: "Ariana Grande",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/side%20to%20side.jpeg",
        duration: "4:18",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Ariana%20Grande%20ft.%20Nicki%20Minaj%20-%20Side%20To%20Side%20(&%20Pictures).mp3",
        category: "new",
        genre: "bollywood"
    },
    {
        id: 15,
        title: "Attention",
        artist: "Charlie Puth",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/charlie%20puth.webp",
        duration: "3:34",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Attention%20-%20Charlie%20Puth.mp3",
        category: "new",
        genre: "punjabi"
    },
    
    // Browse Albums
    {
        id: 16,
        title: "LUV",
        artist: "BTS",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/luv.jpg",
        duration: "Album",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/BTS%20-%20Boy%20In%20Luv%20(방탄소년단%20-%20상남자)%20[Color%20Coded%20Han%20Rom%20Eng%20가사].mp3",
        category: "album",
        genre: "bollywood"
    },
    {
        id: 17,
        title: "Shawn Mendes",
        artist: "Shawn Mendes",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/shaen%20mendes.jpeg",
        duration: "Album",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Shawn%20Mendes%20%20There's%20Nothing%20Holding%20Me%20Back%20(Lyrics).mp3",
        category: "album",
        genre: "punjabi"
    },
    {
        id: 18,
        title: "Charlie",
        artist: "Charlie Puth",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/charlie%20puth.webp",
        duration: "Album",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Attention%20-%20Charlie%20Puth.mp3",
        category: "album",
        genre: "bollywood"
    },
    {
        id: 19,
        title: "Two Hearts Never Break",
        artist: "Sidhu Moosewala",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/1%20(1).png",
        duration: "Album",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Attention%20-%20Charlie%20Puth.mp3",
        category: "album",
        genre: "punjabi"
    },
    {
        id: 20,
        title: "Whatever",
        artist: "Vishal-Shekhar",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/1%20(4).jpg",
        duration: "Album",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Attention%20-%20Charlie%20Puth.mp3",
        category: "album",
        genre: "bollywood"
    },
    // Top Charts
    {
        id: 21,
        title: "BTS",
        artist: "Various Artists",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/bts.webp",
        duration: "Playlist",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/9%20BTS%20(방탄소년단)%20작은%20것들을%20위한%20시%20(Boy%20With%20Luv)%20(feat.%20Halsey)%20Official%20MV.mp3",
        category: "chart",
        genre: "mixed"
    },
    {
        id: 22,
        title: "BlackPink",
        artist: "Various Artists",
        cover: "https://rukminim3.flixcart.com/image/850/1000/xif0q/poster/q/p/y/small-poster005-black-pink-korean-band-posters-pandit-ji-poster-original-imaggkd7bzzhsq97.jpeg?q=90&crop=false",
        duration: "Playlist",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/BLACKPINK%20-%20DDU-DU%20DDU-DU%20(뚜두뚜두)%20(Color%20Coded%20Eng%20Rom%20Han).mp3",
        category: "chart",
        genre: "bollywood"
    },
    {
        id: 23,
        title: "Charlie Puth",
        artist: "Various Artists",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/charlie%20puth.webp",
        duration: "Playlist",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Attention%20-%20Charlie%20Puth.mp3",
        category: "chart",
        genre: "punjabi"
    },
    {
        id: 24,
        title: "Beat it",
        artist: "Various Artists",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/1%20(3).jpeg",
        duration: "Playlist",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Demon%20Slayer%20Kimetsu%20no%20Yaiba%20-%20OP%20Full%20Gurenge%20.mp3",
        category: "chart",
        genre: "mixed"
    },
    {
        id: 25,
        title: "Hot Hits",
        artist: "Various Artists",
        cover: "file:///C:/Users/LOQ/Desktop/RythmNest/html/assets/1%20(13).jpg",
        duration: "Playlist",
        audio: "file:///C:/Users/LOQ/Desktop/RythmNest/html/songs/Songs%20that%20make%20you%20feel%20like%20the%20Anti-Hero.mp3",
        category: "chart",
        genre: "mixed"
    },
    // Playlists
    {
        id: 26,
        title: "Bollywood Butter",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002b5e1ff6532d6e4e48ea2a9d6",
        duration: "Playlist",
        audio: "",
        category: "playlist",
        genre: "bollywood"
    },
    {
        id: 27,
        title: "Punjabi Hits",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb4baab12b94",
        duration: "Playlist",
        audio: "",
        category: "playlist",
        genre: "punjabi"
    },
    {
        id: 28,
        title: "Romantic Bollywood",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        duration: "Playlist",
        audio: "",
        category: "playlist",
        genre: "bollywood"
    },
    {
        id: 29,
        title: "Punjabi Party",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb4baab12b94",
        duration: "Playlist",
        audio: "",
        category: "playlist",
        genre: "punjabi"
    },
    {
        id: 30,
        title: "90s Bollywood Gold",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        duration: "Playlist",
        audio: "",
        category: "playlist",
        genre: "bollywood"
    },
    // Mood Playlists
    {
        id: 31,
        title: "Happy Vibes",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        duration: "Playlist",
        audio: "",
        category: "mood",
        genre: "mixed"
    },
    {
        id: 32,
        title: "Chill Bollywood",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002b5e1ff6532d6e4e48ea2a9d6",
        duration: "Playlist",
        audio: "",
        category: "mood",
        genre: "bollywood"
    },
    {
        id: 33,
        title: "Punjabi Drive",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb4baab12b94",
        duration: "Playlist",
        audio: "",
        category: "mood",
        genre: "punjabi"
    },
    {
        id: 34,
        title: "Workout Energy",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        duration: "Playlist",
        audio: "",
        category: "mood",
        genre: "mixed"
    },
    {
        id: 35,
        title: "Focus Flow",
        artist: "RythmNest",
        cover: "https://i.scdn.co/image/ab67706f00000002b5e1ff6532d6e4e48ea2a9d6",
        duration: "Playlist",
        audio: "",
        category: "mood",
        genre: "mixed"
    }
];

// Genres Data
const genres = [
    {
        id: 1,
        name: "Bollywood",
        image: "https://i.scdn.co/image/ab67706f00000002b5e1ff6532d6e4e48ea2a9d6",
        color: "#ff9a00"
    },
    {
        id: 2,
        name: "Punjabi",
        image: "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb4baab12b94",
        color: "#1db954"
    },
    {
        id: 3,
        name: "Pop",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#8d67ab"
    },
    {
        id: 4,
        name: "Hip-Hop",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#ba5d07"
    },
    {
        id: 5,
        name: "Rock",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#e61e32"
    },
    {
        id: 6,
        name: "Electronic",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#dc148c"
    },
    {
        id: 7,
        name: "Romantic",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#e8115b"
    },
    {
        id: 8,
        name: "Devotional",
        image: "https://i.scdn.co/image/ab67706f00000002a980b152e708b33d558f44b3",
        color: "#777777"
    }
];

// Artists Data
const artists = [
    // Popular Artists
    {
        id: 1,
        name: "Arijit Singh",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "bollywood"
    },
    {
        id: 2,
        name: "AP Dhillon",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "punjabi"
    },
    {
        id: 3,
        name: "Diljit Dosanjh",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "punjabi"
    },
    {
        id: 4,
        name: "Neha Kakkar",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "bollywood"
    },
    {
        id: 5,
        name: "Badshah",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "bollywood"
    },
    // Indian Artists
    {
        id: 6,
        name: "Sidhu Moosewala",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "punjabi"
    },
    {
        id: 7,
        name: "Shreya Ghoshal",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "bollywood"
    },
    {
        id: 8,
        name: "Karan Aujla",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "punjabi"
    },
    {
        id: 9,
        name: "Sunidhi Chauhan",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "bollywood"
    },
    {
        id: 10,
        name: "Guru Randhawa",
        image: "https://i.scdn.co/image/ab6761610000e5ebba8b9a1d2a6b6b0e8b0e0e0b",
        genre: "punjabi"
    }
];

// Player Functionality
const audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let currentFilter = "all";

// DOM Elements
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBtn = document.getElementById('volume-btn');
const volumeBar = document.getElementById('volume-bar');
const volumeProgress = document.getElementById('volume-progress');
const songCover = document.getElementById('now-playing-cover');
const songTitle = document.getElementById('now-playing-title');
const songArtist = document.getElementById('now-playing-artist');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const filterBtns = document.querySelectorAll('.filter-btn');

// Auth Elements
const logoutBtn = document.getElementById('logout-btn');
const userProfile = document.getElementById('user-profile');
const usernameDisplay = document.getElementById('username-display');
const loginButtons = document.querySelector('.user-actions');

// User Data Management
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// Form Validation
function validateSignupForm(username, email, password, confirmPassword) {
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    
    const users = getUsers();
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert('Email already registered');
        return false;
    }
    
    const usernameExists = users.some(user => user.username === username);
    if (usernameExists) {
        alert('Username already taken');
        return false;
    }
    
    return true;
}

// Initialize player
function loadSong(songIndex) {
    const song = songs[songIndex];
    if (!song.audio) return;
    
    audio.src = song.audio;
    songCover.src = song.cover;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    durationEl.textContent = song.duration;
    currentTimeEl.textContent = "0:00";
    
    // Highlight current song in grid
    document.querySelectorAll('.music-card').forEach(card => {
        card.classList.remove('active');
        if (parseInt(card.dataset.song) === song.id) {
            card.classList.add('active');
        }
    });
}

// Play song
function playSong() {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    audio.play();
}

// Pause song
function pauseSong() {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    audio.pause();
}

// Previous song
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Next song
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex++;
        if (currentSongIndex > songs.length - 1) {
            currentSongIndex = 0;
        }
    }
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update time display
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Set volume
function setVolume(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const volume = clickX / width;
    audio.volume = volume;
    volumeProgress.style.width = `${volume * 100}%`;
    
    // Update volume icon
    if (volume > 0.5) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (volume > 0) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.style.color = isShuffle ? 'var(--accent-blue)' : 'var(--text-primary)';
}

// Toggle repeat
function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.style.color = isRepeat ? 'var(--accent-blue)' : 'var(--text-primary)';
    audio.loop = isRepeat;
}

// Create music card
function createMusicCard(song) {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.dataset.song = song.id;
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${song.cover}" alt="${song.title}">
            <div class="play-btn">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="card-info">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        </div>
    `;
    
    card.addEventListener('click', function() {
        const songId = parseInt(this.dataset.song);
        currentSongIndex = songs.findIndex(s => s.id === songId);
        loadSong(currentSongIndex);
        playSong();
    });
    
    return card;
}

// Create genre card
function createGenreCard(genre) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.backgroundImage = `url(${genre.image})`;
    card.style.borderColor = genre.color;
    
    card.innerHTML = `
        <h3 class="category-title">${genre.name}</h3>
    `;
    
    card.addEventListener('click', function() {
        // Filter songs by genre
        const genreSongs = songs.filter(song => 
            (song.genre === genre.name.toLowerCase() || 
            (genre.name === "Bollywood" && song.genre === "bollywood") ||
            (genre.name === "Punjabi" && song.genre === "punjabi")) && 
            song.audio
        );
        
        const container = document.getElementById('genre-songs');
        container.innerHTML = '';
        
        if (genreSongs.length > 0) {
            genreSongs.forEach(song => {
                container.appendChild(createMusicCard(song));
            });
        } else {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No songs found for ${genre.name}</p>`;
        }
        
        // Scroll to the songs section
        document.getElementById('genre-songs').scrollIntoView({ behavior: 'smooth' });
    });
    
    return card;
}

// Create artist card
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    
    card.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
    `;
    
    const nameElement = document.createElement('p');
    nameElement.className = 'artist-name';
    nameElement.textContent = artist.name;
    
    card.appendChild(nameElement);
    
    card.addEventListener('click', function() {
        // Filter songs by artist
        const artistSongs = songs.filter(song => 
            song.artist.toLowerCase().includes(artist.name.toLowerCase()) && 
            song.audio
        );
        
        const container = document.getElementById('artist-songs');
        container.innerHTML = '';
        
        if (artistSongs.length > 0) {
            artistSongs.forEach(song => {
                container.appendChild(createMusicCard(song));
            });
        } else {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No songs found for ${artist.name}</p>`;
        }
        
        // Scroll to the songs section
        document.getElementById('artist-songs').scrollIntoView({ behavior: 'smooth' });
    });
    
    return card;
}

// Filter content by genre
function filterContent(containerId, category, filter) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    let filteredSongs = songs.filter(song => song.category === category);
    
    if (filter !== 'all') {
        filteredSongs = filteredSongs.filter(song => song.genre === filter);
    }
    
    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            container.appendChild(createMusicCard(song));
        });
    } else {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No ${category} songs found</p>`;
    }
}

// Load content for home page
function loadHomePage() {
    filterContent('trending-songs', 'trending', currentFilter);
    filterContent('recommended-songs', 'recommended', currentFilter);
    filterContent('new-releases', 'new', currentFilter);
}

// Load content for browse page
function loadBrowsePage() {
    filterContent('browse-albums', 'album', currentFilter);
    filterContent('top-charts', 'chart', currentFilter);
}

// Load content for genres page
function loadGenresPage() {
    const popularGenresContainer = document.getElementById('popular-genres');
    const indianGenresContainer = document.getElementById('indian-genres');
    
    popularGenresContainer.innerHTML = '';
    indianGenresContainer.innerHTML = '';
    
    // Add all genres to popular section
    genres.forEach(genre => {
        popularGenresContainer.appendChild(createGenreCard(genre));
    });
    
    // Add Indian specific genres
    const indianGenres = genres.filter(genre => 
        genre.name === 'Bollywood' || genre.name === 'Punjabi' || genre.name === 'Devotional'
    );
    
    indianGenres.forEach(genre => {
        indianGenresContainer.appendChild(createGenreCard(genre));
    });
    
    // Load initial genre songs
    filterContent('genre-songs', 'trending', currentFilter);
}

// Load content for playlists page
function loadPlaylistsPage() {
    filterContent('popular-playlists', 'playlist', currentFilter);
    filterContent('mood-playlists', 'mood', currentFilter);
}

// Load content for artists page
function loadArtistsPage() {
    const popularArtistsContainer = document.getElementById('popular-artists');
    const indianArtistsContainer = document.getElementById('indian-artists');
    
    popularArtistsContainer.innerHTML = '';
    indianArtistsContainer.innerHTML = '';
    
    // Add all artists to popular section
    artists.forEach(artist => {
        popularArtistsContainer.appendChild(createArtistCard(artist));
    });
    
    // Add Indian artists
    const indianArtists = artists.filter(artist => 
        artist.genre === 'bollywood' || artist.genre === 'punjabi'
    );
    
    indianArtists.forEach(artist => {
        indianArtistsContainer.appendChild(createArtistCard(artist));
    });
    
    // Load initial artist songs
    filterContent('artist-songs', 'trending', currentFilter);
}

// Switch between pages
function switchPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId.split('-')[0]) {
            link.classList.add('active');
        }
    });
    
    // Load content for the page
    switch(pageId) {
        case 'home-page':
            loadHomePage();
            break;
        case 'browse-page':
            loadBrowsePage();
            break;
        case 'genres-page':
            loadGenresPage();
            break;
        case 'playlists-page':
            loadPlaylistsPage();
            break;
        case 'artists-page':
            loadArtistsPage();
            break;
    }
}

// Event Listeners
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
progressBar.addEventListener('click', setProgress);
volumeBar.addEventListener('click', setVolume);

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
audio.addEventListener('loadedmetadata', () => {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
});

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = `${this.dataset.page}-page`;
        switchPage(pageId);
    });
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update current filter
        currentFilter = this.dataset.filter;
        
        // Reload current page content with new filter
        const activePage = document.querySelector('.page.active').id;
        switch(activePage) {
            case 'home-page':
                loadHomePage();
                break;
            case 'browse-page':
                loadBrowsePage();
                break;
            case 'genres-page':
                loadGenresPage();
                break;
            case 'playlists-page':
                loadPlaylistsPage();
                break;
            case 'artists-page':
                loadArtistsPage();
                break;
        }
    });
});

// Set initial volume
audio.volume = 0.8;
volumeProgress.style.width = '80%';

// Auth Modal Functionality
const authModal = document.getElementById('auth-modal');
const openLoginBtn = document.getElementById('open-login');
const openSignupBtn = document.getElementById('open-signup');
const closeModalBtn = document.getElementById('close-modal');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

function openModal(formType) {
    authModal.classList.add('active');
    if (formType === 'signup') {
        loginTab.classList.remove('active');
        loginForm.classList.remove('active');
        signupTab.classList.add('active');
        signupForm.classList.add('active');
    } else {
        loginTab.classList.add('active');
        loginForm.classList.add('active');
        signupTab.classList.remove('active');
        signupForm.classList.remove('active');
    }
}

openLoginBtn.addEventListener('click', () => openModal('login'));
openSignupBtn.addEventListener('click', () => openModal('signup'));
closeModalBtn.addEventListener('click', () => authModal.classList.remove('active'));

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    loginForm.classList.add('active');
    signupTab.classList.remove('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    signupForm.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.classList.remove('active');
});

// Close modal when clicking outside
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.classList.remove('active');
    }
});

// Form submission handling
// Sign Up Functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (!validateSignupForm(username, email, password, confirmPassword)) {
        return;
    }
    
    const users = getUsers();
    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password, // Note: In production, never store plain text passwords
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    alert('Account created successfully! Please login.');
    switchToLogin();
    
    // Clear form
    signupForm.reset();
});

// Login Functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        alert('Invalid email or password');
        return;
    }
    
    // Login successful
    setCurrentUser(user);
    updateUIAfterLogin(user);
    toggleAuthModal();
    loginForm.reset();
    
    alert(`Welcome back, ${user.username}!`);
});

// Logout Functionality
logoutBtn.addEventListener('click', () => {
    clearCurrentUser();
    updateUIAfterLogout();
    alert('You have been logged out');
});

// Update UI based on auth state
function updateUIAfterLogin(user) {
    loginButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    usernameDisplay.textContent = user.username;
}

function updateUIAfterLogout() {
    loginButtons.style.display = 'flex';
    userProfile.style.display = 'none';
}

// Check auth state on page load
function checkAuthState() {
    const user = getCurrentUser();
    if (user) {
        updateUIAfterLogin(user);
    } else {
        updateUIAfterLogout();
    }
}

// Initialize auth state
checkAuthState();
// Initialize the app
loadHomePage();