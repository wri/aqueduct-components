const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

// Dir config
const CONFIG = {
  dist: 'lib'
};

gulp.task('clean', () => {
  del.sync(CONFIG.dist);
});

gulp.task('dist', ['clean'], () => {
  gulp.src('src/**/*.{js,jsx}')
    .pipe(babel({
      presets: ['react', 'latest', 'stage-3']
    }))
    .pipe(gulp.dest(CONFIG.dist));
});

gulp.task('dev', () => {
  gulp.watch('src/**/*.{js,jsx}', ['dist']);
});
