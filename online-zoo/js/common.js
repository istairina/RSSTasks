//burger handler

(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header_menu');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const logo = document.querySelector('.logodiv');
    const logotext = document.querySelector('.logo-p');
    const bamboo = document.querySelector('.logo-bamboo');
    const designer = document.querySelector('.header__designedby');
    const shadow = document.querySelector('.burger-shadow');

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

    
}())