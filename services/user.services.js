const User = require("../modals/user.modal")

const createUser = ({ name, lastname, email, password, }) => {
    return User.create({ name, lastname, email, password })
}


module.exports = {
    createUser
}