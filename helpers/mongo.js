const mongoose = require("mongoose")

const connect = () => {
    const dbUri = process.env.dbUri;
    return mongoose
        .connect(dbUri)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.log("db error", error);
            process.exit(1);
        });
}


module.exports = connect