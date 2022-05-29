const validator = require('validator')

const sanitize = {

    escapeAndTrim: (input) => {
        let escapedInput = validator.escape(input)
        let trimmedInput = validator.trim(escapedInput)
        return trimmedInput
    }
}

module.exports = sanitize