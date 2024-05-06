
function alternarSlides() {
    var slides = document.querySelectorAll('.slides input[type="radio"]'); 
    var checkedIndex = Array.from(slides).findIndex(input => input.checked);
    var nextIndex = checkedIndex === slides.length - 1 ? 0 : checkedIndex + 1;
    slides[nextIndex].checked = true;
}

setInterval(alternarSlides, 3000);