import {qs, qsa} from '../../service/dom.js'
import Toggle from '../../objects/Toggle.js'

const newStepToggle = async () => {

    let addNewSteps = qs('.add-new-steps')
    let addNewStepsHeader = qs('.header', addNewSteps)
    let addNewStepsCircle = qs('.circle', addNewSteps)
    let addNewStepsPlusIcon = qs('.plus-icon', addNewSteps)
    let stepFormWrapper = qs('.step-form-wrapper')

    let circle = new Toggle(addNewStepsCircle, 'circle-active')
    let header = new Toggle(addNewStepsHeader, 'header-active')
    let addStep = new Toggle(addNewSteps, 'add-new-steps-active')
    let stepForm = new Toggle(stepFormWrapper, 'step-form-wrapper-active')
    let plusIcon = new Toggle(addNewStepsPlusIcon, 'plus-icon-active')


    circle.element.addEventListener('click', (event) => {
        stepForm.invert()
        addStep.invert()
        circle.invert()
        header.invert()
        plusIcon.invert()
    })


}

export default newStepToggle