const express = require("express")
const dotenv = require("dotenv")

dotenv.config({ path: './config.env' })

const app = express()
const port = process.env.REACT_APP_PORT || 3002
app.listen(port)
