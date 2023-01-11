const logger = require("../logger/Log4jsLogger.js");

const loggerMiddleware = (req, _res, next) => {
    logger.info(`[${req.method}] ${req.originalUrl}`)
    next();
}
module.exports = loggerMiddleware;