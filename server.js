const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// PORT এবং NODE_ENV settings     
const port = parseInt(process.env.PORT || '3000', 10)
const dev = (process.env.NODE_ENV || 'production') !== 'production'

// Next.js app instance   
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) {
      console.error('Server error:', err)
      process.exit(1)
    }
    console.log(
      `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`
    )
  })
})
