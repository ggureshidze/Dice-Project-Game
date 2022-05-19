/* var player1Panel = document.querySelector('.player-0-panel');

var scoreElement = player1Panel.querySelector('.player-score')

scoreElement.textContent = 18;

var diceImg = document.querySelector('.dice');

var randomNum = Math.floor(Math.random() * 6) + 1;

console.log(randomNum)



diceImg.src = 'img/dice-' + randomNum + '.png';



console.log(scoreElement.textContent) */


var btnNew = document.querySelector('.btn-new')
var btnRoll = document.querySelector('.btn-roll')
var btnHold = document.querySelector('.btn-hold')
var finalScore = document.querySelector('.final-score')
var dice = document.querySelector('.dice');

var score = [0, 0]
var currentScore = 0;
var activePlayer = 0;
var endGameScore = 20;
var gameStatus = true;
var activePlayerPanel = document.querySelector('.player-0-panel');

var next = function(){

    activePlayerPanel.querySelector('.player-current-score').textContent = 0;
        activePlayerPanel.classList.remove('active')
        activePlayer = activePlayer === 0 ? 1 : 0;
        activePlayerPanel = document.querySelector('.player-' + activePlayer + '-panel');
        activePlayerPanel.classList.add('active');
        currentScore = 0;
        dice.style.display = 'none'
}




btnRoll.addEventListener('click', function(){
    if(gameStatus){
        var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = 'img/dice-' + randomNumber + '.png';
    currentScore += randomNumber;
    dice.style.display = 'block';

    if(randomNumber !==1){
        activePlayerPanel.querySelector('.player-current-score').textContent =currentScore;
    }else{
       next();

    }
    }
    

});

btnHold.addEventListener('click', function(){
    if(gameStatus){
        score[activePlayer] += currentScore;
    activePlayerPanel.querySelector('.player-score').textContent = score[activePlayer];
    activePlayerPanel.querySelector('.player-current-score').textContent = 0;

    if(score[activePlayer] >= endGameScore){
        activePlayerPanel.classList.remove('active');
        activePlayerPanel.classList.add('winner');
        activePlayerPanel.querySelector('.player-name').textContent = 'winner!!!'
        dice.style.display = 'none';
        gameStatus = false;
    }else{
        next();
    }
    }
    
    
    
});

btnNew.addEventListener('click', function(){
    window.location.reload();
    
    

});

/* gameStatus = true;
    score[0, 0] 
    activePlayer = 0;
    currentScore = 0;
    activePlayerPanel = document.querySelector('.player-0-panel');
     */