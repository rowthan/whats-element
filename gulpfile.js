var gulp = require('gulp');
var babelify = require('babelify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gulpZip = require('gulp-zip');
var rename  = require('gulp-rename');
var fs = require('fs');
var browserify = require('browserify');
const packageJson = JSON.parse(fs.readFileSync('./package.json'));
var es = require('event-stream');
const version = packageJson.version;
gulp.task('compress', function (cb) {
    const entires = ["src/whatsElement.js","src/whatsElementWithUI.js"]

    // var b = browserify({
    //     entries:["src/whatsElement.js","src/whatsElementWithUI.js"]
    // })

    var tasks = entires.map(function(entry){
        return browserify({ entries: entry})
            .transform(babelify)
            .bundle()
            .pipe(source(entry.replace("src/","")))
            .pipe(buffer())

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
});

gulp.task('watch', function () {
   gulp.watch('src/**/*.js',['compress'])
});

gulp.task('release', ['compress'], () => {
  return gulp.src('extension/**')
    .pipe(gulpZip(`whatsElement-${version}.zip`))
    .pipe(gulp.dest('dist'));
});