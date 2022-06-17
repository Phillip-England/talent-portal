import Input from './Input.js'

class Formx {
    constructor(form){
        this.form = form
        this.inputs = []
    }
    props(name, value){
        this[name] = value
    }
    initInputs(inputClass){
        let inputElements = this.form.getElementsByClassName(inputClass)
        for (let x = 0; x < inputElements.length; x++){
            this.inputs.push(new Input(inputElements[x]))
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
        console.log('hit')
        let data = await this.get(url)
        Object.keys(data).forEach(key => {
            for (let x = 0; x < this.inputs.length; x++){
                console.log(this.inputs[x])
                this.inputs[x].setValue(data[key][this.inputs[x].name])
            }
        })
        
    }
}

export default Formx