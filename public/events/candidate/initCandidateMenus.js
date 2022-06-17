import Form from "../../objects/Form.js"
import Formx from "../../objects/Formx.js"
import Icon from "../../objects/Icon.js"
import Toggle from "../../objects/Toggle.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = async () => {

    let menus = []
    let hiddenMenus = []
    let closeIcons = []
    let openIcons = []
    let editForms = []
    let options = []
    let details = []
    let forms = []

    let candidateMenus = qsa('.candidate-toggle-menu')
    let hiddenCandidateMenus = qsa('.hidden-candidate-menu')
    let candidateCloseIcons = qsa('.candidate-close-icon')
    let candidateOpenIcons = qsa('.candidate-open-icon')
    let candidateEditForms = qsa('.candidate-edit-form')
    let candidateOptions = qsa('.candidate-options')
    let candidateDetails = qsa('.candidate-details')
    let candidateEditIcons = qsa('.candidate-edit-icon')
    let cancelEditButton = qsa('.cancel-edit-form-button')

    for(let x = 0; x < candidateMenus.length; x++){

        menus.push(new Toggle(candidateMenus[x], 'candidate-toggle-menu-active'))
        hiddenMenus.push(new Toggle(hiddenCandidateMenus[x], 'hidden-candidate-menu-active'))
        closeIcons.push(new Toggle(candidateCloseIcons[x], 'candidate-close-icon-active'))
        openIcons.push(new Toggle(candidateOpenIcons[x], 'candidate-open-icon-dormant'))
        editForms.push(new Toggle(candidateEditForms[x], 'candidate-edit-form-active'))
        options.push(new Toggle(candidateOptions[x], 'candidate-options-dormant'))
        details.push(new Toggle(candidateDetails[x], 'candidate-details-dormant'))

        forms.push(new Formx(candidateEditForms[x]))
        forms[x].initInputs('form-control')
        forms[x].props('getUrl', `/candidates/${forms[x].form.getAttribute('id')}`)
    }

    for(let x = 0; x < qsa('.candidate-toggle-menu').length; x++){

        candidateMenus[x].addEventListener('click', () => {
            forms[x].populateInputs(forms[x].getUrl)
            menus[x].invert(menus.concat(editForms, options, details))
            hiddenMenus[x].invert(hiddenMenus)
            closeIcons[x].invert(closeIcons)
            openIcons[x].invert(openIcons)

        })

        candidateEditIcons[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })

        cancelEditButton[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })
    }
    


}
    
export default initCandidateMenus