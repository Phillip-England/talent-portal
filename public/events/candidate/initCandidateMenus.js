import Form from "../../objects/Form.js"
import Icon from "../../objects/Icon.js"
import ToggleMenu from "../../objects/ToggleMenu.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = () => {
    let candidateToggleMenuWrappers = qsa('.candidate-toggle-menu-wrapper')
    let candidateToggleMenus = qsa('.candidate-toggle-menu')
    let hiddenCandidateMenus = qsa('.hidden-candidate-menu')
    let candidateEditIcons = qsa('.candidate-edit-icon')
    let candidateEditForms = qsa('.candidate-edit-form')
    let hiddenMenuOpenIcon = qsa('.candidate-open-icon')
    let hiddenMenuCloseIcon = qsa('.candidate-close-icon')

    let toggleMenus = []
    let editIcons = []
    let editForms = []
    
    for (let x = 0; x < candidateToggleMenus.length; x++){

        let menu = new ToggleMenu()
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

        let editIcon = new ToggleMenu()
        editIcons.push(editIcons[editIcon])

        let editForm = new Form(candidateEditForms[x])
        editForms.push(editForm)
        
    }

    for (let x = 0; x < toggleMenus.length; x++){
        candidateToggleMenus[x].addEventListener('click', () => {
            toggleMenus[x].closeSiblingMenus(toggleMenus)
            toggleMenus[x].toggle()
            toggleMenus[x].toggleOpenStatus()
        })
        
        candidateEditIcons[x].addEventListener('click', () => {
            console.log('hit')
        })
    }
}

export default initCandidateMenus