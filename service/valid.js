const valid = {

    contains: (string, arrayOfCharacters) => {
        for (x = 0; x < string.length; x++){
            for (y = 0; y < arrayOfCharacters.length; y++){
                if (string[x] == arrayOfCharacters[y]){
                    return true
                }
            }
        }
        return false
    },

    minMax: (string, minLength, maxLength) => {
        if (string.length < minLength){
            return false
        }
        if (string.length > maxLength){
            return false
        }
        return true
    },

    repeat: (string, arrayOfCharacters) => {
        //looping through the given array of characters
        for (x = 0; x < arrayOfCharacters.length; x++){
            //looping through the given string
            for (y = 0; y < string.length; y++){
                //checking if the current character matches the current strings character
                if (arrayOfCharacters[x] == string[y]){
                    //now checking if the next character in the string matches the current one
                    if (string[y] == string[y+1]){
                        //if we find a repeat, return true
                        return true
                    }
                }
            }
        }
        //if we run our loop without any repeats, return false
        return false
    }

}

module.exports = valid