'use strict';

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');

const outDir = 'build';

/**
 * Remove build directory.
 */
gulp.task('clean', () => {
  return gulp.src(`${outDir}/src/**/*`, { read: false })
    .pipe(rimraf());
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src('./src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report({emitError: true}))
});

gulp.task('compile', shell.task([
  'tsc',
]));

/**
 * Build the project.
 */
gulp.task('build', ['tslint', 'compile'], () => {
  console.log('Building the project ...');
});

/**
 * Run tests.
 */
gulp.task('test', ['build'], () => {

  gulp.src([outDir + '/test/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 100
      }
    }))
    .once('error', (error) => {
      console.log(error);
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    })

});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
