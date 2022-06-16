import Form from "../../objects/Form.js"
import Icon from "../../objects/Icon.js"
import Toggle from "../../objects/Toggle.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = () => {

    let menus = []
    let hiddenMenus = []
    let closeIcons = []
    let openIcons = []
    let editForms = []
    let options = []
    let details = []

    for(let x = 0; x < qsa('.candidate-toggle-menu').length; x++){
        menus.push(new Toggle(qsa('.candidate-toggle-menu')[x], x))
        hiddenMenus.push(new Toggle(qsa('.hidden-candidate-menu')[x], x))
        closeIcons.push(new Toggle(qsa('.candidate-close-icon')[x], x))
        openIcons.push(new Toggle(qsa('.candidate-open-icon')[x], x))
        editForms.push(new Toggle(qsa('.candidate-edit-form')[x], x))
        options.push(new Toggle(qsa('.candidate-options')[x], x))
        details.push(new Toggle(qsa('.candidate-details')[x], x))
    }

    for(let x = 0; x < qsa('.candidate-toggle-menu').length; x++){
        qsa('.candidate-toggle-menu')[x].addEventListener('click', () => {
            menus[x].invert(menus)
            hiddenMenus[x].invert(hiddenMenus)
            closeIcons[x].invert(closeIcons)
            openIcons[x].invert(openIcons)

        })
        qsa('.candidate-edit-icon')[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })
        qsa('.cancel-edit-form-button')[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })
    }
    


}
    
export default initCandidateMenus