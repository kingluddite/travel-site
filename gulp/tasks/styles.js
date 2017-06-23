var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
stylelint = require('gulp-stylelint'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
      .on('error', function(error) {
        console.log(error.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'));
});
