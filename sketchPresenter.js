window.setup = setup
window.draw = draw
if (p5Instance) {
    p5Instance.remove()
}
p5Instance = new p5()