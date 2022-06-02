const validator = require('validator')
const chars = require('../../service/chars')
const valid = require('../../service/valid')
const sanitize = require('../../service/sanitize')
const Candidate = require('../../models/candidateModel')

const createCandidate = async (req, res) => {
    try {
        //getting data from req.body
        let {first_name, last_name, email, phone} = req.body
        //checking if required inputs were provided
        if (first_name == ''){
            throw new Error('Please provide a first name')
        }
        if (last_name == ''){
            throw new Error('Please provide a last name')
        }
        //checking if the candidate already has a profile
        //ENTER CODE HERE FOR ABOVE COMMENT
        //=====================
        //FIRST NAME VALIDATION
        //===================== 
        //changing first letter of first name to upper case letter
        first_name = first_name[0].toUpperCase() + first_name.slice(1)
        //whitelist check (should only contain a-z and single quotes)
        if (validator.isWhitelisted(first_name, chars.whitelistName()) == false){
            throw new Error('First name should only contain A-Z and single quotes')
        }
        //checking if any single quotes repeat
        if (valid.repeat(first_name, ['\'']) == true){
            throw new Error('First name cannot have repeated single quotes')
        }
        //checking if the first name is longer than 30 characters
        if (first_name.length > 30){
            throw new Error('First name cannot be longer than 30 characters')
        }
        //=====================
        //LAST NAME VALIDATION
        //===================== 
        //changing first letter of last name to upper case
        last_name = last_name[0].toUpperCase() + last_name.slice(1)
        //whitelist check (should only contain a-z and single quotes)
        if (validator.isWhitelisted(last_name, chars.whitelistName()) == false){
            throw new Error('Last name should only contain A-Z and single quote')
        }
        //checking if any single quotes repeat
        if (valid.repeat(last_name, ['\'']) == true){
            throw new Error('Last name cannot have repeated single quotes')
        }
        //checking if the last name is longer than 30 characters
        if (last_name.length > 30){
            throw new Error('Last name cannot be longer than 30 characters')
        }
        //=====================
        //EMAIL VALIDATION
        //===================== 
        //email is not required, so if an email was not provided, do not run validation
        if (email != ''){
            //checking if a valid email was provided
            if (validator.isEmail(email) == false){
                throw new Error('Please provide a valid email')
            }           
        }
        //=====================
        //PHONE VALIDATION
        //===================== 
        //phone number is not required, so if a phone number is not provided, do not run validation
        if (phone != ''){
            //checking if the phone number is only numbers and no letters using whitelist
            if (validator.isWhitelisted(phone, chars.whitelistPhone()) == false){
                throw new Error('Please format phone number like this: (xxx)-xxx-xxxx')
            }
            //checking if the phone number repeats (, ), or -
            if (valid.repeat(phone, ['(', ')', '-']) == true){
                throw new Error('Phone number cannot repeat the following characters: (, ), and -')
            }
            //checking if the phone number has 14 characters
            if (phone.length != 14){
                throw new Error('Please format phone number like this: (xxx)-xxx-xxxx')
            }
        }
        //sanitizing inputs
        first_name = sanitize.escapeAndTrim(first_name)
        last_name = sanitize.escapeAndTrim(last_name)
        email = sanitize.escapeAndTrim(email)
        phone = sanitize.escapeAndTrim(phone)
        //creating a new candidate
        const newCandidate = await Candidate.create({
            firstName: first_name,
            lastName: last_name,
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