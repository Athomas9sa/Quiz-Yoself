'use strict;'

const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const feedbackButton = document.getElementById('feedbackButton');
const closeButton = document.querySelector('.close-button');
const modalSubmit = document.querySelector('.modal-submit');



feedbackButton.addEventListener('click', function () {
    modalOverlay.classList.toggle('open');
    console.log('click');
});


closeButton.addEventListener('click', function () {
    modalOverlay.classList.toggle('open');
})

modalSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    modalContent.innerHTML = `<p class="feedback-text">Thank You for your feedback!</p>            <p>
    <a id="playAgain" class="play-again" href="selection.html">Play again?</a>
</p>`
})
