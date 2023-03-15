{
    let pianoImage
    let pianoPlayingImage
    let pianoSound
    let drumImage
    let drumPlayingImage
    let drumSound
    function preload() {
        pianoImage = loadImage('assets/soundTap/piano_image.png')
        pianoPlayingImage = loadImage('assets/soundTap/piano_playing_image.png')
        pianoSound = loadSound('assets/soundTap/piano_sound.mp3')
        drumImage = loadImage('assets/soundTap/drum_image.png')
        drumPlayingImage = loadImage('assets/soundTap/drum_playing_image.png')
        drumSound = loadSound('assets/soundTap/drum_sound.mp3')
    }
    function setup() {
        createCanvas(500, 500)
        imageMode(CENTER);
    }
    function draw() {
        background(0, 0, 40)
        if (pianoSound.isPlaying()) {
            image(pianoPlayingImage, 150, 250)
        } else {
            image(pianoImage, 150, 250)
        }
        if (drumSound.isPlaying()) {
            image(drumPlayingImage, 350, 250)
        } else {
            image(drumImage, 350, 250)
        }
    }
    function mouseClicked() {
        if (mouseX < 250) {
            pianoSound.play();
        } else if (mouseX > 250) {
            drumSound.play()
        }
    }
}