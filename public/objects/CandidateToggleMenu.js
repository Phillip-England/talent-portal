class CandidateToggleMenu extends ToggleMenu {
    constructor(menu){
        super(menu)
    }
    setElements({openButton, closeButton, hiddenMenu} = {}){
        this.openButton = openButton
        this.closeButton = closeButton
        this.hiddenMenu = hiddenMenu
    }
    setClasses({menuClass, openButtonClass, closeButtonClass, hiddenMenuClass} = {}){
        this.menuClass = menuClass
        this.openButtonClass = openButtonClass
        this.closeButtonClass = closeButtonClass
        this.hiddenMenuClass = hiddenMenuClass
    }
    addClasses(){
        this.menu.classList.add(this.menuClass)
        this.openButton.classList.add(this.openButtonClass)
        this.closeButton.classList.add(this.closeButtonClass)
        this.hiddenMenu.classList.add(this.hiddenMenuClass)
    }
    initEvents(){
        this.openEvent()
        this.closeEvent()
    }
    removeClasses(){
        this.menu.classList.remove(this.menuClass)
        this.openButton.classList.remove(this.openButtonClass)
        this.closeButton.classList.remove(this.closeButtonClass)
        this.hiddenMenu.classList.remove(this.hiddenMenuClass)
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