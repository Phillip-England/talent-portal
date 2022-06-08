class Icon {
    constructor({icon, animation} = {}){
        this.icon = icon
        this.animation = animation
        this.clickEvent()
    }
    clickEvent(){
        this.icon.addEventListener('click', () => {
            this.icon.classList.add(this.animation)
            setTimeout(() => {
                console.log('removing')
                this.icon.classList.remove(this.animation)
            }, 500)
        })
    }
    
}