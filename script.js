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

let choice = '';

function valueChoice() {
    choice = this.textContent;
}

function sendSubmit() {
    rating.hidden = true;
    ratingThanks.style.display = 'flex';
    text.textContent = `You selected ${choice} out of 5`;
}

function restart () {
    rating.hidden = false;
    ratingThanks.style.display = 'none';
    choice = '';
}

ratingBtn1.addEventListener('click', valueChoice);
ratingBtn2.addEventListener('click', valueChoice);
ratingBtn3.addEventListener('click', valueChoice);
ratingBtn4.addEventListener('click', valueChoice);
ratingBtn5.addEventListener('click', valueChoice);
ratingSubmit.addEventListener('click', sendSubmit);
closeBtn.addEventListener('click', restart);