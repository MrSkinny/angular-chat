var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

// file paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var STYLES_PATH = 'public/css/**/*.css';

// Styles for CSS 
// gulp.task('styles', function(){
//   console.log('Starting styles task');
  
//   return gulp.src(['public/css/reset.css', STYLES_PATH])
//     .pipe(plumber(function(error){
//       console.log('Styles Task Error: ');
//       console.log(error);
//       this.emit('end');
//     }))
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer())
//     .pipe(concat('styles.css'))  // not needed with SCSS
//     .pipe(minifyCss())           // not needed with SCSS
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(DIST_PATH))
//     .pipe(livereload());
// });

// Styles for SCSS
gulp.task('styles', function(){
  console.log('Starting styles task');
  
  return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function(error){
      console.log('Styles Task Error: ');
      console.log(error);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function(){
  console.log('Starting scripts task');
  
  return gulp.src(SCRIPTS_PATH)
    .pipe(plumber(function(error){
      console.log('Scripts task error: ');
      console.log(error);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Images
gulp.task('images', function(){
  console.log('Starting images task');
});

gulp.task('watch', function(){
  console.log('Starting watch task');
  require('./server.js');
  livereload.listen({port: 35729, host: 'localhost'});
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  // gulp.watch(STYLES_PATH, ['styles']);
  gulp.watch('public/scss/**/*.scss', ['styles']);
});

gulp.task('default', function(){
  console.log('Starting default task');
});
