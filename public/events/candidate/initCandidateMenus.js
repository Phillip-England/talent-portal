import Form from "../../objects/Form.js"
import Formx from "../../objects/Formx.js"
import Icon from "../../objects/Icon.js"
import Toggle from "../../objects/Toggle.js"
import ToggleFactory from "../../objects/ToggleFactory.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = async () => {

    let toggleFactory = new ToggleFactory()

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

    let menus = toggleFactory.build(candidateMenus, 'candidate-toggle-menu-active')
    let hiddenMenus = toggleFactory.build(hiddenCandidateMenus, 'hidden-candidate-menu-active')
    let closeIcons = toggleFactory.build(candidateCloseIcons, 'candidate-close-icon-active')
    let openIcons = toggleFactory.build(candidateOpenIcons, 'candidate-open-icon-dormant')
    let editForms = toggleFactory.build(candidateEditForms, 'candidate-edit-form-active')
    let options = toggleFactory.build(candidateOptions, 'candidate-options-dormant')
    let details = toggleFactory.build(candidateDetails, 'candidate-details-dormant')

    for(let x = 0; x < candidateMenus.length; x++){
        forms.push(new Formx(candidateEditForms[x]))
        forms[x].initInputs('form-control')
        forms[x].props('getUrl', `/candidates/${forms[x].form.getAttribute('id')}`)
        forms[x].props('postUrl', `/candidates/update/${forms[x].form.getAttribute('id')}`)
        forms[x].props('errorWrapper', qs('.error-message-wrapper', forms[x].form))
        forms[x].props('errorMessage', qs('.error-message', forms[x].form))
    }

    for(let x = 0; x < candidateMenus.length; x++){

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

        forms[x].onInput((input) => {
            switch (input.name) {
                case 'phone':
                    input.phoneFormat()
                    break
                case 'firstName':
                    input.capFirstLetter()
                    input.require()
                    break
                case 'lastName':
                    input.capFirstLetter()
                    input.require()
                    break
                default: 
                    break

            }
        })

        forms[x].onSubmit(async (event, form) => {
            event.preventDefault()
            // form.load(qs('.main-loading-icon'), 'main-loader-active')
            let res = await form.post([forms[x].postUrl])
            if (form.errorCheck(res)) {
                form.displayErrorWrapper(forms[x].errorWrapper, 'error-message-active')
                form.setErrorMessage(forms[x].errorMessage, res.error)
                return
            }
            form.hideErrorWrapper(forms[x].errorWrapper, 'error-message-active')
        })



    }
    


}
    
export default initCandidateMenus