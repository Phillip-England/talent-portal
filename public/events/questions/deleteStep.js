import {qs, qsa} from '../../service/dom.js'
import Toggle from '../../objects/Toggle.js'

const deleteStep = async () => {

    let questionsPage = qs('.questions-page')
    let pageOverlayElement = qs('.page-overlay', questionsPage)
    let hiddenMenuElement = qs('.hidden-step-menu-wrapper', questionsPage)
    let deleteIcons = qsa('.delete-step-icon', questionsPage)
    let cancelButton = qs('.cancel', hiddenMenuElement)
    let deleteButton = qs('.delete', hiddenMenuElement)
    let stepNameText = qs('.step-name', hiddenMenuElement)
    let loadingElement = qs('.main-loading-icon')
    let areYouSureText = qs('.are-you-sure', hiddenMenuElement)
    let buttonWrapperElement = qs('.button-wrapper', hiddenMenuElement)

    let pageOverlay = new Toggle(pageOverlayElement, 'page-overlay-active')
    let hiddenMenu = new Toggle(hiddenMenuElement, 'hidden-step-menu-wrapper-active')
    let loader = new Toggle(loadingElement, 'main-loader-active')
    let areYouSure = new Toggle(areYouSureText, 'are-you-sure-active')
    let buttonWrapper = new Toggle(buttonWrapperElement, 'button-wrapper-active')

    for (let x = 0; x < deleteIcons.length; x++){
        deleteIcons[x].addEventListener('click', (event) => {
            stepNameText.innerText = event.target.getAttribute('stepName')
            pageOverlay.invert()
            hiddenMenu.invert()
            areYouSure.invert()
            buttonWrapper.invert()
            deleteButton.setAttribute('id', event.target.getAttribute('id'))
        })
    }

    deleteButton.addEventListener('click', async (event) => {
        pageOverlay.invert()
        hiddenMenu.invert()
        loader.invert()
        let url = `/steps/delete/${event.target.getAttribute('id')}`
        let res = await fetch(url, {
            method: "DELETE"
        })
        location.reload()
    })

    cancelButton.addEventListener('click', (event) => {
        pageOverlay.invert()
        hiddenMenu.invert()
        areYouSure.invert()
        buttonWrapper.invert()
    })
}

export default deleteStep