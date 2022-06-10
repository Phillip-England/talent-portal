const initCandidateEditForm = () => {
    let candidateListingSection = document.getElementById('current-candidate-listing')
    let candidateEditForms = candidateListingSection.getElementsByClassName('candidate-edit-form')
    for (x = 0; x < candidateEditForms.length; x++){
        let form = new Form(candidateEditForms[x])
        form.setParameters({
            submitButton: candidateEditForms[x].getElementsByClassName('candidate-update-button')[0],
            inputs: candidateEditForms[x].getElementsByClassName('form-control')
        })
        // form.checkParameters()
        form.submit()
    }
}