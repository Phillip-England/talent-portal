import Input from './Input.js'

class Formx {
    constructor(form){
        this.form = form
        this.inputs = []
        this.loading = false
    }
    props(name, value){
        this[name] = value
    }
    initInputs(inputClass){
        let inputElements = this.form.getElementsByClassName(inputClass)
        let inputObj
        for (let x = 0; x < inputElements.length; x++){
            inputObj = new Input(inputElements[x])
            inputObj.assignLabel(this.form.querySelector(`label[for='${inputObj.name}']`))
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
    async populateInputs(url){
        let data = await this.get(url)
        Object.keys(data).forEach(key => {
            for (let x = 0; x < this.inputs.length; x++){
                this.inputs[x].setValue(data[key][this.inputs[x].name])
            }
        })
    }
    onInput(callback){
        for (let x = 0; x < this.inputs.length; x++){
            this.inputs[x].element.addEventListener('input', () => {
                callback(this.inputs[x])
            })
        }
    }
    onSubmit(callback){
        this.form.addEventListener('submit', (event) => {
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
}

export default Formx