class ToggleMenu {
    constructor(menu) {
        this.menu = menu
        this.open = false
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
    setSiblingMenus(siblingMenus){
        this.siblingMenus = siblingMenus
    }
    addClasses(){
        this.menu.classList.add(this.menuClass)
        this.openButton.classList.add(this.openButtonClass)
        this.closeButton.classList.add(this.closeButtonClass)
        this.hiddenMenu.classList.add(this.hiddenMenuClass)
        this.open = !this.open
    }
    removeClasses(){
        this.menu.classList.remove(this.menuClass)
        this.openButton.classList.remove(this.openButtonClass)
        this.closeButton.classList.remove(this.closeButtonClass)
        this.hiddenMenu.classList.remove(this.hiddenMenuClass)
        this.open = !this.open
    }
    closeSiblingMenus(){
        for (let x = 0; x < this.siblingMenus.length; x++){
            if (this.siblingMenus[x] !== this && this.siblingMenus[x].open == true){
                this.siblingMenus[x].removeClasses()
            }
        }
    }
    openEvent(){
        this.openButton.addEventListener('click', (event) => {
            this.addClasses()
            this.closeSiblingMenus()
        })
    }
    closeEvent(){
        this.closeButton.addEventListener('click', (event) => {
            this.removeClasses()
        })
        
    }
}

export default ToggleMenu