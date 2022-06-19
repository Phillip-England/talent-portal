import Form from '../../objects/Form.js'
import {qsa, qs} from '../../service/dom.js'

const initCreateCandidateForm = async () => {
    let createCandidateForm = qs('#create-candidate-form')
    let form = new Form(createCandidateForm)
    form.initInputs('form-control')
    form.props('postUrl', '/candidates/create-candidate')
    form.props('errorWrapper', qs('.error-message-wrapper', form.element))
    form.props('errorMessage', qs('.error-message', form.element))
    form.props
    form.onInput((event, input) => {
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
    form.onSubmit( async (event) => {
        event.preventDefault()
        form.load(qs('.main-loading-icon'), 'main-loader-active')
        let res = await form.post(form.postUrl)
        if (form.errorCheck(res)) {
            form.displayErrorWrapper(form.errorWrapper, 'error-message-active')
            form.setErrorMessage(form.errorMessage, res.error)
            form.load(qs('.main-loading-icon'), 'main-loader-active')
            return
        }
        form.hideErrorWrapper(form.errorWrapper, 'error-message-active')
        location.reload()
    })
}

export default initCreateCandidateForm