import newStepForm from './newStepForm.js';
import newQuestionForm from './newQuestionForm.js'
import deleteStep from './deleteStep.js'
import deleteQuestion from './deleteQuestion.js'
import editStep from './editStep.js'

window.addEventListener('load', () => {
    newStepForm()
    newQuestionForm()
    deleteStep()
    deleteQuestion()
    editStep()
})