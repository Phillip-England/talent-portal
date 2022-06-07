class CandidateToggleMenu extends ToggleMenu {
    constructor(menu, {wrapper, openButton, closeButton, hiddenMenu, title} = {}){
        super(menu)
        this.wrapper = wrapper
        this.openButton = openButton
        this.closeButton = closeButton
        this.hiddenMenu = hiddenMenu
        this.title = title
        this.toggled = false
        //adding events
        this.openEvent()
        this.closeEvent()
    }
    addClasses(){
        this.menu.classList.add('candidate-toggle-menu-active')
        this.openButton.classList.add('candidate-open-icon-dormant')
        this.closeButton.classList.add('candidate-close-icon-active')
        this.hiddenMenu.classList.add('hidden-candidate-menu-active')
    }
    removeClasses(){
        this.menu.classList.remove('candidate-toggle-menu-active')
        this.openButton.classList.remove('candidate-open-icon-dormant')
        this.closeButton.classList.remove('candidate-close-icon-active')
        this.hiddenMenu.classList.remove('hidden-candidate-menu-active')
    }
    openEvent(){
        this.openButton.addEventListener('click', (event) => {
            this.addClasses()
        })
    }
    closeEvent(){
        this.closeButton.addEventListener('click', (event) => {
            this.removeClasses()
        })
    }
}