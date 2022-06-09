const initCandidateActionIcons = () => {

    //collecting icons
    let currentCandidateListing = document.getElementById('current-candidate-listing')
    let candidateMenus = document.getElementsByClassName('candidate-toggle-menu-wrapper')
    let candidateEditIcons = currentCandidateListing.getElementsByClassName('candidate-edit-icon')
    let candidateInterviewIcons = currentCandidateListing.getElementsByClassName('candidate-interview-icon')
    let candidateDeleteIcons = currentCandidateListing.getElementsByClassName('candidate-delete-icon')

    //looping through edit icons
    for (x = 0; x < candidateEditIcons.length; x++){
        //making each icon an object
        let obj = new EditCandidateIcon({
            parent: candidateMenus[x],
            icon: candidateEditIcons[x],
            animation: 'icon-click-animation'
        })
        obj.initIconEvents()
        obj.initCandidateIconEvents()
    }

    //looping through interview icons
    for (x = 0; x < candidateInterviewIcons.length; x++){
        //making each icon an object
        let obj = new Icon({
            parent: candidateMenus[x],
            icon: candidateInterviewIcons[x],
            animation: 'icon-click-animation'
        })
        obj.addClickAnimation()
    }

    //looping through delete icons
    for (x = 0; x < candidateDeleteIcons.length; x++){
        //making each icon an object
        let obj = new Icon({
            parent: candidateMenus[x],
            icon: candidateDeleteIcons[x],
            animation: 'icon-click-animation'
        })
        obj.addClickAnimation()
    }

}