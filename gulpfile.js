'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-w3c-css');
var htmlhint = require("gulp-htmlhint");
var beautify = require('gulp-beautify');
var babel = require('gulp-babel');
var about = require('gulp-about');
var colorguard = require('gulp-colorguard');
var prettyUrl = require("gulp-pretty-url");


gulp.task('sass', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// gulp.task('w3c-css', function () {
//     gulp.watch('./assets/sass/**/*.scss', ['sass']);
//   });

gulp.task('css', function() {
  return gulp.src('./assets/sass/*.css')
    .pipe(css())
    .pipe(gulp.dest('./assets/sass'));
});

gulp.task('htmlhint', function(){
  return gulp.src('./src/*.html')
  .pipe(htmlhint())
  .pipe(gulp.dest('./src/*.html'));
});

gulp.task('beautify', function() {
  gulp.src('./src/*.js')
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('./public/'))
});

gulp.task('babel', function(){
  return gulp.src('./assets')
});

gulp.task('about', function () {
  return gulp.src('package.json')
      .pipe(about())
      .pipe(gulp.dest('dist'))
});

gulp.task('colorcss', function() {
  gulp.src('./src/css/**/*.css')
      .pipe(colorguard())
      .pipe(gulp.dest('./assets/css'));
});

gulp.task("pretty-urls", function() {
  return gulp.src("src/**/*.hbs")
    .pipe(prettyUrl())
    .pipe(gulp.dest("dest"))
});



gulp.task('default', ['sass', 'watch', 'css', 'htmlhint', 'beautify', 'babel', 'about', 'colorcss', 'pretty-urls']);