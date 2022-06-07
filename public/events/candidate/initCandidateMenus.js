const initCandidateMenus = () => {
    let candidateToggleMenus = document.getElementsByClassName('candidate-toggle-menu')
    let candidateToggleWrappers = document.getElementsByClassName('candidate-toggle-menu-wrapper')
    let hiddenMenus = document.getElementsByClassName('hidden-candidate-menu')
    let toggleMenus = []
    //collecting toggle menu objects
    for (x = 0; x < candidateToggleMenus.length; x++){
        let toggleMenu = new ToggleMenu(
            candidateToggleWrappers[x],
            candidateToggleMenus[x],
            candidateToggleMenus[x].getElementsByClassName('candidate-open-icon')[0],
            candidateToggleMenus[x].getElementsByClassName('candidate-close-icon')[0],
            candidateToggleMenus[x].getElementsByClassName('candidate-name')[0],
            hiddenMenus[x],
        )
        toggleMenus.push(toggleMenu)
    }
    //looping through toggle menu objects
    for (x = 0; x < toggleMenus.length; x++){
        let currentMenu = toggleMenus[x]
        currentMenu.openIcon.addEventListener('click', () => {
            //closing all other toggle menus
            for (y = 0; y < toggleMenus.length; y++){
                toggleMenus[y].closeHiddenMenu()
            }
            //opening current menu
            currentMenu.openHiddenMenu({
                menuBackGroundColor: 'var(--main-clr)',
                titleColor: 'var(--white)',
                menuAnimation: 'fade-title-color',
                hiddenMenuDisplay: 'flex',
                hiddenMenuAnimation: 'open-hidden-menu'
            })
        })
        currentMenu.closeIcon.addEventListener('click', () => {
                //closing current menu
                currentMenu.closeHiddenMenu()
        })
    }
}