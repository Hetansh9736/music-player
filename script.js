
function plays() {

    let audio = document.querySelector(".audio")



    if (audio.paused) {
        audio.play();
        console.log("play");
        console.log(document.getElementById("pp-img").src = "Images/pause.png")
    } else {
        audio.pause();
        console.log("pause");
        console.log(document.getElementById("pp-img").src = "Images/Resume.png")
    }
}

let previous = document.querySelector(".pre")
let resume = document.querySelector(".pause")


let list = [
    { song: "victory Anthem", address: "music/Music-01.m4a", img: "Images/victory.jpg" },
    { song: "millioner", address: "music/milioner.mp3", img: "Images/milioner.jpg" },
    { song: "victory Anthem", address: "music/childhood.mp3", img: "Images/victory.jpg" },
    { song: "victory Anthem", address: "music/skyfall.mp3", img: "Images/victory.jpg" },
]

let i = 0;

function next() {
    let audio = document.querySelector(".audio")
    audio.pause()
    console.log(document.getElementById("pp-img").src = "Images/Resume.png")

    if (i == list.length - 1) {
        i = 0
    } else {
        i++
    }
    console.log(audio.src = list[i].address)

    audio.src = list[i].address
    audio.play();


}
function pre() {
    let next = document.querySelector(".next")

    let audio = document.querySelector(".audio")
    audio.pause()
    console.log(document.getElementById("pp-img").src = "Images/Resume.png")

    if (i == 0) {
        i = list.length - 1
    } else {
        i--
    }

    console.log(audio.src = list[i].address)

    audio.src = list[i].address
    audio.play();
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