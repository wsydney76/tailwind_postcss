module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        process.env.NODE_ENV === 'production' && require('autoprefixer'),
        process.env.NODE_ENV === 'production' && require('cssnano')
    ]
}
