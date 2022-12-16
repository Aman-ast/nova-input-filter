let mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .postCss('resources/css/entry.css', 'css')
