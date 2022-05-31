const nodemailer = require('nodemailer')

const emailer = {

    transporter: async () => {
        try {
            const transporter = await nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASSWORD
                }
            })
            return transporter
        } catch (error) {
            return error
        }
    },

    accountActivation: async (userEmail, activationUrl) => {
        try {
            const transporter = await emailer.transporter()
            const email = await transporter.sendMail({
                from: process.env.EMAIL_ADDRESS,
                to: userEmail,
                subject: "Activate Your Account",
                html: `<a href=${activationUrl}>${activationUrl}</a>`
            })
            return email
        } catch (error) {
            return error
        }
    },
}

module.exports = emailer