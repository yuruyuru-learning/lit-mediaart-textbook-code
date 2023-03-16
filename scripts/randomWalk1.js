{
    let positionX
    let positionY
    function setup() {
        createCanvas(windowWidth, windowHeight)
        background(0, 0, 40)
        positionX = width / 2
        positionY = height / 2
    }
    function draw() {
        fill(random(255), random(255), 255)
        ellipse(positionX, positionY, 15)
        let randomNumber = floor(random(4))
        if (randomNumber == 0) {
            positionX += 15
        } else if (randomNumber == 1) {
            positionX -= 15
        } else if (randomNumber == 2) {
            positionY += 15
        } else if (randomNumber == 3) {
            positionY -= 15
        }
    }
}