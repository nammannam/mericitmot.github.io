document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    const audio = document.getElementById("backgroundMusic");

    // Get the star (button) element
    const starButton = document.getElementById("toggleAudio");

    // Add event listener to the star (button)
    starButton.addEventListener("click", function(e) {
        // Prevent the default anchor behavior (if any)
        e.preventDefault();

        // Check if audio is paused or not
        if (audio.paused) {
            // If paused, play the audio
            audio.play();
        } else {
            // If playing, pause the audio
            audio.pause();
        }
    });
});


function makeSnow(){
    const snow = document.createElement('div');
    const size = Math.random() *4.5 + 3.5;
    snow.className = 'snow';
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.opacity = size / 8;
    if( size < 7){
        snow.style.zIndex = -5;
    }

    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snow);
    setTimeout(()=> snow.remove(), 5000);


}

setInterval(makeSnow, 40);