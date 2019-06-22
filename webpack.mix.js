const mix = require('laravel-mix');

mix
    .react('test/test.js', 'example')
    .react('src/index.js', 'lib')
    .disableNotifications()
;
