const initCandidateActionIcons = () => {

    //collecting icons
    let currentCandidateListing = document.getElementById('current-candidate-listing')
    let candidateEditIcons = currentCandidateListing.getElementsByClassName('candidate-edit-icon')
    let candidateInterviewIcons = currentCandidateListing.getElementsByClassName('candidate-interview-icon')
    let candidateDeleteIcons = currentCandidateListing.getElementsByClassName('candidate-delete-icon')

    //looping through edit icons
    for (x = 0; x < candidateEditIcons.length; x++){
        //making each icon an object
        let obj = new Icon({
            icon: candidateEditIcons[x],
            animation: 'icon-click-animation'
        })
    }

    //looping through interview icons
    for (x = 0; x < candidateInterviewIcons.length; x++){
        //making each icon an object
        let obj = new Icon({
            icon: candidateInterviewIcons[x],
            animation: 'icon-click-animation'
        })
    }

    //looping through delete icons
    for (x = 0; x < candidateDeleteIcons.length; x++){
        //making each icon an object
        let obj = new Icon({
            icon: candidateDeleteIcons[x],
            animation: 'icon-click-animation'
        })
    }

}