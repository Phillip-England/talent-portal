const Validate = require('../objects/Validate')

class ValidatePhone extends Validate {
    constructor(value, name){
        super(value, name)
    }
    format(){
        let onlyNumbers = ''
        let formattedNumber = ''
        for (let x = 0; x < this.value.length; x++){
            if (!isNaN(Number(this.value[x]))){
                onlyNumbers = onlyNumbers + this.value[x]
            }
        }
        for (let x = 0; x < this.value.length; x++){
            switch(x){
                case 3:
                    formattedNumber = formattedNumber + '-' + onlyNumbers[x]   
                    break
                case 6:
                    formattedNumber = formattedNumber + '-' + onlyNumbers[x]   
                    break
                default:
                    if (onlyNumbers[x] !== undefined){
                        formattedNumber = formattedNumber + onlyNumbers[x]
                    }
            }
        }
        this.value = formattedNumber
    }
}

module.exports = ValidatePhone