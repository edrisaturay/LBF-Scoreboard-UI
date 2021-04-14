let mix = require('laravel-mix');

mix.js('scss/app.js', 'js')
    .sass('scss/app.scss', 'css');

if (mix.inProduction()) {
    mix.version();
}