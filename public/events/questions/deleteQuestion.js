import {qs, qsa} from '../../service/dom.js'
import ToggleFactory from '../../objects/ToggleFactory.js'

const deleteQuestion = async () => {
    let questionPage = qs('.questions-page')
    let deleteIcons = qsa('.delete-question', questionPage)
    let url
    for (let x = 0; x < deleteIcons.length; x++){
        deleteIcons[x].addEventListener('click', (event) => {
            url = `/questions/delete/${event.target.getAttribute('id')}`
        })
    }
}

export default deleteQuestion