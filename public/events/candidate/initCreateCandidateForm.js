import Form from '../../objects/Form.js'
import {qsa, qs} from '../../service/dom.js'
import Animator from '../../objects/Animator.js'

const initCreateCandidateForm = async () => {
    const createCandidateForm = qs('#create-candidate-form')
    const inputUnderlines = qsa('.input-underline', createCandidateForm)
    const inputs = qsa('.form-control', createCandidateForm)
    const form = new Form(createCandidateForm)
    for(let x = 0; x < inputUnderlines.length; x++){
        let animatedUnderline = new Animator()
        animatedUnderline.setParams({
            eventLocation: inputs[x],
            classHolder: inputUnderlines[x],
            animationClass: 'input-underline-active',
            eventType: 'click',
            siblingElements: inputUnderlines
        })
        animatedUnderline.animationFreeze()
    }
    form.setElements({
        submitButton: qs('.submit-button', createCandidateForm),
        inputs: qsa('.form-control', createCandidateForm),
        requiredInputs: qsa('.form-required', createCandidateForm),
        astricks: qsa('.astrick', createCandidateForm),
        errorWrapper: qs('.error-message-wrapper', createCandidateForm),
        errorMessage: qs('.error-message', createCandidateForm),
        loader: qs('.main-loading-icon'),
    })
    form.setClasses({
        astrickActiveClass: 'astrick-active',
        errorActiveClass: 'error-message-active',
        loaderActiveClass: 'main-loader-active'
    })
    form.submit()
}

export default initCreateCandidateForm