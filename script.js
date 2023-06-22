//INIT
const canvas = document.getElementById("cnvas")
const ctx = cnvas.getContext("2d")
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let ball_speed_X = 2
let ball_speed_Y = -2

const ball = {
    x: canvas.width / 2,
    y: canvas.height/2,
    size: 20
}

const paddle1 = {
    x: 0,
    y: (canvas.height/2) - 50,
    width: 30,
    height: 100
}

const paddle2 = {
    x: canvas.width - 30,
    y: (canvas.height/2) - 50,
    width: 30,
    height: 100
}

function drawBall(x, y, size){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fill()
}

function drawPaddle1(x, y, width, height){
    ctx.fillRect(x, y, width, height)
    ctx.fillRect(x, y, width, height)
}

function drawPaddle2(x, y, width, height){
    ctx.fillRect(x, y, width, height)
    ctx.fillRect(x, y, width, height)
}

function updateBall(){
    if((ball.y - ball.size) <= 0){
        ball_speed_Y = ball_speed_Y * (-1)
    }else if((ball.y + ball.size) >= canvas.height){
        ball_speed_Y = ball_speed_Y * (-1)
    }
    ball.x += ball_speed_X
    ball.y += ball_speed_Y
}

function updatePaddle1(speedY){
    paddle1.y += speedY
}

function updatePaddle2(speedY){
    paddle2.y += speedY
}

function canvas_loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas_update()
    requestAnimationFrame(canvas_loop)
}

function canvas_update(){
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'

    drawBall(ball.x, ball.y, ball.size)
    updateBall(ball_speed_X, ball_speed_Y)
    drawPaddle1(paddle1.x, paddle1.y, paddle1.width, paddle1.height)
    drawPaddle2(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
}


document.addEventListener('keydown', (event) => {
    if(event.key == 'w') updatePaddle1(-10)
    if(event.key == 's') updatePaddle1(10)
    if(event.key == 'ArrowUp') updatePaddle2(-10)
    if(event.key == 'ArrowDown') updatePaddle2(10)
})


// USER CODE
canvas_loop()