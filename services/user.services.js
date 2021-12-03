const User = require("../modals/user.modal")
var _ = require('lodash');
const createUser = ({ name, lastname, email, password, }) => {
    return User.create({ name, lastname, email, password })
}

const validatePassword = async ({
    email,
    password,
}) => {
    const user = await User.findOne({ email });

    if (!user) {
        return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return false;
    }
    return _.omit(user.toJSON(), ["password", "createdAt", "updatedAt", "__v"]);
}




module.exports = {
    createUser,
    validatePassword
}