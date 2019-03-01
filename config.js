const path = require('path')
module.exports = {
    entrys: {
        app: path.join(__dirname, '/src/')
    },
    outputPath: path.join(__dirname, 'dist'),
    publicPath: '',
    eslint: false,
    port: 3001,
    prodSourceMap: true,
    proxyTable: {
        '/api': 'https://dalingjia.com'
    }
}
