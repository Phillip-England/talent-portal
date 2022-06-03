const getFormValues = (inputs) => {
    let formObject = {}
    let name
    let value
    for (x = 0; x < inputs.length; x++){
        name = inputs[x].getAttribute('name')
        value = inputs[x].value
        formObject[name] = value
    }
    return JSON.stringify(formObject)
}