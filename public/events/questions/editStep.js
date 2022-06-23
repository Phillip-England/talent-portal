import Toggle from '../../objects/Toggle.js'
import {qs, qsa} from '../../service/dom.js'
import Form from '../../objects/Form.js'

const editStep = async () => {
    let questionPage = qs('.questions-page')
    let editStepIcons = qsa('.edit-step-icon', questionPage)
    let pageOverlayElement = qs('.page-overlay', questionPage)
    let hiddenMenuElement = qs('.hidden-step-menu-wrapper', questionPage)
    let editFormElement = qs('.step-edit-form', hiddenMenuElement)
    let stepNameElement = qs('.step-name', hiddenMenuElement)
    let editFormButtonWrapperElement = qs('.edit-form-button-wrapper', hiddenMenuElement)
    let cancelEditFormButton = qs('.cancel-edit-form-button', editFormButtonWrapperElement)
    let stepNameInput = qs('.step-name-input', editFormElement)
    
    let hiddenMenu = new Toggle(hiddenMenuElement, 'hidden-step-menu-wrapper-active')
    let editForm = new Toggle(editFormElement, 'step-edit-form-active')
    let pageOverlay = new Toggle(pageOverlayElement, 'page-overlay-active')

    for (let x = 0; x < editStepIcons.length; x++){
        editStepIcons[x].addEventListener('click', (event) => {
            stepNameElement.innerText = event.target.getAttribute('stepName')
            stepNameInput.value = event.target.getAttribute('stepName')
            pageOverlay.invert()
            hiddenMenu.invert()
            editForm.invert()
        })
    }

    cancelEditFormButton.addEventListener('click', (event) => {
        pageOverlay.invert()
        hiddenMenu.invert()
        editForm.invert()
    })

    let form = new Form(editFormElement)
    form.initInputs('form-control')
    form.onInput((event, input) => {
        input.require()
    })
    form.onSubmit((event) => {
        
    })

}

export default editStep