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

    for(let x = 0; x < qsa('.candidate-toggle-menu').length; x++){
        menus.push(new Toggle(qsa('.candidate-toggle-menu')[x], 'candidate-toggle-menu-active'))
        hiddenMenus.push(new Toggle(qsa('.hidden-candidate-menu')[x], 'hidden-candidate-menu-active'))
        closeIcons.push(new Toggle(qsa('.candidate-close-icon')[x], 'candidate-close-icon-active'))
        openIcons.push(new Toggle(qsa('.candidate-open-icon')[x], 'candidate-open-icon-dormant'))
        editForms.push(new Toggle(qsa('.candidate-edit-form')[x], 'candidate-edit-form-active'))
        options.push(new Toggle(qsa('.candidate-options')[x], 'candidate-options-dormant'))
        details.push(new Toggle(qsa('.candidate-details')[x], 'candidate-details-dormant'))
        forms.push(new Formx(qsa('.candidate-edit-form')[x]))
        forms[x].setProperties({
            inputs: qsa('.form-control', forms[x].form),
            getUrl: `/candidates/${forms[x].form.getAttribute('id')}`,
            postUrl: `/candidates/update/${forms[x].form.getAttribute('id')}`,
        })
    }

    for(let x = 0; x < qsa('.candidate-toggle-menu').length; x++){
        qsa('.candidate-toggle-menu')[x].addEventListener('click', () => {
            menus[x].invert(menus.concat(editForms, options, details))
            hiddenMenus[x].invert(hiddenMenus)
            closeIcons[x].invert(closeIcons)
            openIcons[x].invert(openIcons)

        })
        qsa('.candidate-edit-icon')[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
            forms[x].populateInputs()
        })
        qsa('.cancel-edit-form-button')[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })
    }
    


}
    
export default initCandidateMenus