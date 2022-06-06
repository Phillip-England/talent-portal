const navbarEvents = (navbar) => {
    let mobileNavList = navbar.getElementsByClassName('mobile-nav-list')[0]
    let closeMobileIcon = navbar.getElementsByClassName('mobile-close-icon')[0]
    let hamburgerIcon = navbar.getElementsByClassName('hamburger-icon')[0]


    //if we click the 'X' close the mobile nav menu
    closeMobileIcon.addEventListener('click', () => {
        mobileNavList.style.animationName = 'hide-mobile-nav'
        closeMobileIcon.style.display = 'none'
    })

    //
    mobileNavList.addEventListener('click', (event) => {
        //prevents any future events from impacting this element
        event.stopPropagation()
    })

    //if we click the hamburger icon, open the mobile menu
    hamburgerIcon.addEventListener('click', (event) => {
        mobileNavList.style.animationName = 'show-mobile-nav'
        closeMobileIcon.style.display = 'block'
        //prevents any future events from impacting this element
        event.stopPropagation()
    })

    //if we click anywhere on the document, close the mobile navigation
    document.addEventListener('click', () => {
        //only run this animation if the nav is open
        if (mobileNavList.style.animationName == 'show-mobile-nav'){
            mobileNavList.style.animationName = 'hide-mobile-nav'
            closeMobileIcon.style.display = 'none'
        }
    })
}