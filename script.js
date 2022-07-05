const rating = document.getElementById('container');
const ratingBtn1 = document.getElementById('ratingBtn1');
const ratingBtn2 = document.getElementById('ratingBtn2');
const ratingBtn3 = document.getElementById('ratingBtn3');
const ratingBtn4 = document.getElementById('ratingBtn4');
const ratingBtn5 = document.getElementById('ratingBtn5');
const ratingSubmit = document.getElementById('submit');

const ratingThanks = document.getElementById('rating-container');
const text = document.getElementById('yourChoise');

const closeBtn = document.getElementById('close');

const array = [ratingBtn1, ratingBtn2, ratingBtn3, ratingBtn4, ratingBtn5];

let choice = '';

let useChoice = false;

// User choice number
function valueChoice() {
    choice = this.textContent;
    useChoice = true;
}

// Send choice 
function sendSubmit() {
    if (useChoice) {
     rating.hidden = true;
    ratingThanks.style.display = 'flex';
    text.textContent = `You selected ${choice} out of 5`;   
    }   
}

// Restart function
function restart () {
    rating.hidden = false;
    ratingThanks.style.display = 'none';
    choice = '';
    useChoice = false;
}

array.forEach(btn => {
    btn.addEventListener('click', valueChoice);
});
ratingSubmit.addEventListener('click', sendSubmit);
closeBtn.addEventListener('click', restart);