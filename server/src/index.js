require('dotenv').config()
const express = require ("express")
const cors = require("cors")
const cookieParser = require ("cookie-parser")
const userRouter = require('./router/userRouter')
const userEvent = require('./router/eventRouter')
const Database = require('./database/db')

const app = express()
const port = process.env.PORT || 1001

app.use(cors())
app.use(cookieParser())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use("/public/temp", express.static("public/temp"))

Database()
app.use("/api/v1/users" , userRouter)
app.use("/api/v1/event" , userEvent)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})