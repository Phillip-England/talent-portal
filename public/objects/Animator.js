class Animator {
    constructor(){

    }
    setParams({eventLocation, classHolder, animationClass, eventType, siblingElements} = {}){
        this.eventLocation = eventLocation
        this.classHolder = classHolder
        this.animationClass = animationClass
        this.eventType = eventType
        this.siblingElements = siblingElements
    }
    animate(animationLength){
        this.eventLocation.addEventListener(this.eventType, () => {
            this.classHolder.classList.add(this.animationClass)
            setTimeout(() => {
                this.classHolder.classList.remove(this.animationClass)
            }, animationLength)
        })
    }
    endSiblingAnimations(){
        for(let x = 0; x < this.siblingElements.length; x++){
            this.siblingElements[x].classList.remove(this.animationClass)
        }
    }
    animationFreeze(){
        this.eventLocation.addEventListener(this.eventType, (event) => {
            this.endSiblingAnimations()
            this.classHolder.classList.add(this.animationClass)
            event.stopPropagation()
        })
        document.addEventListener('click', () => {
            this.endSiblingAnimations()
        })

    }
}

export default Animator