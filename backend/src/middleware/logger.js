
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path}\t${req.url}\t${req.headers.origin}`)
    next()
}

module.exports = logger;