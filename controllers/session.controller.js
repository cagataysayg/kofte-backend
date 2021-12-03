const { createUser } = require("../services/user.services")
module.exports.signInHandler = (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ success: false, message: "email or password not provided" })

    return res.sendStatus(200)
}

module.exports.signUpHandler = async (req, res) => {
    const { email, password, name, lastname } = req.body
    if (!email || !password || !name || !lastname) return res.json({ success: false, message: "any data not provided" })
    try {
        const user = await createUser({ email, password, name, lastname })
        return res.json(user)
    } catch (e) {
        console.log(e)
        return res.status(400).json({ success: false, error: "email already used." })
    }

}