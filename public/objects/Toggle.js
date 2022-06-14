class Toggle {
    constructor() {
        this.open = false
    }
    setToggleElements(objectOfElements){
        this.toggleElements = objectOfElements
    }
    setCssClasses(objectOfCssClasses){
        this.toggleClasses = objectOfCssClasses
    }
    setSiblings(siblings){
        this.siblings = siblings
    }
    setOnSwitch(onSwitch){
        this.onSwitch = onSwitch
    }
    setOffSwitch(offSwitch){
        this.offSwitch = offSwitch
    }
    on(){
        Object.keys(this.toggleElements).forEach(key => {
            this.toggleElements[key].classList.add(this.toggleClasses[key])
        })
        this.open = true
    }
    off(){
        Object.keys(this.toggleElements).forEach(key => {
            this.toggleElements[key].classList.remove(this.toggleClasses[key])
        })
        this.open = false
    }
    toggle(){
    if (this.open === false){
        this.on()
    } else {
        this.off()
    }
    }
    offAll(){
        for (let x = 0; x < this.siblings.length; x++){
            if (this.siblings[x] !== this){
                this.siblings[x].off()
                this.siblings[x].open = false
            }
        }
    }
    
}

export default Toggle