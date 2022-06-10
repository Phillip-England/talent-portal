import initCandidateEditForm from '../candidate/initCandidateEditForm.js'
import initCandidateActionIcons from '../candidate/initCandidateActionIcons.js'
import initCandidateMenus from '../candidate/initCandidateMenus.js'
import addCandidate from '../../events/candidate/addCandidate.js'

window.addEventListener('load', () => {
    animateFormInputs(document.getElementById('add-candidate-form'))
    addCandidate()
    initCandidateMenus()
    initCandidateActionIcons()
    initCandidateEditForm()
})