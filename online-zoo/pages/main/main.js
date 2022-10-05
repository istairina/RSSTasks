//burger handler

(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header_menu');
    const menuCloseItem = document.querySelector('.header__nav-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_menu_active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_menu_active');
    })

    
}())