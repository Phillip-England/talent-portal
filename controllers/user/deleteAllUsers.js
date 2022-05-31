const User = require('../../models/userModel')

// @ GET
// @ '/user/delete/all'
// @ PUBLIC
const deleteAllUsers = async (req, res) => {
    const deletedUsers = await User.deleteMany({})
    res.status(200).json({
        deletedUsers: deletedUsers
    })
}

module.exports = deleteAllUsers