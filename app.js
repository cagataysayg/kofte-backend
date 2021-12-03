const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const connect = require("./helpers/mongo")
const deserializeUser = require("./middlewares/deserializeUser")
const multer = require('multer')
const { addPhotoUrl } = require("./services/offer.services")
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
connect()

app.use(deserializeUser)
app.use('/public', express.static('public'))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix +'.jpg')
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

app.post("/upload/offer/:offerId", upload.single('img'), async (req, res, next) => {
    if (req.file) {
        const {offerId} = req.params
        const pathName = 'http://144.91.113.217:5000/'+req.file.path;
    	console.log({pathName})
        const added = await addPhotoUrl(offerId,pathName)
        if(added.modifiedCount && added.matchedCount)
        return res.sendStatus(200)
        else return res.sendStats(400)
    }
})


app.use(routes)



app.listen(process.env.PORT, () => {
    console.log("server run on:", process.env.PORT)
})