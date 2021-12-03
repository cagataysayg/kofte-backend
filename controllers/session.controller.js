const { createUser, validatePassword } = require("../services/user.services")
const { sign } = require("../services/session.services")
var _ = require('lodash');

module.exports.signInHandler = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ success: false, message: "email or password not provided" })

    const user = await validatePassword({ email, password });

    if (!user) {
        return res.status(401).send("Invalid username or password");
    }
    const accessToken = sign(user)
    return res.json({success:true,accessToken})
}

module.exports.signUpHandler = async (req, res) => {
    const { email, password, name, lastname } = req.body
    if (!email || !password || !name || !lastname) return res.status(400).json({ success: false, message: "any data not provided" })
    try {
        const user = await createUser({ email, password, name, lastname })
        return res.json(user)
    } catch (e) {
        console.log(e)
        return res.status(400).json({ success: false, error: "email already used." })
    }

}