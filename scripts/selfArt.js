{
    let savedPositionsX = []
    let savedPositionsY = []
    let xTranslation = 0
    function setup() {
        createCanvas(500, 500)
        background(10)
    }
    function draw() {
        savedPositionsX = []
        savedPositionsY = []
        xTranslation += 0.03

        fill(10)
        for (let i = 0; i < 20; i++) {
            stroke(9)
            line(random(-width, width + width), random(0, height*2), 250, 0)
        }

        for (let i = 0; i < width; i+=3) {
            let yellowY = noise(i * 0.01 + xTranslation) * 500
            stroke(random(230, 255), random(200, 255), 60, 50)
            line(i, yellowY - random(10, 30), i, yellowY + random(10, 30))
            let purpleY = 125 + noise(i * 0.01 + xTranslation) * 250
            stroke(random(230, 255), 120, random(200, 255), 100)
            line(i, purpleY - random(2, 15), i, purpleY + random(2, 15))
        }

        background(10, 10)
        fill(11)
        textFont('Satisfy')
        textAlign(CENTER, CENTER)
        textSize(80)
        text('YURUYURU', 250, 100)
        textSize(60)
        text('MediaArt', 250, 400)

        loadPixels()
        let density = pixelDensity()
        for (let i = 0; i < 1000; i++) {
            let randomPosX = random(0, width)
            let randomPosY = random(0, height)
            let offset = (floor(randomPosY * density) * floor(width * density) + floor(randomPosX * density)) * 4;
            if (pixels[offset] == 11 && pixels[offset+1] == 11 && pixels[offset+1] == 11) {
                savedPositionsX.push(randomPosX)
                savedPositionsY.push(randomPosY)
            }
        }
        updatePixels()

        for (let i = 0; i < savedPositionsX.length; i++) {
            stroke(random(230, 255), 120, random(200, 255))
            line(savedPositionsX[i], savedPositionsY[i] + 10, savedPositionsX[i], savedPositionsY[i] - 10)
        }
    }
}