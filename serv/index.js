const express = require('express')
const postRouter = require('./route/welbex.route')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT  = process.env.PORT || 8080

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//route configs
app.use("/api", postRouter)

app.listen(PORT, () => console.log('run', PORT))