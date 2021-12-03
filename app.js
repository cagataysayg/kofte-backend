const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const connect = require("./helpers/mongo")
const deserializeUser = require("./middlewares/deserializeUser")
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
connect()

app.use(deserializeUser)


app.use(routes)



app.listen(process.env.PORT, () => {
    console.log("server run on:", process.env.PORT)
})