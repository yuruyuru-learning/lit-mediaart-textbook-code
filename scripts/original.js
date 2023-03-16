{
    let angleA = []
    let angleB = []
    let tailCount = 25
    let boxes = []
    let globalSpeed = 1
    let particleCount = 20
    let gear
    let darkTailCount = 10
    function preload() {
        gear = loadModel('assets/gems/gear.obj')
    }
    function setup() {
        createCanvas(500, 500, WEBGL)
        blendMode(ADD)
        for (let i = 0; i < tailCount; i++) {
            angleA.push(random(-5, 5))
            angleB.push(random(-5, 5))
        }
        for (let i = 0; i < 10; i++) {
            let box = new TailBox()
            box.directionX = sin(angleA[i]) * cos(angleB[i])
            box.directionY = sin(angleA[i]) * sin(angleB[i])
            box.directionZ = cos(angleA[i])
            boxes.push(box)
        }
        camera(700, 700, 700, 0, 0, 0, 0, 1, 0);
    }
    function draw() {
        orbitControl()
        background(0)
        noStroke()
        fill(255)
        noLights()
        colorMode(HSB, 360, 100, 100)
        if (mouseIsPressed) {
            globalSpeed = 3
            particleCount = 75
        } else {
            globalSpeed = 1
            particleCount = 20
        }
        for (let i = 0; i < tailCount; i++) {
            angleA[i] = (noise(frameCount * 0.001 + i + 555) - 0.5) * 2 * 5
            angleB[i] = (noise(frameCount * 0.002 + i + 149) - 0.5) * 2 * 5
        }
        for (let i = 0; i < tailCount; i++) {
            let tailBox = new TailBox()
            tailBox.directionX = sin(angleA[i]) * cos(angleB[i])
            tailBox.directionY = sin(angleA[i]) * sin(angleB[i])
            tailBox.directionZ = cos(angleA[i])
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
        for (let i = 0; i < 1000; i++) {
            stroke(0)
            let a = random(-5, 5)
            let b = random(-5, 5)
            let x = sin(a) * cos(b) * 600
            let y = sin(a) * sin(b) * 600
            let z = cos(a) * 600
            line(0, 0, 0, x, y, z)
        }
        for (let i = 0; i < 5; i++) {
            let tailBox = new TailBox()
            let a = random(-5, 5)
            let b = random(-5, 5)
            tailBox.directionX = sin(a) * cos(b)
            tailBox.directionY = sin(a) * sin(b)
            tailBox.directionZ = cos(a)
            tailBox.scaleDivideFactor = 300
            boxes.push(tailBox)
        }

        colorMode(RGB)

        noStroke()
        pointLight(180, 130, 255, -250, 0, 250)
        pointLight(180, 130, 255, 250, 0, 250)
        pointLight(180, 130, 255, 0, 0, 250)
        specularMaterial(255)
        ambientMaterial(255, 100, 255)
        normalMaterial(255, 100, 255)
        fill(255)

        scale(50)

        rotateX(frameCount * 0.1)

        push()
        rotateY(frameCount * 0.1)
        translate(0, 1, 0)
        model(gear)
        pop()

        push()
        rotateY(-frameCount * 0.1)
        translate(0, -1, 0)
        model(gear)
        pop()
    }
    class TailBox {
        constructor() {
            this.lifetime = 100
            this.movedDistance = 0
            this.directionX = 0
            this.directionY = 0
            this.directionZ = 0
            this.speed = 6
            this.scaleDivideFactor = 100
            this.brightness = 100
        }
        draw() {
            this.lifetime -= globalSpeed
            this.movedDistance += globalSpeed
            push()
            translate(
                this.directionX * this.movedDistance * this.speed,
                this.directionY * this.movedDistance * this.speed,
                this.directionZ * this.movedDistance * this.speed)
            scale(this.lifetime / this.scaleDivideFactor)
            let currentHue = sin(frameCount * 0.003) * 80
            if (currentHue < 0) {
                currentHue *= -1
            }
            fill(170 + currentHue, this.movedDistance / 2 + random(0, 50), this.brightness)
            sphere(10)
            pop()
        }
    }
}