import Form from "../../objects/Form.js"
import Icon from "../../objects/Icon.js"
import ToggleMenu from "../../objects/ToggleMenu.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = () => {
    let candidateToggleMenuWrappers = qsa('.candidate-toggle-menu-wrapper')
    let candidateToggleMenus = qsa('.candidate-toggle-menu')
    let hiddenCandidateMenus = qsa('.hidden-candidate-menus')
    let candidateEditIcons = qsa('.candidate-edit-icon')
    let candidateEditForms = qsa('.candidate-edit-form')

    let toggleMenus = []
    let editIcons = []
    let editForms = []
    
    for (let x = 0; x < candidateToggleMenus.length; x++){
        let menu = new ToggleMenu(candidateToggleMenus[x])
        toggleMenus.push(menu)
        let editIcon = new Icon(editIcons[x])
        editIcons.push(editIcons[editIcon])
        let editForm = new Form(candidateEditForms[x])
        editForms.push(editForm)
    }

    for (let x = 0; x < toggleMenus.length; x++){
        toggleMenus[x].setElements({
            openButton: candidateToggleMenus[x].getElementsByClassName('candidate-open-icon')[0],
            closeButton: candidateToggleMenus[x].getElementsByClassName('candidate-close-icon')[0],
            hiddenMenu: candidateToggleMenuWrappers[x].getElementsByClassName('hidden-candidate-menu')[0],
        })
        toggleMenus[x].setClasses({
            menuClass: 'candidate-toggle-menu-active',
            openButtonClass: 'candidate-open-icon-dormant',
            closeButtonClass: 'candidate-close-icon-active',
            hiddenMenuClass: 'hidden-candidate-menu-active',
        })
        toggleMenus[x].setSiblingMenus(toggleMenus)
        toggleMenus[x].openEvent()
        toggleMenus[x].closeEvent()
    }
}

export default initCandidateMenus