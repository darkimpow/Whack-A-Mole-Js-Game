const holes = document.querySelector('.hole');
const scoreboard = document.querySelector('score');
const moles = document.querySelector('.mole');
let lasthole;
let timeUp = false;
let score = 0;


function randomtime(min, max){
    return Math.round(Math.random() * (max -min) + min);
}

function randomHole(holes){
    const idx = Maqth.floor(Math.random() * holes.length)
    const hole = holes[idx];
    if(hole === lastHole) {
    console.log('nope');
    return randomHole(holes);
    }

    lastHole= hole;
    return hole;
}

function peep(){
 const time= randomTime(200,1000);
 const hole = randomHole(hsoles);   
 hole.classList.add('up');
 setTimeout(()=> {
    hole.classList.remove('up');
    if(!timeUp) peep();
    peep();
 }, time);
}

function startGame(){
scoreboard.textContent = 0;    
timeUp = false;
score = 0;
peep();
setTimeout(() => timeUp = true, 10000)
}

function bonk(e){
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))
