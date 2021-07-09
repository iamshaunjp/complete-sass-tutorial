const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)