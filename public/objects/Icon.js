import Animator from "./Animator.js"

class Icon {
    constructor(parent, icon){
        this.parent = parent
        this.icon = icon
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

export default Icon