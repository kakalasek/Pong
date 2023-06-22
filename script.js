//INIT
const canvas = document.getElementById("cnvas")
const ctx = cnvas.getContext("2d")
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

window.addEventListener

function canvs_init(){
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'

    let paddle1 = new Paddle(0, (canvas.height/2) - 50)
    let paddle2 = new Paddle(canvas.width - 30, (canvas.height/2) - 50)

    paddle1.draw()
    paddle2.draw()

    let ball = new Ball((canvas.width / 2), (canvas.height/2))
    ball.draw()
}

class Ball{
    constructor(x, y){
        this.x = x
        this.y = y
        this.speedX = 3
        this.speedY = 3
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI)
        ctx.fill()
    }
}

class Paddle{
    constructor(x, y){
        this.x = x
        this.y = y
        this.speedY = 3
    }
    draw(){
        ctx.fillRect(this.x, this.y, 30, 100)
        ctx.fillRect(this.x, this.y, 30, 100)
    }
    move(direction){
        if(direction == 1) this.y -= this.speedY
        if(direction == 2) this.y += this.speedY
    }
}


// USER CODE
canvs_init()