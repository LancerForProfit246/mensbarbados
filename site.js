document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    if (menuToggle && mainMenu && !menuToggle.dataset.siteMenuBound) {
        menuToggle.dataset.siteMenuBound = 'true';
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
        });
    }

    const revealElements = document.querySelectorAll('body > section, footer');

    revealElements.forEach((element, index) => {
        element.classList.add('scroll-fade');

        if (index === 0) {
            element.classList.add('is-visible');
        }
    });

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(element => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => observer.observe(element));
});
