var gulp = require('gulp'),
  del = require('del'),
  webpack = require('gulp-webpack'),
  webpackConfig = require('./webpack.config.js');
var IS_PRODUCT = false;
if (!IS_PRODUCT) {
  webpackConfig.watch = true;
}

var PATHS = {
  build: './build/',
  src: './src/'
};

// gulp clean
gulp.task('clean', function () {
  console.log('开始clean');
  del(['./build'], { force: true, dryRun: false }).then(function (paths) {
    console.log('已经删除文件: ', paths.join('\n'));
  });
});

// gulp webpack
gulp.task('webpack', function () {
  return gulp.src('./src/js/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['clean', 'webpack'], function () {
  console.log('开始default');

});