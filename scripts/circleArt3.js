function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0, 0, 40)
}
function draw() {
    noStroke()
    fill(255, mouseX / 4, mouseY / 4)
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 60)
        ellipse(mouseX, mouseY - 50, 30)
        ellipse(mouseX - 40, mouseY - 40, 30)
        ellipse(mouseX + 40, mouseY - 40, 30)
    }
}
