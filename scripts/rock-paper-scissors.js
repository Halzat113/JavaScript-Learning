let computer;
let result = '';
let score= JSON.parse(localStorage.getItem('score'))||
    {
        wins: 0,
        losses: 0,
        ties: 0
    };

displayMsg();
/*
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

 */
function pickComputerMove(){
    const randNum = Math.floor(Math.random()*3);   //this will create a random number 0 to 2
    if (randNum===0){
        computer = 'rock';
    }else if (randNum===1){
        computer = 'paper';
    }else {
        computer = 'scissors';
    }
}

function displayMsg(playerMove){
    if (result.includes('win')){
        score.wins++;
    }else if (result.includes('lose')){
        score.losses++;
    }else if (result.includes('tie')){
        score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-move')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> - Computer <img src="images/${computer}-emoji.png" class="move-icon">`;
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(player_move){
    if (player_move==='rock'){
        if (computer==='rock'){
            result = 'Tie';
        } else if(computer==='paper') {
            result = 'You lose';
        }else {
            result = 'You win';
        }
    } else if (player_move==='paper'){
        if (computer==='rock'){
            result = 'You win';
        } else if(computer==='paper') {
            result = 'Tie';
        }else {
            result = 'You lose';
        }
    }else if (player_move==='scissors'){
        if (computer==='rock'){
            result = 'you win';
        } else if(computer==='paper') {
            result = 'You lose';
        }else {
            result = 'Tie';
        }
    }
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    result = '';
    localStorage.removeItem('score');
    displayMsg();
    document.querySelector('.js-move').innerHTML='';
    console.log('Scores have been reset');
}