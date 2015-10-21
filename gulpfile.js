var gulp = require('gulp');
var less = require('gulp-less');
var pleeease = require('gulp-pleeease');

gulp.task('css', function() {
  gulp.src('./src/style.less')
    .pipe(less({

    }))
    .pipe(pleeease({
      out: 'all.min.css',
    }))
    .pipe(gulp.dest('./dest'))
    ;
});

gulp.task('watch', function() {
  gulp.watch(['src/*', 'src/**/*'], ['css']);
});


gulp.task('default', ['css']);
gulp.task('dev', ['watch']);