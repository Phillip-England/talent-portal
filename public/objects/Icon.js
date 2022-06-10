class Icon {
    constructor(parent, icon){
        this.parent = parent
        this.icon = icon
    }
    animate(animationClass, eventType, animationLength){
        let obj = new Animator(this.icon, animationClass, animationLength)
        obj.animate(eventType)
    }
    setEventElements(objectOfElements){
        this.eventElements = objectOfElements
    }
    setToggleElements(objectOfElements){
        this.toggleElements = objectOfElements
    }
    setToggleClasses(objectOfClasses){
        this.toggleClasses = objectOfClasses
    }
    toggle(){
        Object.values(this.eventElements).forEach(element => {
            element.addEventListener('click', () => {
                Object.keys(this.toggleElements).forEach(key => {
                    this.toggleElements[key].classList.toggle(this.toggleClasses[key])
                })
            })
        })
    }
}