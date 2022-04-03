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
    })


    const nextSlide = () => {
        let currentCard = document.querySelector('.card.view')
        let nextCard = currentCard.nextElementSibling 
        ? currentCard.nextElementSibling 
        : currentCard.parentNode.firstElementChild;
        currentCard.classList.remove('view'); 
        nextCard.classList.add('view');

        // also advance the dot
        
    }

    buttonRight.addEventListener('click', nextSlide)



    //Uncomment line below to automate
    // let automateSlides = setInterval(nextSlide, 3600);

    //PUSH THIS LOCAL REPO TO GITHUB ASAP!

}

)()    