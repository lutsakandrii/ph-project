'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch'); 
sass.compiler = require('node-sass');
 
gulp.task('watch', function() {

  gulp.watch('style/scss/*.scss', gulp.series('sass'));
});

gulp.task('sass', function () {
  return gulp.src('./style/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

