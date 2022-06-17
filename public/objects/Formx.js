class Formx {
    constructor(form){
        this.form = form
    }
    setProperties({submitButton, inputs, requiredInputs, errorMessage, errorWrapper, astricks, loader, getUrl, postUrl} = {}){
        this.submitButton = submitButton
        this.inputs = inputs
        this.requiredInputs = requiredInputs
        this.errorWrapper = errorWrapper
        this.errorMessage = errorMessage
        this.astricks = astricks
        this.loader = loader
        this.getUrl = getUrl
        this.postUrl = postUrl
    }
    async get(){
        let res = await fetch(this.getUrl, {
            method: 'GET'
        })
        let data = await res.json()
        return data
    }
    async populateInputs(){
        let data = await this.get()
        console.log(data)
    }
}

export default Formx