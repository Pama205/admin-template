var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Fontawesome
  gulp.src([
    './node_modules/@fortawesome/fontawesome-free/css/*',
    './node_modules/@fortawesome/fontawesome-free/js/*'
  ])
  .pipe(gulp.dest('./vendor/fontawesome'))

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
  .pipe(gulp.dest('./vendor/bootstrap'))

  // Chart JS
  gulp.src([
    './node_modules/chart.js/dist/*',
    './node_modules/chart.js/src/*'
  ])
  .pipe(gulp.dest('./vendor/chart'))

  // datatables.net-bs4
  gulp.src([
    './node_modules/datatables.net-bs4/css/*',
    './node_modules/datatables.net-bs4/js/*'
  ])
  .pipe(gulp.dest('./vendor/datatables'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
  .pipe(gulp.dest('./vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/jquery.easing.min.js',
    './node_modules/jquery.easing/jquery.easing.js'
  ])
  .pipe(gulp.dest('./vendor/jquery.easing'))

  // Popper
  gulp.src([
    './node_modules/popper.js/dist/*'
  ])
  .pipe(gulp.dest('./vendor/popper'))

  // Moment
  gulp.src([
    './node_modules/moment/locale/*',
    './node_modules/moment/src/*',
    './node_modules/moment/moment.js'
  ])
  .pipe(gulp.dest('./vendor/moment'))

})

// Default task
gulp.task('default', ['vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
