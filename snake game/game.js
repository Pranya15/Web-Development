const canvas = document.getElementById("game")
const pen = canvas.getContext("2d")

const cellSize = 30

let snake = [
  {x:120,y:0},
  {x:90,y:0},
  {x:60,y:0},
  {x:30,y:0}
]

let direction = "RIGHT"

let food = generateFood()

let score = 0

let gameOver = false

document.addEventListener("keydown",changeDirection)

function changeDirection(e){

  if(e.key==="ArrowUp" && direction!=="DOWN"){
    direction="UP"
  }

  else if(e.key==="ArrowDown" && direction!=="UP"){
    direction="DOWN"
  }

  else if(e.key==="ArrowLeft" && direction!=="RIGHT"){
    direction="LEFT"
  }

  else if(e.key==="ArrowRight" && direction!=="LEFT"){
    direction="RIGHT"
  }
}

function drawGrid(){

  pen.strokeStyle="#1e293b"

  for(let i=0;i<900;i+=cellSize){

    for(let j=0;j<600;j+=cellSize){

      pen.strokeRect(i,j,cellSize,cellSize)
    }
  }
}

function drawSnake(){

  for(let i=0;i<snake.length;i++){

    if(i===0){
      pen.fillStyle="#22c55e"
    }
    else{
      pen.fillStyle="#16a34a"
    }

    pen.fillRect(
      snake[i].x,
      snake[i].y,
      cellSize,
      cellSize
    )
  }
}

function drawFood(){

  pen.beginPath()

  pen.arc(
    food.x + cellSize/2,
    food.y + cellSize/2,
    cellSize/2.5,
    0,
    Math.PI*2
  )

  pen.fillStyle="#ef4444"
  pen.fill()
}

function moveSnake(){

  let headX = snake[0].x
  let headY = snake[0].y

  if(direction==="RIGHT"){
    headX += cellSize
  }

  else if(direction==="LEFT"){
    headX -= cellSize
  }

  else if(direction==="UP"){
    headY -= cellSize
  }

  else if(direction==="DOWN"){
    headY += cellSize
  }

  let newHead = {
    x:headX,
    y:headY
  }

  if(
    headX < 0 ||
    headY < 0 ||
    headX >= 900 ||
    headY >= 600
  ){
    gameOver = true
  }

  for(let item of snake){

    if(item.x===headX && item.y===headY){
      gameOver = true
    }
  }

  snake.unshift(newHead)

  if(headX===food.x && headY===food.y){

    score++
    food = generateFood()

  }else{
    snake.pop()
  }
}

function generateFood(){

  return{
    x:Math.floor(Math.random()*(900/cellSize))*cellSize,
    y:Math.floor(Math.random()*(600/cellSize))*cellSize
  }
}

function drawScore(){

  pen.fillStyle="white"
  pen.font="25px sans-serif"

  pen.fillText(`Score : ${score}`,20,35)
}

function showGameOver(){

  pen.fillStyle="white"
  pen.font="50px sans-serif"

  pen.fillText("GAME OVER",280,300)

  pen.font="25px sans-serif"

  pen.fillText("Refresh to Restart",340,350)
}

function gameLoop(){

  pen.clearRect(0,0,900,600)

  drawGrid()

  drawSnake()

  drawFood()

  drawScore()

  moveSnake()

  if(gameOver){

    clearInterval(id)
    showGameOver()
  }
}

let id = setInterval(gameLoop,120)