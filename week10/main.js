const body = document.body
const bgColorInput = document.getElementById("bgColor")
const fontColorInput = document.getElementById("fontColor")
const fontSizeInput = document.getElementById("fontSize")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")

const defaults = {
    bgColor: "#ffffff",
    fontColor: "#000000",
    fontSize: "16px"
}

function applySet(settings) {

    let pixelSize
    switch (settings.fontSize) {
        case "small" :
            pixelSize = "12px"
            break
        case "large":
            pixelSize = "20px"
            break
        default :
            pixelSize = "16px"
            break
    }

    body.style.backgroundColor = settings.bgColor
    body.style.color = settings.fontColor
    body.style.fontSize = settings.fontSize

    bgColorInput.value = settings.bgColor
    fontColorInput.value = settings.fontColor
    fontSizeInput.value = settings.fontSize
}

document.addEventListener('DOMContentLoaded', () => {
    const saveSet = localStorage.getItem('userSet')
    if (saveSet) {
        applySet(JSON.parse(saveSet))
    } else {
        applySet(defaults)
    }
})

saveBtn.addEventListener("click", () => {
    const currentSet = {
        bgColor : bgColorInput.value,
        fontColor : fontColorInput.value,
        fontSize : fontSizeInput.value
    }

    localStorage.setItem('userSet', JSON.stringify(currentSet))

    applySet(currentSet)
    alert('save!')
})

resetBtn.addEventListener('click', () => {
    localStorage.removeItem('userSet')

    applySet(defaults)
    alert('reset!')
})