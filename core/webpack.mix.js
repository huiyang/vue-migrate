const path = require('path');
const mix = require('laravel-mix')

mix.setPublicPath('public')
    .js('resources/app.js', 'js')
    .vue({
        version: 3,
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        },
      })
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/'),
                vue: "@vue/compat",
                "@vue/composition-api": "@vue/compat",
            },
        },
    })