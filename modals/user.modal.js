const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        lastname: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

UserSchema.pre("save", async function (next) {
    let user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    // Random additional data
    const salt = await bcrypt.genSalt(process.env.saltWorkFactor);

    const hash = await bcrypt.hashSync(user.password, salt);

    // Replace the password with the hash
    user.password = hash;
    return next();
});


// Used for logging in
UserSchema.methods.comparePassword = async function (
    candidatePassword
) {
    const user = this;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

//kullancıcı girişi yapmak için model oluşturuyoruz.
const User = mongoose.model("User", UserSchema);

module.exports = User;
