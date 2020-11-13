const gulp = require('gulp');
const { task,series } = require('gulp');
const babelify = require('babelify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gulpZip = require('gulp-zip');
const rename  = require('gulp-rename');
const fs = require('fs');
const browserify = require('browserify');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));
const es = require('event-stream');
const version = packageJson.version;

const compress = function (cb) {
    const entires = ["src/whatsElement.js","src/whatsElementPure.js"]

    // const b = browserify({
    //     entries:["src/whatsElement.js","src/whatsElementWithUI.js"]
    // })

    const tasks = entires.map(function(entry){
        return browserify({ entries: entry})
            .transform(babelify)
            .bundle()
            .pipe(source(entry.replace("src/","")))
            .pipe(buffer())
            .pipe(gulp.dest('extension/scripts'))
            .pipe(uglify())
            .pipe(rename({
                suffix:".min"
            }))
            .pipe(gulp.dest('dist'))
            .pipe(gulp.dest('extension/scripts'))
    })
    es.merge(tasks).on("end",cb);
    // pump([
    //         gulp.src('src/**/whatsElement.js'),
    //         babel(),
    //         uglify(),
    //         gulp.dest('dist'),
    //         gulp.dest('extension/scripts'),
    //         rename({
    //           suffix:".min"
    //         }),
    //         gulp.dest('dist'),
    //     ],
    //     cb
    // );
}

task('compress', compress);

task('watch', function () {
   gulp.watch('src/**/*.js',compress)
});

const copy = function () {
    return gulp.src('extension/**')
        .pipe(gulpZip(`whatsElement-${version}.zip`))
        .pipe(gulp.dest('dist'));
};
task('copy',);

task('release', series(compress,copy));