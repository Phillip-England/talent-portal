class ToggleMenu {
    constructor() {
        this.open = false
    }
    setToggleElements(objectOfElements){
        this.toggleElements = objectOfElements
    }
    setCssClasses(objectOfCssClasses){
        this.toggleClasses = objectOfCssClasses
    }
    toggle(){
        Object.keys(this.toggleElements).forEach(key => {
            if (this.open === false){
                this.toggleElements[key].classList.add(this.toggleClasses[key])
            } else {
                this.toggleElements[key].classList.remove(this.toggleClasses[key])
            }
        })
    }
    close(){
        Object.keys(this.toggleElements).forEach(key => {
            this.toggleElements[key].classList.remove(this.toggleClasses[key])
        })
    }
    closeSiblingMenus(siblingMenus){
        console.log(siblingMenus)
        for (let x = 0; x < siblingMenus.length; x++){
            if (siblingMenus[x] !== this){
                siblingMenus[x].close()
            }
        }
    }
    toggleOpenStatus(){
        this.open = !this.open
    }
    
}

export default ToggleMenu