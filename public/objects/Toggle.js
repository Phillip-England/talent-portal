class Toggle {
    constructor(element, position){
        this.element = element
        this.position = position
        this.active = false
        this.style = String(this.element.getAttribute('active'))
    }
    invert(siblings){
        if (siblings) this.deactivateAll(siblings)
        if (this.active) {
            this.deactivate()
        } else {
            this.activate()
        }
    }
    activate(siblings){
        if (siblings) this.deactivateAll(siblings)
        this.element.classList.add(this.style)
        this.active = true
    }
    deactivate(){
        this.element.classList.remove(this.style)
        this.active = false
    }
    deactivateAll(siblings){
        for (let x = 0; x < siblings.length; x++){
            if (siblings[x].active && siblings[x].position !== this.position) {
                siblings[x].deactivate()
            }
        }
    }
}

export default Toggle