
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const imagesToShow = 3; // Number of visible images
const totalImages = images.length;

// Show slide at the current index
function showSlide(index) {
    const slideWidth = slides.clientWidth / imagesToShow;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Move to the next set of images
function nextSlide() {
    if (currentIndex < totalImages - imagesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the beginning
    }
    showSlide(currentIndex);
}

// Move to the previous set of images
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - imagesToShow; // Jump to the end
    }
    showSlide(currentIndex);
}

// Add event listeners to buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);









const card = document.getElementById("card")
const goToBack = document.getElementById("goToBack")
const goToFront = document.getElementById("goToFront")


goToBack.addEventListener("click", ()=>{
    card.style.transform = "rotateY(180deg)"
})

goToFront.addEventListener("click", ()=>{
    card.style.transform = "rotateY(0deg)"

})



function openNav(){
    document.getElementById("mySidenav").style.width= "100%";
}

function Closenave(){
    document.getElementById("mySidenav").style.width = "0%";
}



const buttons = document.querySelectorAll(".readMoreButton")
const spans = document.querySelectorAll(".moreText")


for(let i=0; buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        spans[i].classList.toggle("moreText");

        if(buttons[i].innerText==="Read More"){
            buttons[i].innerText="Read Less"

        }else{
            buttons[i].innerText="Read More"

        }
    })

}

