import {qs, qsa} from '../../service/dom.js'
import ToggleFactory from '../../objects/ToggleFactory.js'

const deleteQuestion = async () => {
    let questionPage = qs('.questions-page')
    let deleteIcons = qsa('.delete-question', questionPage)
    let questionWrappers = qsa('.question-wrapper', questionPage)
    let loader = qs('.main-loading-icon')
    let url
    for (let x = 0; x < deleteIcons.length; x++){
        deleteIcons[x].addEventListener('click', async (event) => {
            loader.classList.add('main-loader-active')
            url = `/questions/delete/${event.target.getAttribute('id')}`
            let res = await fetch(url, {
                method: 'DELETE'
            })
            questionWrappers[x].remove()
            loader.classList.remove('main-loader-active')
        })
    }
}

export default deleteQuestion