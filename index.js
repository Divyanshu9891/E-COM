const express = require("express")
const cors = require("cors")
const path = require("path")


require("dotenv").config()
require("./config/db-connect")

const Router = require("./routes/index.route")
const app = express()
app.use(cors())

app.use(express.json())

app.use("/api", Router)
app.use("/public", express.static("./public"))
app.use(express.static(path.join(__dirname, 'dist')))

app.use((req, res) => {
    express.static(path.join(__dirname, 'dist'))
});


const port = Number(process.env.PORT || 8000)
if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value "${process.env.PORT}". PORT must be an integer between 1 and 65535.`)
}

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
})
