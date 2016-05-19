const gulp = require('gulp');


// Default Task
gulp.task('default', ['lint-scss']);

gulp.task('lint-scss', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
 
  return gulp
    .src('**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
      debug: true
    }));
});

