const gulp = require('gulp');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const removeLogging = require('gulp-remove-logging');
const stripComments = require('gulp-strip-comments');
const cssimport = require('gulp-cssimport');
const { exec } = require('child_process');
const replace = require('gulp-replace');

function buildCustomBlocks(cb) {
  exec('wp-scripts build', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

function bundleGlobalCSS() {
  return gulp
    .src('src/CSS/globals/globals.css')
    .pipe(cssimport())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cssmin())
    .pipe(
      purgecss({
        content: ['src/**/*.js', '**/*.php', '**/*.css'],
        safelist: { deep: [/wp-social-link$/] },
      })
    )
    .pipe(
      replace(
        '../../../../assets/FetlifeLogo.webp',
        '../../assets/FetlifeLogo.webp'
      )
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/CSS'));
}

function bundleMobileNavCSS() {
  return gulp
    .src('src/CSS/globals/mobile-nav.css')
    .pipe(cssimport())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cssmin())
    .pipe(
      purgecss({
        content: ['src/**/*.js', '**/*.php', '**/*.css'],
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/CSS'));
}

function bundleModuleCSS() {
  return gulp
    .src('src/CSS/modules/*.css')
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cssmin())
    .pipe(
      purgecss({
        content: ['src/**/*.js', '**/*.php'],
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/CSS/modules'));
}

function minifyJS() {
  return gulp
    .src('src/JS/*.js') // Source JavaScript files
    .pipe(stripComments()) // Remove comments
    .pipe(removeLogging({})) // Remove console.log commands
    .pipe(uglify()) // Minify JavaScript
    .pipe(rename({ suffix: '.min' })) // Rename to indicate minified version
    .pipe(gulp.dest('build/JS')); // Output directory
}

exports.minifyJS = minifyJS;

exports.build = gulp.series(
  buildCustomBlocks,
  bundleGlobalCSS,
  bundleModuleCSS,
  bundleMobileNavCSS,
  minifyJS
);
