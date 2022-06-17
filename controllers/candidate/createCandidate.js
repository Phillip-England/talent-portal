const validator = require('validator')
const chars = require('../../service/chars')
const valid = require('../../service/valid')
const sanitize = require('../../service/sanitize')
const Candidate = require('../../models/candidateModel')
const Validate = require('../../service/objects/Validate')
const ValidateName = require('../../service/objects/ValidateName')
const ValidatePhone = require('../../service/objects/ValidatePhone')
const ValidateEmail = require('../../service/objects/ValidateEmail')


const createCandidate = async (req, res) => {
    try {
        let {firstName, lastName, email, phone} = req.body
        let validFirstName = new ValidateName(firstName, 'First Name')
        let validLastName = new ValidateName(lastName, 'Last Name')
        let validPhone = new ValidateName(phone, 'Phone Number')
        let validEmail = new ValidateName(email, 'Email Address')
        //first name validation
        validFirstName.setConstraints({
            maxLength: 30,
            minLength: 2,
            required: true,
            whiteList: chars.whitelistName(),
            noRepeat: chars.nameNoRepeatList(),
        })
        validFirstName.setErrorMessages({
            whiteListError: `Names should only contain A-Z and single quotes`,
            noRepeatError: 'Names cannot contains repeated single quotes'
        })
        validFirstName.format()
        validFirstName.runValidation()
        //last validation
        validLastName.setConstraints({
            maxLength: 30,
            minLength: 2,
            required: true,
            whiteList: chars.whitelistName(),
            noRepeat: chars.nameNoRepeatList(),
        })
        validLastName.setErrorMessages({
            whiteListError: `Names should only contain A-Z and single quotes`,
            noRepeatError: 'Names cannot contains repeated single quotes'
        })
        validLastName.format()
        validLastName.runValidation()
        //phone validation
        validPhone.setConstraints({
            whiteList: chars.whitelistPhone(),
            maxLength: 12,
        })
        validPhone.format()
        validPhone.runValidation()
        //email validation
        validEmail.runValidation()

       


        //creating a new candidate
        const newCandidate = await Candidate.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        })
        //returning new candidate as json
        res.status(200).json({
            candidate: newCandidate
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }

}

module.exports = createCandidate