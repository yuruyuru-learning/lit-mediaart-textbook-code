{
    let angleA = []
    let tailCount = 35
    let boxes = []
    let globalSpeed = 1
    let darkTailCount = 10
    let diamond
    function preload() {
        diamond = loadImage("assets/original/diamond.png")
    }
    function setup() {
        createCanvas(500, 500)
        imageMode(CENTER)
        for (let i = 0; i < tailCount; i++) {
            angleA.push(random(-5, 5))
        }
        for (let i = 0; i < 10; i++) {
            let box = new TailBox()
            box.directionX = cos(angleA[i])
            box.directionY = sin(angleA[i])
            boxes.push(box)
        }
        diamond.blend(0, 0, 638, 640, 0, 0, 638, 640, OVERLAY)
    }
    function draw() {
        translate(width/2, height/2)
        noStroke()
        fill(255)
        colorMode(HSB, 360, 100, 100, 100)
        if (mouseIsPressed) {
            globalSpeed = 3
            particleCount = 75
        } else {
            globalSpeed = 1
            particleCount = 20
        }
        for (let i = 0; i < tailCount; i++) {
            angleA[i] = (noise(frameCount * 0.001 + i + 555) - 0.5) * 2 * 5
        }
        for (let i = 0; i < tailCount; i++) {
            let tailBox = new TailBox()
            tailBox.directionX = cos(angleA[i])
            tailBox.directionY = sin(angleA[i])
            if (i > tailCount - darkTailCount - 1) {
                tailBox.brightness = 0
            }
            boxes.push(tailBox)
        }
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].draw()
            if (boxes[i].lifetime < 0) {
                boxes.splice(i, 1)
            }
        }
        for (let i = 0; i < 300; i++) {
            stroke(0, 50)
            let a = random(-5, 5)
            let x = cos(a) * 600
            let y = sin(a) * 600
            line(0, 0, x, y)
        }
        for (let i = 0; i < 5; i++) {
            let tailBox = new TailBox()
            let a = random(-5, 5)
            tailBox.directionX = cos(a)
            tailBox.directionY = sin(a)
            tailBox.scaleDivideFactor = 300
            boxes.push(tailBox)
        }
        push()
        scale(0.05)
        image(diamond, 0, 0)
        fill(0, 0, 0, random(0, 20))
        noStroke()
        scale(20)
        ellipse(0, 0, 50, 50)
        pop()
    }
    class TailBox {
        constructor() {
            this.lifetime = 70
            this.movedDistance = 0
            this.directionX = 0
            this.directionY = 0
            this.speed = 6
            this.scaleDivideFactor = 30
            this.brightness = 100
        }
        draw() {

            let currentPos = createVector(
                this.directionX * this.movedDistance * this.speed,
                this.directionY * this.movedDistance * this.speed)
            let mousePos = createVector(
                mouseX - 250,
                mouseY - 250
            )
            let distance = dist(currentPos.x, currentPos.y, mousePos.x, mousePos.y)
            let difference = createVector(currentPos.x - mousePos.x, currentPos.y - mousePos.y)
            if (distance < 40) {
                this.directionX += difference.x * 0.001
                this.directionY += difference.y * 0.001
            }

            this.lifetime -= globalSpeed
            this.movedDistance += globalSpeed
            push()
            translate(
                currentPos.x,
                currentPos.y)
            scale(this.lifetime / this.scaleDivideFactor)
            let currentHue = sin(frameCount * 0.003) * 80
            if (currentHue < 0) {
                currentHue *= -1
            }
            fill(170 + currentHue, this.movedDistance / 2 + random(10, 25), this.brightness)
            ellipse(0, 0, 10)
            pop()
        }
    }
}