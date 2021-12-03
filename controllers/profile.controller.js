const _ = require("lodash")
const { getUserById } = require("../services/user.services")

const getMyProfileHandler = async (req, res, next) => {
    const user = await getUserById(req.user._id)
    return res.json(user)
}

module.exports = {
    getMyProfileHandler
}