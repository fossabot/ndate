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
  return gulp.src(`${outDir}`, {read: false})
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
gulp.task('build', ['tslint', 'compile']);

/**
 * Prepare istanbul for covering
 */
gulp.task('pre-test', ['build'], () => {
  return gulp.src([outDir + '/src/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

/**
 * Run tests and
 */
gulp.task('test', ['pre-test'], function () {
  return gulp.src([outDir + '/test/**/*.js'])
    .pipe(mocha({
      "extension": [
        ".ts"
      ],
      "require": [
        "ts-node/register"
      ],
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "**/*.d.ts"
      ],
      "all": true
    }))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports({reportOpts: {dir: outDir + '/coverage'}}))
    // Enforce a coverage of at least 100%
    .pipe(istanbul.enforceThresholds({thresholds: {global: 100}}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
