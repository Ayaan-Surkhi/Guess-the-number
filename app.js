let number = document.getElementById('number');
const guess = document.getElementById('guess');
const range = document.getElementById('range');
const feedBack = document.getElementById('feedback');
const playbtn = document.getElementById('play-again');

// Get Random Integer
const createNumber = () => {
 range.addEventListener('change', (e) => {
    const randomInt = Math.floor(Math.random() * e.target.value);
    let numberValue = randomInt;       
    check(numberValue);
});
}

// Check to see if the user is correct and give feedback based on result
const check = (numberValue) => {
    guess.addEventListener('change', (e) => {
    if(e.target.value == numberValue){
    console.log('correct');
    number.innerHTML = `<p>${numberValue}</p>` ;
    feedBack.innerHTML = '<p>Yay you were right!</p>';
    feedBack.style.backgroundColor = 'rgb(36, 216, 36)';
    }else {
    console.log('false');
    if(e.target.value !== numberValue && e.target.value > numberValue){
    feedBack.innerHTML = '<p>Go lower</p>';
    feedBack.style.backgroundColor = 'rgb(216, 36, 36)';
    }else if(e.target.value !== numberValue && e.target.value < numberValue)
    feedBack.innerHTML = '<p>Go higher</p>';
    feedBack.style.backgroundColor = 'rgb(216, 36, 36)'; 
}
    });
    }    

// Play again 
const playAgain = () => {
playbtn.addEventListener('click', (e) => {
e.preventDefault();
range.value = '';
guess.value = '';
number.innerHTML = '';
feedBack.innerHTML = '';
feedBack.style = '';
});
}

playAgain();
createNumber();