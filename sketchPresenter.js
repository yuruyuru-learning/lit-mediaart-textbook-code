window.setup = setup
window.draw = draw
window.preload = preload
window.mouseClicked = mouseClicked
window.keyTyped = keyTyped
window.mousePressed = mousePressed
if (p5Instance) {
    p5Instance.remove()
}
p5Instance = new p5()