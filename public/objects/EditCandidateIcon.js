class EditCandidateIcon extends Icon {
    constructor(parent, icon, animation){
        super(parent, icon, animation)
        this.candidateID = this.icon.getAttribute('candidateID')
        this.candidateDetails = this.parent.getElementsByClassName('candidate-details')[0]
        this.candidateEditForm = this.parent.getElementsByClassName('candidate-edit-form')[0]
        this.candidateActionIcons = this.parent.getElementsByClassName('candidate-options')[0]
        this.cancelButton = this.parent.getElementsByClassName('cancel-edit-form-button')[0]
        this.updateButton = this.parent.getElementsByClassName('candidate-update-button')[0]
    }
    initCandidateIconEvents(){
        this.showForm()
        this.hideForm()
        this.updateCandidate()
    }
    showForm(){
        this.icon.addEventListener('click', () => {
            this.candidateDetails.classList.add('candidate-details-dormant')
            this.candidateEditForm.classList.add('candidate-edit-form-active')
            this.candidateActionIcons.classList.add('candidate-options-dormant')
        })
    }
    hideForm(){
        this.cancelButton.addEventListener('click', () => {
            this.candidateDetails.classList.remove('candidate-details-dormant')
            this.candidateEditForm.classList.remove('candidate-edit-form-active')
            this.candidateActionIcons.classList.remove('candidate-options-dormant')
        })
    }
    updateCandidate(){
        let updateButton = new Button(this.updateButton)
        updateButton.clickAnimation('button-default-animation')
    }
}