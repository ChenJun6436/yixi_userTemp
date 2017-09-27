/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/11
 * Time: 15:08
 * To change this template use File | Settings | File Templates.
 */
'use strict';
module.exports = () => {

    let _root = './static/';
    let dest = _root + 'dist',
        imgSrc = _root + 'src/images/**/*.{png,jpg,gif,ico}',
        htmlSrc = _root + 'src/js/**/*.html',
        cssSrc = _root + 'src/sass/index.scss',
        jsSrc = [
            _root + 'src/js/**/helper.module.js',
            _root + 'src/js/**/core.module.js',
            _root + 'src/js/components/**/!(app).module.js',
            _root + 'src/js/**/app.module.js',
            _root + 'src/js/components/**/*.js',
            _root + 'src/js/**/app.run.js',
            _root + 'src/js/**/app.config.js',
        ],
        condition = 'build';

    return {
        root:_root,
        dest:dest,
        imgSrc:imgSrc,
        htmlSrc:htmlSrc,
        cssSrc:cssSrc,
        jsSrc:jsSrc,
        condition:condition
    };
};