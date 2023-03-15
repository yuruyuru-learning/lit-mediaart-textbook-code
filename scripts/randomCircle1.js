{
    let positionX
    let positionY
    function setup() {
        createCanvas(windowWidth, windowHeight)
        background(0, 0, 40)
        noStroke()
        positionX = 0
    }
    function draw() {
        positionX += 2
        positionY = random(height)
        fill(random(255), 255, random(255), 120)
        ellipse(positionX, positionY, random(100, 200))
    }
}