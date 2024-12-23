
function plays(){

let audio = document.querySelector(".audio")



    if (audio.paused) {
        audio.play();
        console.log("play");
        console.log(document.getElementsByClassName("pp-img")[0].src="Images/pause.png")
    } else {
        audio.pause();
        console.log("pause");
        console.log(document.getElementsByClassName("pp-img")[0].src="Images/Resume.png")
    }
}

let previous = document.querySelector(".pre")
let resume = document.querySelector(".pause")
let next = document.querySelector(".next")

let music_list = [
    {song1:"victory Anthem",address:"music/Music-01.m4a" ,img:"Images/victory.jpg"},
    {song1:"victory Anthem",address:"music/Music-01.m4a" ,img:"Images/victory.jpg"},
    {song1:"victory Anthem",address:"music/Music-01.m4a" ,img:"Images/victory.jpg"},
    {song1:"victory Anthem",address:"music/Music-01.m4a" ,img:"Images/victory.jpg"},
    ]





