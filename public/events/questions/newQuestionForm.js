import {qs, qsa} from '../../../public/service/dom.js'
import Form from '../../objects/Form.js'

const newQuestionForm = async () => {
    
    let interviewStepSection = qs('.interview-steps')

    let questionForms = []
    let questionFormElements = qsa('.question-form', interviewStepSection)
    for (let x = 0; x < questionFormElements.length; x++){
        questionForms.push(new Form(questionFormElements[x]))
        questionForms[x].initInputs('form-control')
        questionForms[x].props('postUrl', `/questions/create/${questionFormElements[x].getAttribute('id')}`)
        questionForms[x].props('errorWrapper', qsa('.error-wrapper', interviewStepSection)[x])
        questionForms[x].props('errorMessage', qsa('.error-message', interviewStepSection)[x])
        questionForms[x].onInput((event, input) => {
            input.require()
            input.max(50)
        })
        questionForms[x].onSubmit( async (event, form) => {
            event.preventDefault()
            form.load(qs('.main-loading-icon'), 'main-loader-active')
            let res = await form.post(form.postUrl)
            if (form.errorCheck(res)) {
                form.displayErrorWrapper(form.errorWrapper, 'error-wrapper-active')
                form.setErrorMessage(form.errorMessage, res.error)
                form.load(qs('.main-loading-icon'), 'main-loader-active')
                return
            }
            form.hideErrorWrapper(form.errorWrapper, 'error-wrapper-active')
            location.reload()
        })
    }


}

export default newQuestionForm