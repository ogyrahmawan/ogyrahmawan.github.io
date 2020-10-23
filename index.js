let score = 0
let time = 5
let mouse = document.getElementById('mouse')
let timer = document.getElementById('timer')
let scoreBoard = document.getElementById('score_container')
let resultPage = document.getElementById('resultPage')
let soundeffect = document.getElementById('soundEffect')


function fadeOutStart(str){
  document.getElementById(str).parentElement.style.opacity = '0'
}

function gameFunction(){
  if (mouse.style.opacity == 0 && time > 0) {
    mouse.style.opacity = 1
    mouse.style.zIndex = 1
    let leftPosition = Math.floor(Math.random()*(50)) + 2
    let topPosition = Math.floor(Math.random()*(40)) + 40
    mouse.style.left = `${leftPosition}%`
    mouse.style.top = `${topPosition}%`
    time--
    timer.innerHTML = `${time}`
    if(time === 0){
      stop()
    }
  } else {
    mouse.style.opacity= '0'
    mouse.style.zIndex= '0'
  }
}
function start(){
  if(time > 0){
    setInterval(gameFunction, 2000)
    timer.style.opacity= '1'
    timer.style.zIndex= '1'
    scoreBoard.style.opacity= '1'
    scoreBoard.style.zIndex= '1'  
  } 
}

function stop(){
  timer.style.opacity= '0'
  timer.style.zIndex= '0'
  scoreBoard.style.opacity= '0'
  scoreBoard.style.zIndex= '0'
  mouse.style.opacity= '0'
  mouse.style.zIndex= '0'
  resultPage.style.opacity='1'
  result()
}

function result(){
  if(score <= 20){
    document.getElementById('statusMisi').innerHTML = `MISSION INCOMPLATED`
    document.getElementById('paragraph').innerHTML = `you have failed to save the kingdom, 
    the population is currently starving. 
    let's rejoin the royal army to save the kingdom and celebrate our victory`
    document.getElementById('status').innerHTML = `YOU ARE NOOB`
  }
}

mouse.addEventListener("click", counterScore)

function counterScore(){
  if(time >= 1){
    score++
    mouse.style.opacity = 0
    document.getElementById('score').innerHTML = `${score}`
  }
}

mouse.addEventListener("click", playAudio)
function playAudio() {
  soundeffect.play();
}