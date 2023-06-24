//INIT
const canvas = document.getElementById("cnvas")
const ctx = cnvas.getContext("2d")
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight
let ball_speed_X = 2
let ball_speed_Y = -2
const left_score_label = document.getElementById("left")
const right_score_label = document.getElementById("right")
let left_score = 0
let right_score = 0

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
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
    } else if(paddle1_intersects()){
        ball_speed_X = ball_speed_X * (-1)
    }else if(paddle2_intersects()){
        ball_speed_X = ball_speed_X * (-1)
    }
    ball.x += ball_speed_X
    ball.y += ball_speed_Y
}

function paddle1_intersects(){
    if(ball.x <= (paddle1.x + paddle1.width) && ball.y >= paddle1.y && ball.y <= (paddle1.y + paddle1.height)){
        return true
    }
    else{
        return false
    }
}

function paddle2_intersects(){
    if(ball.x >= paddle2.x && ball.y >= paddle2.y && ball.y <= (paddle2.y + paddle2.height)){
        return true
    }
    else{
        return false
    }
}

function updatePaddle1(speedY){
    if(paddle1.y < 0) paddle1.y = 0
    else if((paddle1.y + paddle1.height) > canvas.height) paddle1.y = (canvas.height - paddle1.height)
    else paddle1.y += speedY
}

function updatePaddle2(speedY){
    if(paddle2.y < 0) paddle2.y = 0
    else if((paddle2.y + paddle2.height) > canvas.height) paddle2.y = (canvas.height - paddle2.height)
    else paddle2.y += speedY
}

function ball_out(){
    if(ball.x > canvas.width){
        left_score += 1
        left_score_label.innerHTML = left_score
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        return true
    }else if(ball.x < 0){
        right_score += 1
        right_score_label.innerHTML = right_score
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        return true
    }
}

async function canvas_loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ball_out()
    canvas_update()
    requestAnimationFrame(canvas_loop)
}

async function canvas_update(){
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

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
// USER CODE
canvas_loop()