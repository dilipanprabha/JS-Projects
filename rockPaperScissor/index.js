const arr = ['rock', 'paper', 'scissor'];
const icons = ['<i class="fa-solid fa-hand-back-fist para2"></i>', '<i class="fa-solid fa-hand para2"></i>', '<i class="fa-solid fa-hand-scissors rot para2"></i>'];
const para1 = document.createElement("p");
const para2 = document.createElement('p');
const head3 = document.createElement("h3");
const button = document.getElementById("reset");
const container1 = document.getElementById('container1');
let wins = 0, lose = 0, ties = 0;
let winOrLose = '';

para1.innerHTML = `Wins: ${wins}, Losses: ${lose}, Ties: ${ties}`;
para1.className = "mt-3";
container1.insertBefore(para1, button);

function showResult(result, human = 0, comp) {
    head3.innerHTML = `You ${result}.`;
    if (result == 'Win') wins++;
    else if (result == 'Lose') lose++;
    else {
        ties++;
        head3.innerHTML = `${result}.`;
    }
    para1.innerHTML = `Wins: ${wins}, Losses: ${lose}, Ties: ${ties}`;
    para1.className = "mt-3";
    container1.insertBefore(para1, button);
    para2.innerHTML = `You select ${icons[human]} and Computer select ${icons[comp]}`;
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

function resetScore() {
    wins = 0;
    lose = 0;
    ties = 0;
    head3.remove();
    para1.innerHTML = `Wins: ${wins}, Losses: ${lose}, Ties: ${ties}`;
    para1.className = "mt-3";
    container1.insertBefore(para1, button);
}