const validator = require('validator')

class Validate {
    constructor(value, name){
        this.value = value
        this.name = name
    }
    setConstraints({maxLength, minLength, required, whiteList, noRepeat} = {}){
        this.maxLength = maxLength //number
        this.minLength = minLength //number
        this.required = required //boolean
        this.whiteList = whiteList //array
        this.noRepeatList = noRepeat //array
    }
    setErrorMessages({maxLengthError, minLengthError, requiredError, whiteListError, noRepeatError} = {}){
        this.maxLengthError = maxLengthError,
        this.minLengthError = minLengthError,
        this.requiredError = requiredError,
        this.whiteListError = whiteListError,
        this.noRepeatError = noRepeatError
    }
    runValidation(){
        if (this.required){
            this.completed(this.requiredError || `${this.name} is required`)
        }
        if (this.maxLength){
            this.checkMaxLength(this.maxLengthError || `${this.name} must contain less than ${this.maxLength} characters`)
        }
        if (this.minLength){
            this.checkMinLength(this.minLengthError || `${this.name} must contain more than ${this.minLength} characters`)
        }
        if (this.whiteList){
            this.illegalCharacters(this.whiteListError || `${this.name} contains illegal characters`)
        }
        if (this.noRepeatList){
            this.repeatedCharacters(this.noRepeatError || `${this.name} has contains illegal repeated characters`)
        }
        this.value = validator.escape(this.value)
    }
    trim(){
        this.value = validator.trim(this.value)
    }
    sanitizeAndTrim(){
        let escapedValue = validator.escape(this.value)
        let trimmedValue = validator.trim(escapedValue)
        this.value = trimmedValue
    }
    completed(errorMessage){
        if (this.value === ''){
            throw new Error(errorMessage)
        }
    }
    checkMaxLength(errorMessage){
        if (this.value.length > this.maxLength){
            throw new Error(errorMessage)
        }
    }
    checkMinLength(errorMessage){
        if (this.value.length < this.minLength){
            throw new Error(errorMessage)
        }
    }
    illegalCharacters(errorMessage){
        if (validator.isWhitelisted(this.value, this.whiteList) === false){
            throw new Error(errorMessage)
        }
    }
    repeatedCharacters(errorMessage){
        for (let x = 0; x < this.noRepeatList; x++){
            for (let y = 0; y < this.value.length; y++){
                if (this.noRepeatList[x] === this.value[y]){
                    if (this.noRepeatList[x] === this.value[y+1]){
                        throw new Error(errorMessage)
                    }
                }
            }
        }
    }
}

module.exports = Validate