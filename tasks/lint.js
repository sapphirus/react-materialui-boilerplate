import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  gulp.src('**/*.+(js|jsx)', { base: ['client', 'server'] })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});