let slideNumber = 1;
showSlide(slideNumber);


function plusSlide(n) {
    showSlide(slideNumber += n);
}



function showSlide(n){
    let i;
    let slides = document.getElementsByClassName('slides');
    if (n>slides.length) {slideNumber = 1};
    if (n<1) {slideNumber = slides.length}
    for (i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideNumber-1].style.display='block';

}


function func(){
    let elem = document.getElementById('video-container');
    let obj = document.getElementById('our-stars-containers')
    let height = elem.offsetHeight;
    const height1 = height ;
    obj.style.marginTop=`${height1}px`;


}
func();
