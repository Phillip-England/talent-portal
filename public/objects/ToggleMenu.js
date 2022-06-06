class ToggleMenu {
    constructor(menu, openIcon, closeIcon, title, hiddenMenu) {
        this.menu = menu
        this.openIcon = openIcon
        this.closeIcon = closeIcon
        this.title = title
        this.hiddenMenu = hiddenMenu
        this.toggled = false
    }
    props() {
        console.log(this.menu)
        console.log(this.openIcon)
        console.log(this.closeIcon)
        console.log(this.title)
        console.log(this.hiddenMenu)
        console.log(this.toggled)
    }
    openHiddenMenu(config) {
        if (config.menuBackGroundColor !== undefined){
            this.menu.style.backgroundColor = config.menuBackGroundColor
        }
        if (config.titleColor !== undefined){
            this.title.style.color = config.titleColor
        }
        if (config.hiddenMenuDisplay !== undefined){
            this.hiddenMenu.style.display = config.hiddenMenuDisplay
        }
        this.openIcon.style.display = 'none'
        this.closeIcon.style.display = 'block'
        this.toggled = true
    }
    closeHiddenMenu(){
        this.menu.style.backgroundColor = ''
        this.openIcon.style.display = ''
        this.closeIcon.style.display = ''
        this.title.style.color = ''
        this.hiddenMenu.style.display = ''
        this.toggled = false
    }
}