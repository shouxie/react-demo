const vendors = require('./vendors')
const config = require('../config')
module.exports = {
    isDev() {
        return (process.env.NODE_ENV || 'development').trim() !== 'production'
    },
    getEntrys() {
        const entrys = config.entrys
        const isDev = this.isDev()
        Object.keys(entrys).forEach(entryName => {
            const entryPath = entrys[entryName]
            const entryConfig = []
            if (isDev) {
                entryConfig.push('webpack-hot-middleware/client?reload=true')
            }
            entryConfig.push(entryPath)
            entrys[entryName] = entryConfig
        })
        if (!isDev) {
            entrys.vendor = vendors || []
        }
        return entrys
    }
}