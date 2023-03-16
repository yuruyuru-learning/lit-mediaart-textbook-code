{
    let positionX
    function setup() {
        createCanvas(500, 500)
        noStroke()
    }
    function draw() {
        background(0, 0, 40)
        positionX = 0
        for (let i = 0; i < 50; i++) {
            fill(255, positionX / 2, 150, mouseX - positionX)
            rect(positionX, 0, 5, 500)
            positionX += 10
        }
    }
}
