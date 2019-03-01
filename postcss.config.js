module.exports = {
    plugins: [
        require('precss')(),
        require('postcss-import'),
        require('autoprefixer')({
            browsers: ['last 2 versions']
        }),
        require('cssnano')({
            // safe:false
        })
    ]
}
