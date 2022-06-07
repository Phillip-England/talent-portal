const initCandidateMenus = () => {

    //collecting our variables
    let candidateToggleMenus = document.getElementsByClassName('candidate-toggle-menu')
    let candidateToggleWrappers = document.getElementsByClassName('candidate-toggle-menu-wrapper')

    //this will house all of our HTML menu elements
    let toggleMenus = []

    //converting each toggleMenu into a custom object
    for (x = 0; x < candidateToggleMenus.length; x++){
        let obj = new CandidateToggleMenu(candidateToggleMenus[x], {
            wrapper: candidateToggleWrappers[x],
            openButton: candidateToggleMenus[x].getElementsByClassName('candidate-open-icon')[0],
            closeButton: candidateToggleMenus[x].getElementsByClassName('candidate-close-icon')[0],
            hiddenMenu: candidateToggleWrappers[x].getElementsByClassName('hidden-candidate-menu')[0],
            title: candidateToggleMenus[x].getElementsByClassName('candidate-name')[0],
        })
        toggleMenus.push(obj)
    }
}