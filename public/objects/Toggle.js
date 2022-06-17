class Toggle {
    constructor(element, style){
        this.element = element
        this.active = false
        this.style = style
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
            if (siblings[x].active && siblings[x] !== this) {
                siblings[x].deactivate()
            }
        }
    }
}

export default Toggle