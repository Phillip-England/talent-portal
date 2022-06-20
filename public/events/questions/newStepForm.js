import {qs, qsa} from '../../service/dom.js'
import Form from '../../objects/Form.js'

const newStepForm = async () => {
    let stepForm = new Form(qs('.step-form'))
    stepForm.props('postUrl', '/process/create')
    stepForm.props('errorWrapper', qs('.error-wrapper', stepForm.element))
    stepForm.props('errorMessage', qs('.error-message', stepForm.element))
    stepForm.initInputs('form-control')
    stepForm.onInput((event, input) => {
        input.require()
        input.max(30)
    })
    stepForm.onSubmit( async (event, form) => {
        event.preventDefault()
        stepForm.load(qs('.main-loading-icon'), 'main-loader-active')
        let res = await stepForm.post(stepForm.postUrl)
        if (stepForm.errorCheck(res)) {
            stepForm.displayErrorWrapper(stepForm.errorWrapper, 'error-wrapper-active')
            stepForm.setErrorMessage(stepForm.errorMessage, res.error)
            stepForm.load(qs('.main-loading-icon'), 'main-loader-active')
            return
        }
        stepForm.hideErrorWrapper(stepForm.errorWrapper, 'error-wrapper-active')
        location.reload()
    })
}

export default newStepForm