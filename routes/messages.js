const express = require("express")
const { getMessagesHandler, getMessageHandler, sendMessageHandler} = require("../controllers/message.controller")
const requireUser = require("../middlewares/requireUser")
const messages = express.Router()

messages.get('/', [requireUser], getMessagesHandler)

messages.get('/:offerId', getMessageHandler)

messages.post('/:offerId', sendMessageHandler)

module.exports = messages