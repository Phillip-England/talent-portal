const initCandidateMenus = () => {

    //collecting our variables
    let candidateToggleMenus = document.getElementsByClassName('candidate-toggle-menu')
    let candidateToggleMenuWrappers = document.getElementsByClassName('candidate-toggle-menu-wrapper')

    //this will house all of our HTML menu elements
    let toggleMenus = []

    //converting each toggleMenu into a custom object
    for (x = 0; x < candidateToggleMenus.length; x++){
        //creating an obj for each candidate menu
        let obj = new CandidateToggleMenu(candidateToggleMenus[x])
        //establishing which elements to associate with the object
        obj.setElements({
            openButton: candidateToggleMenus[x].getElementsByClassName('candidate-open-icon')[0],
            closeButton: candidateToggleMenus[x].getElementsByClassName('candidate-close-icon')[0],
            hiddenMenu: candidateToggleMenuWrappers[x].getElementsByClassName('hidden-candidate-menu')[0],
        })
        //establishing which css classes will be applyed on click events
        obj.setClasses({
            menuClass: 'candidate-toggle-menu-active',
            openButtonClass: 'candidate-open-icon-dormant',
            closeButtonClass: 'candidate-close-icon-active',
            hiddenMenuClass: 'hidden-candidate-menu-active',
        })
        //activating the click events stashed in the object
        obj.initEvents()
        //collecting the objects
        toggleMenus.push(obj)
    }
}