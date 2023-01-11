const log4js = require('log4js')
const path = require('path')
const fileURLToPath = require('url')
const root = path.join(__dirname)

log4js.configure({
    appenders: {
        terminal: { type: 'console' },
        warnFile: { type: 'file', filename: root + '../../log/warn.log' },
        errorFile: { type: 'file', filename: root + '../../log/error.log' },
        loggerInfo: { type: 'logLevelFilter', appender: 'terminal', level: 'info' },
        loggerWarn: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn', maxLevel: 'warn' },
        loggerError: { type: 'logLevelFilter', appender: 'errorFile', level: 'error', maxLevel: 'error' }
    },
    categories: {
        default: { appenders: ['terminal', 'loggerWarn', 'loggerError'], level: 'info' }
    }
})

const logger = log4js.getLogger();

module.exports = logger;