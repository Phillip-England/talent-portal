import Input from './Input.js'

class Form {
    constructor(form){
        this.element = form
        this.inputs = []
    }
    props(name, value){
        this[name] = value
    }
    initInputs(inputClass){
        let inputElements = this.element.getElementsByClassName(inputClass)
        let inputObj
        for (let x = 0; x < inputElements.length; x++){
            inputObj = new Input(inputElements[x])
            inputObj.assignLabel(this.element.querySelector(`label[for='${inputObj.name}']`))
            console.log(inputObj.element.value)
            if (inputObj.element.classList.contains('required') && inputObj.element.value !== '') {
                inputObj.require()
            }
            this.inputs.push(inputObj)
        }
    }
    async get(url){
        let res = await fetch(url, {
            method: 'GET'
        })
        let data = await res.json()
        return data
    }
    async post(url){
        let res = await fetch(url, {
            method: "POST",
            body: this.getFormData(),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json()
        return data
    }
    async populateInputs(url){
        let data = await this.get(url)
        Object.keys(data).forEach(key => {
            for (let x = 0; x < this.inputs.length; x++){
                if (data[key][this.inputs[x].name] !== undefined){
                    this.inputs[x].setValue(data[key][this.inputs[x].name])
                }
            }
        })
    }
    getFormData(){
        let data = {}
        for (let x = 0; x < this.inputs.length; x++){
            data[this.inputs[x].name] = this.inputs[x].element.value
        }
        return JSON.stringify(data)
    }
    onInput(callback){
        for (let x = 0; x < this.inputs.length; x++){
            this.inputs[x].element.addEventListener('input', (event) => {
                callback(event, this.inputs[x])
            })
        }
    }
    async onSubmit(callback){
        this.element.addEventListener('submit', (event) => {
            callback(event, this)
        })
    }
    load(loadingElement, activeClass){
        if (loadingElement.classList.contains(activeClass)){
            loadingElement.classList.remove(activeClass)
        } else {
            loadingElement.classList.add(activeClass)
        }
    }
    errorCheck(data){
        if (data.error) return true
        return false
    }
    displayErrorWrapper(wrapper, style){
        wrapper.classList.add(style)
    }
    hideErrorWrapper(wrapper, style){
        wrapper.classList.remove(style)
    }
    setErrorMessage(element, message){
        element.innerText = message
    }
}

export default Form