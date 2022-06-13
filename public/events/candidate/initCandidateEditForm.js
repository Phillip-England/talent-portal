import Form from '../../objects/Form.js'
import {qsa, qs} from '../../service/dom.js'
import Animator from '../../objects/Animator.js'


async function initCandidateEditForm(){
    let candidateListingSection = qs('#current-candidate-listing')
    let candidateEditForms = qsa('.candidate-edit-form', candidateListingSection)
    for (let x = 0; x < candidateEditForms.length; x++){
        let form = new Form(candidateEditForms[x])
        let inputs = qsa('.form-control', candidateEditForms[x])
        let inputUnderlines = qsa('.input-underline', candidateEditForms[x])
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
            submitButton: qs('.candidate-update-button', candidateEditForms[x]),
            inputs: qsa('.form-control', candidateEditForms[x]),
            requiredInputs: qsa('.form-required', candidateEditForms[x]),
            astricks: qsa('.astrick', candidateEditForms[x]),
            errorWrapper: qs('.error-message-wrapper', candidateEditForms[x]),
            errorMessage: qs('.error-message', candidateEditForms[x]),
            loader: qs('.main-loading-icon'),
        })
        form.setClasses({
            astrickActiveClass: 'astrick-active',
            errorActiveClass: 'error-message-active',
            loaderActiveClass: 'main-loader-active'
        })
        // form.checkParameters()
        form.submit()
    }
}

export default initCandidateEditForm