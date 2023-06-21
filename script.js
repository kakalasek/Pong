//INIT
const canvas = document.getElementById("cnvas")
const ctx = cnvas.getContext("2d")
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

function canvs_init(){
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'

    ctx.fillRect(0, (canvas.height/2) - 50, 30, 100)
    ctx.fillRect(canvas.width - 30, (canvas.height/2) - 50, 30, 100)

    ctx.beginPath()
    ctx.arc((canvas.width / 2), (canvas.height/2), 20, 0, 2 * Math.PI)
    ctx.fill()
}



// USER CODE
canvs_init()