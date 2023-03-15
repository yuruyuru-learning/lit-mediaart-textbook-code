function removeSketch() {
    
    let defaultSetter = document.getElementById("defaultSetter")
    if (!defaultSetter) return
    defaultSetter.remove()

    let sketch = document.getElementById("sketch")
    if (!sketch) return
    sketch.remove()

    let presenter = document.getElementById("sketchPresenter")
    if (!presenter) return
    presenter.remove()
    
    let canvases = document.getElementsByTagName("canvas")
    if (!canvases) return
    if (canvases.length < 1) return
    canvases[0].remove()
}
function changeSketch(name) {
    removeSketch()

    let defaultSetter = document.createElement("script")
    defaultSetter.src = "defaultSetter.js"
    defaultSetter.id = "defaultSetter"
    defaultSetter.async = false
    defaultSetter.onload = 
    document.body.appendChild(defaultSetter)

    let newElement = document.createElement("script")
    newElement.src = "scripts/" + name + ".js"
    newElement.id = "sketch"
    newElement.async = false
    document.body.appendChild(newElement)

    let presenter = document.createElement("script")
    presenter.src = "sketchPresenter.js"
    presenter.id = "sketchPresenter"
    presenter.async = false
    document.body.appendChild(presenter)
}
let p5Instance