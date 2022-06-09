class Button {
    constructor(button){
        this.button = button
    }
    clickAnimation(className){
        this.button.addEventListener('click', () => {
            this.button.classList.add(className)
            setTimeout(() => {
                this.button.classList.remove(className)
            }, 500)
        })
    }
}