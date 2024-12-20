let temp = 0, intervalID;;
const arr = ['rock', 'paper', 'scissor'];
const icons = ['<i class="fa-solid fa-hand-back-fist i1 para2"></i>', '<i class="fa-solid fa-hand i2 para2"></i>', '<i class="fa-solid fa-hand-scissors rot i3 para2"></i>'];
const reset = document.querySelector("#reset");
const autoplay = document.querySelector("#autoplay");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

reset.addEventListener('click', () => {
    resetValues();
})

autoplay.addEventListener('click', () => {
    autoPlay();
})

rock.addEventListener('click', () => {
    check('rock')
})

paper.addEventListener('click', () => {
    check('paper')
})

scissor.addEventListener('click', () => {
    check('scissor')
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a') autoPlay();
    else if (event.key === 'r') check('rock');
    else if (event.key === 'p') check('paper');
    else if (event.key === 's') check('scissor'); 
    else if (event.key === 'Backspace') resetValues();
})

//HTML Elements are created
const para1 = document.createElement("p");
const para2 = document.createElement('p');
const head3 = document.createElement("h3");

// Fetch HTML Elements
const button = document.getElementById("reset");
const container1 = document.getElementById('container1');
let winOrLose = '';

// Fetch scores from localStorage
let scores = JSON.parse(localStorage.getItem("scores")) || { wins: 0, loses: 0, ties: 0 };

showWinOrLose();

function showWinOrLose() {
    para1.innerHTML = `Wins: ${scores.wins}, Losses: ${scores.loses}, Ties: ${scores.ties}`;
    para1.className = "mt-3";
    container1.insertBefore(para1, button);
}

function showResult(result, human, comp) {
    head3.innerHTML = `You ${result}.`;
    if (result == 'Win') scores.wins++;
    else if (result == 'Lose') scores.loses++;
    else {
        scores.ties++;
        head3.innerHTML = `${result}.`;
    }
    localStorage.setItem("scores", JSON.stringify(scores));
    showWinOrLose();
    para2.innerHTML = `You picked ${icons[human]} and Computer picked ${icons[comp]}`;
    container1.insertBefore(para2, para1)
    head3.className = "text-center";
    container1.insertBefore(head3, para2);
}

function check(human) {
    let rand = random();
    const comp = arr[rand];
    if (human == 'rock' && comp == 'scissor') winOrLose = 'Win';
    else if (human == 'scissor' && comp == 'rock') winOrLose = 'Lose';
    else if (human == 'paper' && comp == 'rock') winOrLose = 'Win';
    else if (human == 'rock' && comp == 'paper') winOrLose = 'Lose';
    else if (human == 'scissor' && comp == 'paper') winOrLose = 'Win';
    else if (human == 'paper' && comp == 'paper') winOrLose = 'Ties';
    else if (human == 'scissor' && comp == 'scissor') winOrLose = 'Ties';
    else if (human == 'rock' && comp == 'rock') winOrLose = 'Ties';
    else winOrLose = 'Lose';
    if (human == 'rock') showResult(winOrLose, 0, rand);
    else if (human == 'paper') showResult(winOrLose, 1, rand);
    else showResult(winOrLose, 2, rand);
}

function random() {
    let rand = Math.random() * 3;
    return Math.floor(rand)
}

function resetValues() {
    const sure = confirm("Are you sure you want to reset the score?");
    if (sure) {
        scores.wins = 0;    
        scores.loses = 0;
        scores.ties = 0;
        localStorage.removeItem("scores");
        head3.remove();
        para2.remove();
        showWinOrLose();
    }
}

function autoPlay() {
    if (autoplay.textContent === "Auto Play") {
        autoplay.textContent = "Stop Playing";
    } else {
        autoplay.textContent = "Auto Play"
    }
    if (temp === 0) {
        intervalID = setInterval(() => {
            const comp = arr[random()];
            check(comp);
        }, 1000);
        temp = 1;
    } else {
        clearInterval(intervalID);
        temp = 0;
    }
}