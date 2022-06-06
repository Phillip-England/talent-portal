window.addEventListener('load', () => {
    animateFormInputs(document.getElementById('add-candidate-form'))
    addCandidate()
    // openCandidateInfo()

    let candidateList = document.getElementsByClassName('candidate-list')
    let hiddenMenus = document.getElementsByClassName('hidden-candidate-menu')
    for (x = 0; x < candidateList.length; x++){
        let CandidateToggleMenu = new ToggleBar(
            candidateList[x],
            candidateList[x].getElementsByClassName('candidate-open-icon')[0],
            candidateList[x].getElementsByClassName('candidate-close-icon')[0],
            candidateList[x].getElementsByClassName('candidate-name')[0],
            hiddenMenus[x]
        )
        CandidateToggleMenu.init()
        CandidateToggleMenu.checkProperties()
    }

    
})