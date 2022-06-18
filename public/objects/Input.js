class Input {
    constructor(element){
        this.element = element
        this.name = this.element.getAttribute('name')
    }
    assignLabel(label){
        if (this.label === undefined){
            this.label = label
        }
    }
    isEmpty(){
        if (this.element.value.length === 0){
            return true
        } else {
            return false
        }
    }
    setValue(value){
        this.element.value = value
    }
    capFirstLetter(){
        if (this.element.value.length === 1){
            this.element.value = this.element.value.toUpperCase()
        }
    }
    phoneFormat(){
        if (!this.threeTrigger){
            this.threeTrigger = false
        }
        if (!this.sevenTrigger){
            this.sevenTrigger = false
        }
        switch (this.element.value.length) {
            default:
                if (this.element.value.length < 4){
                    this.threeTrigger = true
                }
                if (this.element.value.length < 7){
                    this.sevenTrigger = true
                }
                if (this.element.value.length > 12){
                    this.element.value = this.element.value.slice(0, -1)
                }
                break
            case 3:
                if (this.threeTrigger == true){
                    this.element.value = this.element.value + '-'
                    this.threeTrigger = false
                }
                break
            case 7:
                if (this.sevenTrigger == true){
                    this.element.value = this.element.value + '-'
                    this.sevenTrigger = false
                }
                break
        }
        console.log(this.element.value)
        console.log(this.element.value.indexOf('-', this.element.value.indexOf('-')))
    }
    require(){
        if (this.astrick === undefined){
            this.astrick = document.createElement('span')
            this.astrick.style.color = 'red'
            this.astrick.textContent = '*'
        }
        if (this.isEmpty()){
            this.label.appendChild(this.astrick)
            this.completed = false
        }
        if (this.isEmpty() === false && this.completed === false){
            this.label.removeChild(this.astrick)
            this.completed = true
        }

    }
}

export default Input