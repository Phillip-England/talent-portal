import Form from "../../objects/Form.js"
import Toggle from "../../objects/Toggle.js"
import ToggleFactory from "../../objects/ToggleFactory.js"
import {qs, qsa} from '../../service/dom.js'

const initCandidateMenus = async () => {

    let toggleFactory = new ToggleFactory()

    let forms = []

    let candidateMenus = qsa('.candidate-toggle-menu')
    let candidateMenuWrappers = qsa('.candidate-toggle-menu-wrapper')
    let hiddenCandidateMenus = qsa('.hidden-candidate-menu')
    let candidateCloseIcons = qsa('.candidate-close-icon')
    let candidateOpenIcons = qsa('.candidate-open-icon')
    let candidateEditForms = qsa('.candidate-edit-form')
    let candidateOptions = qsa('.candidate-options')
    let candidateDetails = qsa('.candidate-details')
    let candidateEditIcons = qsa('.candidate-edit-icon')
    let candidateDeleteIcons = qsa('.candidate-delete-icon')
    let candidateDeleteMenus = qsa('.candidate-delete-menu')
    let cancelEditButtons = qsa('.cancel-edit-form-button')
    let cancelDeleteButtons = qsa('.cancel-delete-candidate-button')
    let candidateDeleteButtons = qsa('.candidate-delete-button')

    let menus = toggleFactory.build(candidateMenus, 'candidate-toggle-menu-active')
    let hiddenMenus = toggleFactory.build(hiddenCandidateMenus, 'hidden-candidate-menu-active')
    let deleteMenus = toggleFactory.build(candidateDeleteMenus, 'candidate-delete-menu-active')
    let closeIcons = toggleFactory.build(candidateCloseIcons, 'candidate-close-icon-active')
    let openIcons = toggleFactory.build(candidateOpenIcons, 'candidate-open-icon-dormant')
    let editForms = toggleFactory.build(candidateEditForms, 'candidate-edit-form-active')
    let options = toggleFactory.build(candidateOptions, 'candidate-options-dormant')
    let details = toggleFactory.build(candidateDetails, 'candidate-details-dormant')

    for(let x = 0; x < candidateMenus.length; x++){
        forms.push(new Form(candidateEditForms[x]))
        forms[x].initInputs('form-control')
        forms[x].props('getUrl', `/candidates/${forms[x].form.getAttribute('id')}`)
        forms[x].props('postUrl', `/candidates/update/${forms[x].form.getAttribute('id')}`)
        forms[x].props('errorWrapper', qs('.error-message-wrapper', forms[x].form))
        forms[x].props('errorMessage', qs('.error-message', forms[x].form))
    }

    for(let x = 0; x < candidateMenus.length; x++){

        candidateMenus[x].addEventListener('click', () => {
            forms[x].populateInputs(forms[x].getUrl)
            menus[x].invert(menus.concat(editForms, options, details, deleteMenus))
            hiddenMenus[x].invert(hiddenMenus)
            closeIcons[x].invert(closeIcons)
            openIcons[x].invert(openIcons)
        })

        candidateEditIcons[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })

        cancelEditButtons[x].addEventListener('click', () => {
            editForms[x].invert(editForms)
            options[x].invert(options)
            details[x].invert(details)
        })

        candidateDeleteIcons[x].addEventListener('click', () => {
            deleteMenus[x].invert(deleteMenus)
            options[x].invert(options)
            details[x].invert(details)
        })

        cancelDeleteButtons[x].addEventListener('click', () => {
            deleteMenus[x].invert(deleteMenus)
            options[x].invert(options)
            details[x].invert(details)
        })

        candidateDeleteButtons[x].addEventListener('click', async (event) => {
            let id = event.target.getAttribute('id')
            let url = `/candidates/delete/${id}`
            let res = await fetch(url, {
                method: 'DELETE',
            })
            candidateMenuWrappers[x].remove()
        })

        forms[x].onInput((event, input) => {
            switch (input.name) {
                case 'phone':
                    input.phoneFormat(event)
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
            form.load(qs('.main-loading-icon'), 'main-loader-active')
            let res = await form.post([forms[x].postUrl])
            if (form.errorCheck(res)) {
                form.displayErrorWrapper(forms[x].errorWrapper, 'error-message-active')
                form.setErrorMessage(forms[x].errorMessage, res.error)
                form.load(qs('.main-loading-icon'), 'main-loader-active')
                return
            }
            form.hideErrorWrapper(forms[x].errorWrapper, 'error-message-active')
            location.reload()
        })



    }
    


}
    
export default initCandidateMenus