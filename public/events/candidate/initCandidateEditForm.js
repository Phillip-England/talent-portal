import Form from '../../objects/Form.js'
import {qsa, qs} from '../../service/dom.js'


async function initCandidateEditForm(){
    let candidateListingSection = qs('#current-candidate-listing')
    let candidateEditForms = qsa('.candidate-edit-form', candidateListingSection)
    for (x = 0; x < candidateEditForms.length; x++){
        let form = new Form(candidateEditForms[x])
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