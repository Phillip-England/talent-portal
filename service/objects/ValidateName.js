const Validate = require("./Validate");

class ValidateName extends Validate{
    constructor(value, name){
        super(value, name)
    }
    format(){
        this.trim()
        let formattedValue = ''
        for (let x = 0; x < this.value.length; x++){
            if (x == 0){
                formattedValue = formattedValue + this.value[x].toUpperCase()
            } else {
                formattedValue = formattedValue + this.value[x].toLowerCase()
            }         
        }
        this.value = formattedValue
    }
}

module.exports = ValidateName