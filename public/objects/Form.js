import {qsa, qs} from '../service/dom.js'

class Form {
    constructor(form){
        this.form = form
        this.url = this.form.getAttribute('action')
    }
    setElements({submitButton, inputs, requiredInputs, errorMessage, errorWrapper, astricks, loader} = {}){
        this.submitButton = submitButton
        this.inputs = inputs
        this.requiredInputs = requiredInputs
        this.errorWrapper = errorWrapper
        this.errorMessage = errorMessage
        this.astricks = astricks
        this.loader = loader
    }
    setClasses({astrickActiveClass, errorActiveClass, loaderActiveClass} = {}){
        this.astrickActiveClass = astrickActiveClass
        this.errorActiveClass = errorActiveClass
        this.loaderActiveClass = loaderActiveClass
    }
    checkParameters(){
        console.log(this.form)
        console.log(this.submitButton)
        console.log(this.inputs)
        console.log(this.requiredInputs)
        console.log(this.astricks)
        console.log(this.errorMessage)
        console.log(this.errorWrapper)
    }
    isFormComplete(){
        let complete = true
        for (x = 0; x < this.inputs.length; x++){
            if (this.inputs[x].value == ''){
                complete = false
                break
            }
        }
        return complete
    }
    toggleAstricks(){
        for (x = 0; x < this.requiredInputs.length; x++){
            if (this.requiredInputs[x].value == ''){
                this.astricks[x].classList.add(this.astrickActiveClass)
            } else {
                this.astricks[x].classList.remove(this.astrickActiveClass)
            }
        }
    }
    revealErrorMessage(message){
        this.errorWrapper.classList.add(this.errorActiveClass)
        this.errorMessage.innerText = message
    }
    hideErrorMessage(){
        this.errorWrapper.classList.remove(this.errorActiveClass)
        this.errorMessage.innerText = ''
    }
    revealLoader(){
        this.loader.classList.add(this.loaderActiveClass)
    }
    removeLoader(){
        this.loader.classList.remove(this.loaderActiveClass)
    }
    getFormData(){
        let formObject = {}
        let name
        let value
        for (x = 0; x < this.inputs.length; x++){
            name = this.inputs[x].getAttribute('name')
            value = this.inputs[x].value
            formObject[name] = value
        }
        return JSON.stringify(formObject)
    }
    async formFetch(values){
        let res = await fetch(this.url, {
            method: "POST",
            body: values,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        //getting data from fetch
        let data = await res.json()
        return data
    }
    submit(){
        this.form.addEventListener('submit', async(event) => {
            try {
                event.preventDefault()
                console.log(this.url)
                //displaying our loader
                // this.revealLoader()
                //checking if the form is complete
                if (this.isFormComplete() == false){
                    this.toggleAstricks()
                    this.removeLoader()
                    throw('Please fill out the required form fields')
                }
                //getting form data
                let formValues = this.getFormData()
                //making our fetch request
                let data = await this.formFetch(formValues)
                console.log(data)
                //if we make it to the end, hide all astricks and the error message
                // this.removeLoader()
                this.toggleAstricks()
                this.hideErrorMessage()
            } catch (err) {
                this.revealErrorMessage(err)
            }

        })
    }
}

export default Form
