
const mobileNav = () => {

    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav')
    // querySelectorAll creates a list and thats why we need to loop through it using forEach to add event listeners. 
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')


    let isMobileNavOpen = false;


    headerBtn.addEventListener('click', () => {
        mobileNav.style.display = 'flex';
        isMobileNavOpen = !isMobileNavOpen;
        document.body.style.overflowY = 'hidden';

        if (isMobileNavOpen === true) {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

    })


    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })




}


export default mobileNav;

