const path = require('path');
const mix = require('laravel-mix')

mix.setPublicPath('public')
    .js('resources/app.js', 'js')
    .vue()