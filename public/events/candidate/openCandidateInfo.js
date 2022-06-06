const openCandidateInfo = () => {
    let candidateList = document.getElementsByClassName('candidate-list')
    for (x = 0; x < candidateList.length; x++){
        let currentButton = candidateList[x].getElementsByClassName('candidate-icon-wrapper')[0]
        currentButton.addEventListener('click', () => {
            console.log('hello')
            // toggleSection()
        })
    }
}