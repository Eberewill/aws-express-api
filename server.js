const http = require('http')
const app = require('./app.js')

const PORT = process.env.PORT || 5000;
const httpServer = http.createServer(app)

const server = httpServer.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
})


