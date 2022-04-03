(function() {
    const buttonLeft = document.querySelector('[data-button-left]')
    const buttonRight = document.querySelector('[data-button-right]')
    let cardContainer = document.querySelector('[card-container]')

    // let prevPic = currentPicture.previousElementSibling;
    let nextPic;

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
        // also advance the dot
        
    }

    buttonRight.addEventListener('click', nextSlide)

    function dotDetectsSlide() {
        const dotContainer = document.querySelector('[data-dot-container]').childNodes;
        // const currentCard = document.querySelector('.card.view');
        const cardOne = document.querySelector('#card-one');
        const cardTwo = document.querySelector('#card-two');
        const cardThree = document.querySelector('#card-three');
        const dotOne = document.querySelector('#dot-one');
        const dotTwo = document.querySelector('#dot-two');
        const dotThree = document.querySelector('#dot-three');
        console.log(dotContainer.item(1).value)

        cardOne.classList.contains('view') ? dotOne.checked = true : false;
        cardTwo.classList.contains('view') ? dotTwo.checked = true : false;
        cardThree.classList.contains('view') ? dotThree.checked = true : false;


        // if(currentCard == cardContainer.item(1)){
        //     console.log('dot 1 should be blue')
        //     allDots.item(2).classList.add('dot-filled');

        // }

    }




    //Uncomment line below to automate
    // let automateSlides = setInterval(nextSlide, 3600);

    //PUSH THIS LOCAL REPO TO GITHUB ASAP!

}

)()    