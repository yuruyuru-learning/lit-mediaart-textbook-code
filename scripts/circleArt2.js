{
    function setup() {
        createCanvas(500, 500)
    }
    function draw() {
        background(0, 0, 40, 20)
        noStroke()
        fill(255, mouseX / 4, mouseY / 4)
        ellipse(mouseX, mouseY, 60)
        ellipse(mouseX, mouseY - 50, 30)
        ellipse(mouseX - 40, mouseY - 40, 30)
        ellipse(mouseX + 40, mouseY - 40, 30)
    }
}