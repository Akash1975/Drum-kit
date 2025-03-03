function playFlashEffect(key) {
    let button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100);
    }
}

function playSound(key) {
    let sounds = {
        a: "./asset/sounds/long-low-tom.wav",
        s: "./asset/sounds/snare-drum-5-91466.mp3",
        d: "./asset/sounds/kick-greg-232043.mp3",
        f: "./asset/sounds/punchy-acoustic-snare-263511.mp3",
        g: "./asset/sounds/drum-tom-2_1bpm_E_minor.wav",
        h: "./asset/sounds/hi-hat-hit-open-98747.mp3",
        j: "./asset/sounds/tr707-crash-cymbal-241376.mp3"
    };

    let soundFile = sounds[key];
    
    if (soundFile) {
        let audio = new Audio(soundFile);
        audio.play().catch(error => console.error("Audio play error:", error));
    } else {
        console.warn("No sound file found for key:", key);
    }
}

document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        let key = this.innerText.toLowerCase();
        playFlashEffect(key);
        playSound(key);
    });
});

document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();
    playFlashEffect(key);
    playSound(key);
});
