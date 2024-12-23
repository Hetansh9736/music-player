let audio = document.querySelector(".audio")
let previous = document.querySelector(".pre")
let resume = document.querySelector(".pause")
let next = document.querySelector(".next")

function plays(){
    if (audio.paused) {
        audio.play(); // Play the song if it is paused
        console.log("play");
        // pause.innerHTML = '<img src="Images/play.png" alt="Play">'; // Update icon to play
    } else {
        audio.pause(); // Pause the song if it is playing
        console.log("pause");
    
        // pause.innerHTML = '<img src="Images/pause.png" alt="Pause">'; // Update icon to pause
    }
}







