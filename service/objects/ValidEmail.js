const Validate = require('../objects/Validate')
const validator = require('validator')

class ValidateEmail extends Validate{
    constructor(value, name){
        super(value, name)
    }
    runValidation(){
        if (this.required){
            this.completed(this.requiredError || `${this.name} is required`)
        }
        if (validator.isEmail(this.value) == false){
            throw new Error('Please provide a valid email')
        }
        this.value = validator.escape(this.value)
    }
}

module.exports = ValidateEmail