class Input {
    constructor(element){
        this.element = element
        this.name = this.element.getAttribute('name')
        if (this.element.getAttribute('req') == 'true'){
            this.required = true
        } else {
            this.required = false
        }
    }
    setValue(value){
        this.element.value = value
    }
}

export default Input