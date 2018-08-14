var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var watch = require('gulp-watch');
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