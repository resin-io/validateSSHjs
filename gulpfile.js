// Generated by CoffeeScript 1.6.2
(function() {
  var coffee, concat, gulp, gutil, uglify, wrap;

  gulp = require('gulp');

  coffee = require('gulp-coffee');

  concat = require('gulp-concat');

  gutil = require('gulp-util');

  uglify = require('gulp-uglify');

  wrap = require('gulp-wrap-umd');

  gulp.task('build', function() {
    var sink;

    sink = concat('main.js');
    gulp.src('lib/base64-binary.js').pipe(sink, {
      end: false
    });
    gulp.src('src/validateSSH.coffee').pipe(coffee({
      bare: true
    })).on('error', gutil.log).pipe(sink);
    return sink.pipe(wrap({
      exports: 'validateOpenSSHKey'
    })).pipe(uglify()).pipe(gulp.dest('./dist/'));
  });

  gulp.task('default', function() {
    gulp.run('build');
    return gulp.watch(['lib/base64-binary.js', 'src/validateSSH.coffee'], function(event) {
      return gulp.run('build');
    });
  });

}).call(this);
