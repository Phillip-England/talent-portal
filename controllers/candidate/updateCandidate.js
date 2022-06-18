const Validate = require('../../service/objects/Validate')
const ValidateName = require('../../service/objects/ValidateName')
const ValidatePhone = require('../../service/objects/ValidatePhone')
const ValidateEmail = require('../../service/objects/ValidateEmail')
const Candidate = require('../../models/candidateModel')
const chars = require('../../service/chars')

const updateCandidate = async (req, res) => {
    try {

        const {firstName, lastName, phone, email} = req.body

        const validFirstName = new ValidateName(firstName, 'First Name')
        const validLastName = new ValidateName(lastName, 'Last Name')
        const validPhone = new ValidatePhone(phone, 'Phone Number')
        const validEmail = new ValidateEmail(email, 'Email Address')

        //first name
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


        //last name
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

        //phone
        validPhone.setConstraints({
            whiteList: chars.whitelistPhone(),
            minLength: 12,
        })
        validPhone.runValidation()

        //email
        validEmail.runValidation()

        //updating in db
        const updatedCandidate = await Candidate.findByIdAndUpdate({_id: req.params.candidate}, {
            firstName: validFirstName.value,
            lastName: validLastName.value,
            phone: validPhone.value,
            email: validEmail.value,
        }, {new: true})


        //JSON response
        res.status(200).json({
            updatedCandidate: updatedCandidate
        })

    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }

}

module.exports = updateCandidate