const validator = require('validator')

class Validate {
    constructor(value){
        this.value = value
    }
    setConstraints({maxLength, minLength, required, } = {}){
        this.maxLength = maxLength
        this.minLength = minLength
        this.required = required
    }
    sanitize(){
        return validator.escape(this.value)
    }
    trim(){
        return validator.trim(this.value)
    }
    sanitizeAndTrim(){
        let escapedValue = validator.escape(this.value)
        let trimmedValue = validator.trim(escapedValue)
        return trimmedValue
    }
}

module.exports = Validate