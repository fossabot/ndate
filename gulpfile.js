'use strict';

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const replace = require('gulp-replace');

const outDir = 'build';

/**
 * Remove build directory.
 */
gulp.task('clean', () => {
  return gulp.src(outDir, { read: false })
    .pipe(rimraf());
});

gulp.task('coverage', () => {
  return gulp.src([`${outDir}/src/**/*.js`, `!${outDir}/test/**/*.js`])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
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
gulp.task('test', ['build', 'coverage'], () => {

  gulp.src([outDir + '/test/**/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports({reportOpts: {dir: outDir + '/coverage'}}))
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 90
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

gulp.task('lcov', () => {
  gulp.src(['build/coverage/lcov.info'])
    .pipe(replace(`${__dirname}/`, ''))
    .pipe(gulp.dest('build/coverage'));
});

gulp.task('copy', function() {
  gulp.src(['coverage/lcov.info'])
    .pipe(gulp.dest('build/coverage/'))
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
