const Validate = require('../../service/objects/Validate')
const ValidateName = require('../../service/objects/ValidateName')

const updateCandidate = async (req, res) => {
    try {
        console.log('hit')
        const {first_name, last_name, phone, email} = req.body
        const validateFirstName = new ValidateName(first_name)
        console.log(validateFirstName.sanitize())
        const validateLastName = new ValidateName(last_name)
        const validatePhone = new Validate(phone)
        const validateEmail = new Validate(email)
        res.json({
            message: 'working'
        })
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = updateCandidate