(function() {
    const buttonLeft = document.querySelector('[data-button-left]')
    const buttonRight = document.querySelector('[data-button-right]')

    buttonLeft.addEventListener('click', function(){
        let currentCard = document.querySelector('.card.view')
        let prevCard = currentCard.previousElementSibling 
        ? currentCard.previousElementSibling 
        : currentCard.parentNode.lastElementChild;
        prevCard.classList.add('view');
        currentCard.classList.remove('view');
        dotDetectsSlide();
    })


    const nextSlide = () => {
        let currentCard = document.querySelector('.card.view')
        let nextCard = currentCard.nextElementSibling 
        ? currentCard.nextElementSibling 
        : currentCard.parentNode.firstElementChild;
        currentCard.classList.remove('view'); 
        nextCard.classList.add('view');
        dotDetectsSlide();
        
    }

    buttonRight.addEventListener('click', nextSlide)

    function dotDetectsSlide() {
        const dotContainer = document.querySelector('[data-dot-container]').childNodes;
        const cardOne = document.querySelector('#card-one');
        const cardTwo = document.querySelector('#card-two');
        const cardThree = document.querySelector('#card-three');
        const dotOne = document.querySelector('#dot-one');
        const dotTwo = document.querySelector('#dot-two');
        const dotThree = document.querySelector('#dot-three');

        cardOne.classList.contains('view') ? dotOne.checked = true : false;
        cardTwo.classList.contains('view') ? dotTwo.checked = true : false;
        cardThree.classList.contains('view') ? dotThree.checked = true : false;
    }

    function slideDetectsDot() {
        const cardOne = document.querySelector('#card-one');
        const cardTwo = document.querySelector('#card-two');
        const cardThree = document.querySelector('#card-three');
        const dotOne = document.querySelector('#dot-one');
        const dotTwo = document.querySelector('#dot-two');
        const dotThree = document.querySelector('#dot-three');

        if(dotOne.checked) {
            cardTwo.classList.contains('view') ? cardTwo.classList.remove('view') : false;
            cardThree.classList.contains('view') ? cardThree.classList.remove('view') : false;
            cardOne.classList.add('view');
        }


        if(dotTwo.checked) {
            cardOne.classList.contains('view') ? cardOne.classList.remove('view') : false;
            cardThree.classList.contains('view') ? cardThree.classList.remove('view') : false;
            cardTwo.classList.add('view');
        }


        if(dotThree.checked) {
            cardOne.classList.contains('view') ? cardOne.classList.remove('view') : false;
            cardTwo.classList.contains('view') ? cardTwo.classList.remove('view') : false;
            cardThree.classList.add('view');
        }

        dotOne.checked ? cardOne.classList.add('view') : false;
        cardTwo.classList.contains('view') ? dotTwo.checked = true : false;
        cardThree.classList.contains('view') ? dotThree.checked = true : false;
 
    }

    const daDots = document.querySelectorAll('[data-dot-container]');
    daDots.forEach(child => {
        child.addEventListener('click', slideDetectsDot);
    });

    //Uncomment line below to automate
    let automateSlides = setInterval(nextSlide, 3600);
}
)()    