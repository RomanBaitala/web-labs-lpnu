(() => {
    const refs = {
        openMenuBtn: document.querySelector('.menu-open-button'),
        closeMenuBtn: document.querySelector('.menu-close-button'),
        menu: document.querySelector('.mobile-menu'),
        body: document.querySelector('body'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
    })();