const valid = {

    contains: (input, arrayOfCharacters) => {
        for (x = 0; x < input.length; x++){
            for (y = 0; y < arrayOfCharacters.length; y++){
                if (input[x] == arrayOfCharacters[y]){
                    return true
                }
            }
        }
        return false
    },

    minMax: (input, minLength, maxLength) => {
        if (input.length < minLength){
            return false
        }
        if (input.length > maxLength){
            return false
        }
        return true
    }

}

module.exports = valid