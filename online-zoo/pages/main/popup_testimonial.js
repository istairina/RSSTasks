(function () {
  
    const textBlock = document.querySelectorAll('.testimonials__textblock');
    const shadow = document.querySelector('.burger-shadow');
    const popupCloseItem = document.querySelector('.popup-close');
    const popupBox = document.querySelector('.popup-box');

textBlock[0].addEventListener('click', () => {
    if (window.innerWidth <= 640) {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[0].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");
    }
})

textBlock[1].addEventListener('click', () => {
    if (window.innerWidth <= 640) {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[1].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");
    }
})

textBlock[2].addEventListener('click', () => {
    if (window.innerWidth <= 640) {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[2].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");
    }
})

popupCloseItem.addEventListener('click', () => {
    
    shadow.style.display = 'none';
    popupCloseItem.style.display = 'none';
    popupBox.style.display = 'none';
    popupBox.children[1].innerHTML = "";
    popupBox.children[1].children[3].classList.remove("popup-text");
})

shadow.addEventListener('click', () => {
    shadow.style.display = 'none';
    popupCloseItem.style.display = 'none';
    popupBox.style.display = 'none';
    popupBox.children[1].innerHTML = "";
    popupBox.children[1].children[3].classList.remove("popup-text");
})
    
    
}())