
function plays() {
    let audio = document.querySelector(".audio")
    if (audio.paused) {
        audio.play();
        console.log("play");
        console.log(document.getElementById("pp-img").src = "Images/pause.png")
    } else {
        audio.pause();
        console.log("pause");
        document.getElementById("pp-img").src = "Images/Resume.png"
    }
}

let previous = document.querySelector(".pre")
let resume = document.querySelector(".pause")


let list = [
    { song: "Victory Anthem", address: "music/Music-01.m4a", img: "Images/victory.jpg" },
    { song: "Millioner", address: "music/milioner.mp3", img: "Images/milioner.jpg" },
    { song: "Childhood", address: "music/childhood.mp3", img: "Images/childhood.jpeg" },
    { song: "SkyFall", address: "music/skyfall.mp3", img: "Images/skyfall.jpg" },
    { song: "Gangster", address: "music/gangster.mp3", img: "Images/GP.jpeg" }
]

let i = 0;

function next() {
    let audio = document.querySelector(".audio")
    let poster = document.getElementById("poster")
    let name = document.getElementById("s-name")
    audio.pause()
    document.getElementById("like").src = "Images/like.png";
    document.getElementById("pp-img").src = "Images/Resume.png"

    if (i == list.length - 1) {
        i = 0
    } else {
        i++
    }

    audio.src = list[i].address
    audio.play();
    document.getElementById("pp-img").src = "Images/pause.png"
    document.getElementById("download").href = list[i].address
    poster.src = list[i].img
    name.innerHTML = list[i].song

}
function pre() {
    let audio = document.querySelector(".audio")
    let poster = document.getElementById("poster")
    let name = document.getElementById("s-name")
    document.getElementById("like").src = "Images/like.png";
    
    console.log
    audio.pause()
    document.getElementById("pp-img").src = "Images/Resume.png"

    if (i == 0) {
        i = list.length - 1
    } else {
        i--
    }

    poster.src = list[i].img
    name.innerHTML = list[i].song

    audio.src = list[i].address
    audio.play();
    document.getElementById("pp-img").src = "Images/pause.png"
    document.getElementById("download").href = list[i].address
}


document.addEventListener("DOMContentLoaded", function () {
    let audio = document.querySelector(".audio")
    let progress = document.querySelector("#progress")

    audio.onloadedmetadata = function () {
        progress.max = audio.duration
        progress.value = audio.currentTime
    }

    if (audio.play()) {
        setInterval(() => {
            progress.value = audio.currentTime
        }, 500);
    }

    progress.onchange = function () {
        audio.currentTime = progress.value
    }
})

let j = 0;
function liked() {
    let like = document.getElementById("like");
    if (j % 2 == 0) {
        like.src = "Images/liked.png"
    } else {
        like.src = "Images/like.png"
    }
    j++
}
 