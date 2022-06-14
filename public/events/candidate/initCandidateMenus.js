import Form from "../../objects/Form.js"
import Icon from "../../objects/Icon.js"
import Toggle from "../../objects/Toggle.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = () => {
    let candidateToggleMenuWrappers = qsa('.candidate-toggle-menu-wrapper')
    let candidateToggleMenus = qsa('.candidate-toggle-menu')
    let hiddenCandidateMenus = qsa('.hidden-candidate-menu')
    let candidateEditIcons = qsa('.candidate-edit-icon')
    let candidateEditForms = qsa('.candidate-edit-form')
    let hiddenMenuOpenIcon = qsa('.candidate-open-icon')
    let hiddenMenuCloseIcon = qsa('.candidate-close-icon')
    let cancelEditFormButton = qsa('.cancel-edit-form-button')
    let candidateOptions = qsa('.candidate-options')

    let toggleMenus = []
    let editIcons = []
    let editForms = []
    
    for (let x = 0; x < candidateToggleMenus.length; x++){
        let menu = new Toggle()
        toggleMenus.push(menu)
        menu.setToggleElements({
            hiddenMenu: hiddenCandidateMenus[x],
            mainMenu: candidateToggleMenus[x],
            closeIcon: hiddenMenuCloseIcon[x],
            openIcon: hiddenMenuOpenIcon[x]

        })
        menu.setCssClasses({
            hiddenMenu: 'hidden-candidate-menu-active',
            mainMenu: 'candidate-toggle-menu-active',
            closeIcon: 'candidate-close-icon-active',
            openIcon: 'candidate-open-icon-dormant'
        })

        let editIcon = new Toggle()
        editIcons.push(editIcon)
        editIcon.setToggleElements({
            editForm: candidateEditForms[x],
            options: candidateOptions[x]
        })
        editIcon.setCssClasses({
            editForm: 'candidate-edit-form-active',
            options: 'candidate-options-dormant'
        })
        editIcon.setOnSwitch(candidateEditIcons[x])
        editIcon.setOffSwitch(cancelEditFormButton[x])

        // let editForm = new Form(candidateEditForms[x])
        // editForms.push(editForm)
    }

    for (let x = 0; x < toggleMenus.length; x++){
        candidateToggleMenus[x].addEventListener('click', () => {
            if (!toggleMenus[x].siblings) toggleMenus[x].setSiblings(toggleMenus)
            toggleMenus[x].offAll()
            toggleMenus[x].toggle()
        })
        editIcons[x].onSwitch.addEventListener('click', () => {
            editIcons[x].on()
        })
        editIcons[x].offSwitch.addEventListener('click', () => {
            editIcons[x].off()
        })
    }
}

export default initCandidateMenus