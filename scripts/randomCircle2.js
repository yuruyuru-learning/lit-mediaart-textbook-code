{
    let positionX
    let positionY
    function setup() {
        createCanvas(windowWidth, windowHeight)
        background(0, 0, 40)
        noStroke()
        positionY = height
    }
    function draw() {
        positionX = random(width)
        positionY -= 5
        fill(random(255), random(255), 255, 120)
        ellipse(positionX, positionY, random(50, 150))
        if (positionY < 0) {
            positionY = height
        }
    }
}