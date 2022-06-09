class Icon {
    constructor({parent, icon, animation} = {}){
        this.parent = parent
        this.icon = icon
        this.animation = animation
    }
    initIconEvents(){
        this.addClickAnimation()
    }
    addClickAnimation(){
        this.icon.addEventListener('click', () => {
            this.icon.classList.add(this.animation)
            setTimeout(() => {
                this.icon.classList.remove(this.animation)
            }, 500)
        })
    }
    
}