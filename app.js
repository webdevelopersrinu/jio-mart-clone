let slides=document.querySelector(".corousel-inner");
let prevBtn=document.querySelector(".prev");
let nextBtn=document.querySelector(".next");
let indicator=document.querySelectorAll(".indicator");
let currentIndex=0;
function goToSlide(index){
    if(window.innerWidth>1064){
        slides.style.transform=`translateX(-${index*25.8}%)`;
    }
    if(window.innerWidth<=1064){
        slides.style.transform=`translateX(-${index*48}%)`;
    }
    if(window.innerWidth<=596){
        slides.style.transform=`translateX(-${index*90}%)`;
    }
    indicator.forEach(indicat => indicat.classList.remove('active'));
    indicator[index].classList.add('active');
    currentIndex=index;
}
function goToNextSlide(){
    currentIndex=currentIndex < 13?currentIndex+1:currentIndex=0 ;
    goToSlide(currentIndex);
}
function goToPrevSlide(){
    currentIndex=(currentIndex -1 + slides.children.length) % slides.children.length;
    goToSlide(currentIndex);
}
nextBtn.addEventListener('click',goToNextSlide);
prevBtn.addEventListener('click',goToPrevSlide);
indicator.forEach((indica,index) =>{
    indica.addEventListener('click',()=> goToSlide(index));
});
function autoSlide(){
   goToNextSlide(); 
}

setInterval(autoSlide,4000)

