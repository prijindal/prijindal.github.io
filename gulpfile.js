var $    = require('gulp-load-plugins')();
var gulp = require('gulp');
var rimraf   = require('rimraf');
var sequence = require('run-sequence');

var paths = {
  assets: [
    './client/**/*.*',
    '!./client/templates/**/*.*',
    '!./client/scss/**/*.*'
  ],
  // Sass will check these folders for files when you use @import.
  sass: [
    'client/scss'
  ],
  angular:[
    './bower_components/angular/angular.min.js',
    './bower_components/angular-cookies/angular-cookies.min.js',
    './bower_components/angular-route/angular-route.min.js'
  ]
}

gulp.task('clean', function(cb) {
  rimraf('./build', cb);
});
// Copies everything in the client folder except templates, Sass, and JS
gulp.task('copy', function() {
  return gulp.src(paths.assets, {
    base: './client/'
  })
    .pipe(gulp.dest('./build'))
  ;
});
gulp.task('copy:angular', function() {
  return gulp.src(paths.angular, {
    base: './bower_components'
  })
    .pipe(gulp.dest('./build/js'))
  ;
});

gulp.task('copy:templates', function() {
  return gulp.src('./client/templates/**/*.html', {
    base: './client/templates'
  })
    .pipe(gulp.dest('./build/templates'))
  ;
  ;
});

gulp.task('copy:partials', function() {
  return gulp.src('./client/partials/**/*.html', {
    base: './client/partials'
  })
    .pipe(gulp.dest('./build/partials'))
  ;
  ;
});

// Compiles Sass
gulp.task('sass', function () {
  return gulp.src('client/scss/app.scss')
    .pipe($.sass({
      includePaths: paths.sass,
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./build/css/'))
  ;
});

var port = process.env.PORT || 5000;
var socket = '0.0.0.0';
gulp.task('server',['build'], function() {
  gulp.src('./build')
  .pipe($.webserver({
    port:port,
    host:socket,
    reload:true
  }))
})

gulp.task('build', function(cb) {
  sequence('clean',['copy','copy:angular', 'sass', 'copy:partials'], 'copy:templates', cb);
});

gulp.task('default', ['server'], function() {
  // Watch Sass
  gulp.watch(['./client/scss/**/*', './scss/**/*'], ['sass']);

  // Watch static files
  gulp.watch(['./client/**/*.*', '!./client/templates/**/*.*', '!./client/scss/**/*.*'], ['copy']);

  // Watch app templates
  gulp.watch(['./client/templates/**/*.html'], ['copy:templates']);

  // Watch app Partials
  gulp.watch(['./client/partials/**/*.html'], ['copy:partials']);
})
