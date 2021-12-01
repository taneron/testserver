// @ts-nocheck
import http from 'http'
const server = http.createServer()
server.on('request', (req, res) => {
  res.end('Hello World')
})
server.listen(3500)
