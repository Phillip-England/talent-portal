import Animator from '../../objects/Animator.js'
import Icon from '../../objects/Icon.js'

const initCandidateActionIcons = () => {

    //collecting icons
    let currentCandidateListing = document.getElementById('current-candidate-listing')
    let candidateMenus = document.getElementsByClassName('candidate-toggle-menu-wrapper')
    let cancelButtons = document.getElementsByClassName('cancel-edit-form-button')
    let candidateEditIcons = currentCandidateListing.getElementsByClassName('candidate-edit-icon')
    let candidateInterviewIcons = currentCandidateListing.getElementsByClassName('candidate-interview-icon')
    let candidateDeleteIcons = currentCandidateListing.getElementsByClassName('candidate-delete-icon')

    //looping through edit icons
    for (let x = 0; x < candidateEditIcons.length; x++){
        //making each icon an object
        let icon = new Icon(candidateMenus[x], candidateEditIcons[x])
        let iconAnimation = new Animator()
        iconAnimation.setParams({
            eventLocation: candidateEditIcons[x],
            classHolder: candidateEditIcons[x],
            animationClass: 'icon-click-animation',
            eventType: 'click'
        })
        iconAnimation.animate(500)
        icon.setEventElements({
            icon: candidateEditIcons[x],
            cancelButton: cancelButtons[x]
        })
        icon.setToggleElements({
            candidateEditForm: candidateMenus[x].getElementsByClassName('candidate-edit-form')[0],
            candidateDetails: candidateMenus[x].getElementsByClassName('candidate-details')[0],
            candidateActionIcons: candidateMenus[x].getElementsByClassName('candidate-options')[0]
        })
        icon.setToggleClasses({
            candidateEditForm: 'candidate-edit-form-active',
            candidateDetails: 'candidate-details-dormant',
            candidateActionIcons: 'candidate-options-dormant'
        })
        icon.toggle()
    }

    //looping through interview icons
    for (let x = 0; x < candidateInterviewIcons.length; x++){
        //making each icon an object
        let icon = new Icon(candidateMenus[x], candidateInterviewIcons[x])
        let iconAnimation = new Animator()
        iconAnimation.setParams({
            eventLocation: candidateInterviewIcons[x],
            classHolder: candidateInterviewIcons[x],
            animationClass: 'icon-click-animation',
            eventType: 'click'
        })
        iconAnimation.animate(500)
    }

    //looping through delete icons
    for (let x = 0; x < candidateDeleteIcons.length; x++){
        //making each icon an object
        let icon = new Icon(candidateMenus[x], candidateDeleteIcons[x])
        let iconAnimation = new Animator()
        iconAnimation.setParams({
            eventLocation: candidateDeleteIcons[x],
            classHolder: candidateDeleteIcons[x],
            animationClass: 'icon-click-animation',
            eventType: 'click'
        })
        iconAnimation.animate(500)
    }

}

export default initCandidateActionIcons