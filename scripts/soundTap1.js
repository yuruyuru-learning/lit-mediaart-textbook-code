{
    let pianoImage
    let pianoPlayingImage
    let pianoSound
    function preload() {
        pianoImage = loadImage('assets/soundTap/piano_image.png')
        pianoPlayingImage = loadImage('assets/soundTap/piano_playing_image.png')
        pianoSound = loadSound('assets/soundTap/piano_sound.mp3')
    }
    function setup() {
        createCanvas(500, 500)
        imageMode(CENTER)
    }
    function draw() {
        background(0, 0, 40)
        if (pianoSound.isPlaying()) {
            image(pianoPlayingImage, 250, 250)
        } else {
            image(pianoImage, 250, 250)
        }
    }
    function mouseClicked() {
        pianoSound.play()
    }
}