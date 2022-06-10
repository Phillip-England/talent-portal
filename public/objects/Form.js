class Form {
    constructor(form){
        this.form = form
    }
    setParameters({submitButton, inputs, errorMessage} = {}){
        this.submitButton = submitButton
        this.inputs = inputs
        this.errorMessage = errorMessage
    }
    checkParameters(){
        console.log(this.form)
        console.log(this.submitButton)
        console.log(this.inputs)
        console.log(this.errorMessage)
    }
    isFormComplete(){
        console.log(this.inputs.length)
    }
    submit(){
        console.log(this.isFormComplete())
    }
}

export default Form
