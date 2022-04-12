const express = require('express')
const app = express()

const HTTP_PORT = args.port || 5000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});