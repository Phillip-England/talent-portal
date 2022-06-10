class Animator {
    constructor(element, animationClass, animationLength){
        this.element = element
        this.animationClass = animationClass
        this.animationLength = animationLength
    }
    animate(eventType){
        this.element.addEventListener(eventType, () => {
            this.element.classList.add(this.animationClass)
            setTimeout(() => {
                this.element.classList.remove(this.animationClass)
            }, this.animationLength)
        })
    }
}

export default Animator