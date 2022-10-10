(function () {
    const textBlock = document.querySelectorAll('.testimonials__textblock');
    const shadow = document.querySelector('.burger-shadow');
    const popupCloseItem = document.querySelector('.popup-close');
    const popupBox = document.querySelector('.popup-box');
    
 /*   const logo = document.querySelector('.logodiv');
    const logotext = document.querySelector('.logo-p');
    const bamboo = document.querySelector('.logo-bamboo');
    const designer = document.querySelector('.header__designedby');


    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_menu_active');
        logo.classList.add('logodiv-burger');
        logotext.classList.add('logo-p-burger');
        bamboo.classList.add('logo-bamboo-burger');
        bamboo.src = "../../assets/images/logo/bamboo_orange.svg";
        designer.classList.add('header__designedby-burger');
        shadow.style.display = 'block';
        menu.style.display = 'block';
        menuCloseItem.style.display = 'block';
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_menu_active');
        logo.classList.remove('logodiv-burger');
        logotext.classList.remove('logo-p-burger');
        bamboo.classList.remove('logo-bamboo-burger');
        bamboo.src = "../../assets/images/logo/bamboo.svg";
        designer.classList.remove('header__designedby-burger');
        designer.classList.remove('header__designedby-burger');
        shadow.style.display = 'none';
        menu.style.display = 'none';
        menuCloseItem.style.display = 'none';
    })

    shadow.addEventListener('click', () => {
        menu.classList.remove('header_menu_active');
        logo.classList.remove('logodiv-burger');
        logotext.classList.remove('logo-p-burger');
        bamboo.classList.remove('logo-bamboo-burger');
        bamboo.src = "../../assets/images/logo/bamboo.svg";
        designer.classList.remove('header__designedby-burger');
        designer.classList.remove('header__designedby-burger');
        shadow.style.display = 'none';
        menu.style.display = 'none';
        menuCloseItem.style.display = 'none';
    })
*/


textBlock[0].addEventListener('click', () => {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[0].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");

})

textBlock[1].addEventListener('click', () => {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[1].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");
})

textBlock[2].addEventListener('click', () => {
    shadow.style.display = 'block';
    popupCloseItem.style.display = 'block';
    popupBox.style.display = 'block';
    popupBox.children[1].innerHTML = textBlock[2].innerHTML;
    popupBox.children[1].children[3].classList.add("popup-text");
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