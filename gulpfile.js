var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var watch = require('gulp-watch');
var gulpZip = require('gulp-zip');
var rename  = require('gulp-rename');
var fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));
const version = packageJson.version;
gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/**/*.js'),
            uglify(),
            gulp.dest('dist'),
            gulp.dest('extension/scripts')
        ],
        cb
    );
});

gulp.task('watch', function () {
   gulp.watch('src/**/*.js',['compress'])
});

gulp.task('release', ['compress'], () => {
  return gulp.src('extension/**')
    .pipe(gulpZip(`whatsElement-${version}.zip`))
    .pipe(gulp.dest('dist'));
});