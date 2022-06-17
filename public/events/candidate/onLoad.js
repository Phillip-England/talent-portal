import initCandidateMenus from '../candidate/initCandidateMenus.js'
import initCreateCandidateForm from './initCreateCandidateForm.js'

window.addEventListener('load', () => {
    initCreateCandidateForm()
    initCandidateMenus()
})