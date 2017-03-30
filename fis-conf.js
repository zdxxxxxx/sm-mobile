
fis.match('*.js', {
    useHash:true,
}).match('*.scss', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('scss'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    useHash: true
}).match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
    useHash: true,
}).match('*.{png}', {
    optimizer: fis.plugin('png-compressor'),
    useHash: true
}).match('*.{jpg}', {
    useHash: true
});


fis.media('prod').match("(**/*.*)",{
    release:'/mobile/$1'
}).match('*.js', {
    useHash:true,
    optimizer: fis.plugin('uglify-js')
}).match('*.scss', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('scss'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    useHash: true
}).match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
    useHash: true,
}).match('*.{png}', {
    optimizer: fis.plugin('png-compressor'),
    useHash: true
}).match('*.{jpg}', {
    useHash: true
});
