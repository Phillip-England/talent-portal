import initCandidateEditForm from '../candidate/initCandidateEditForm.js'
import initCandidateActionIcons from '../candidate/initCandidateActionIcons.js'
import initCandidateMenus from '../candidate/initCandidateMenus.js'
import initCreateCandidateForm from './initCreateCandidateForm.js'

window.addEventListener('load', () => {
    initCreateCandidateForm()
    initCandidateMenus()
    // initCandidateActionIcons()
    initCandidateEditForm()
})