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
    phoneFormat(event){
        this.phoneArray = []
        for (let x = 0; x < this.element.value.length; x++) this.phoneArray.push(this.element.value[x])
        for (let x = 0; x < this.phoneArray.length; x++) if ((x === 3 || x === 7) && this.phoneArray[x] !== '-') this.phoneArray.splice(x, 0, '-')
        if (this.phoneArray.length === 13) this.phoneArray.pop()
        this.element.value = ''
        for (let x = 0; x < this.phoneArray.length; x++) this.element.value += this.phoneArray[x]
        
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
    max(number){
        if (this.element.value.length >= number){
            this.element.value = this.element.value.slice(0, -1)
        }
    }
}

export default Input