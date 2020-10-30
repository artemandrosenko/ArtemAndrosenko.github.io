let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', async function() {
    return gulp
        .src('src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.parallel('sass'));
});