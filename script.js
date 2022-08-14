console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    
        {songName: "Let me love you ", filePath: "songs/1.mp3", coverPath: "covers/covers1.jpg"},
        {songName: "Baby I can't live without you", filePath: "songs/2.mp3", coverPath: "covers/covers2.jpg"},
        {songName: "Trap me in your heart", filePath:"songs/3.mp3", coverPath: "covers/covers3.jpg"},
        {songName: "I am mad for you my love", filePath:"songs/4.mp3", coverPath: "covers/covers4.jpg"},
        {songName: "Hello baby,how are you", filePath:"songs/5.mp3", coverPath: "covers/covers5.jpg"},
        {songName: "Bhula dena mujhe", filePath:"songs/6.mp3", coverPath: "covers/covers6.jpg"},
        {songName: "chal ghar chalein", filePath:"songs/7.mp3", coverPath: "covers/covers7.jpg"},
       
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays =( ) =>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
       
        })
    
    
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',()=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })    
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

