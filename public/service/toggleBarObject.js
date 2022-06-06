class ToggleBar {
    constructor(element, openIcon, closeIcon, title, hiddenMenu) {
        this.element = element
        this.openIcon = openIcon
        this.closeIcon = closeIcon
        this.title = title
        this.hiddenMenu = hiddenMenu
    }
    checkProperties() {
        console.log(this.element)
        console.log(this.openIcon)
        console.log(this.closeIcon)
        console.log(this.title)
        console.log(this.hiddenMenu)
    }
    init(){
        this.openIcon.addEventListener('click', () => {
            this.element.style.backgroundColor = 'var(--main-clr)'
            this.openIcon.style.display = 'none'
            this.closeIcon.style.display = 'block'
            this.title.style.color = 'var(--white)'
            this.hiddenMenu.style.display = 'flex'
        })
        this.closeIcon.addEventListener('click', () => {
            this.element.style.backgroundColor = 'var(--white)'
            this.openIcon.style.display = 'block'
            this.closeIcon.style.display = 'none'
            this.title.style.color = 'var(--main-clr)'
            this.hiddenMenu.style.display = 'none'
        })
    }
}