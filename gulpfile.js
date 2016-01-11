/**
@function chunkOut
@desc Debug pipe output into console
@param {Object} chunk
**/

function chunkOut(chunk){
  var contents = chunk.contents.toString().trim(); 
  var bufLength = process.stdout.write;
  var hr = '\n\n' + Array(bufLength).join("_") + '\n\n'
  if (contents.length > 1) {
      process.stdout.write(chunk.path + '\n' + contents + '\n');
      process.stdout.write(chunk.path + hr);
  }    
}


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
var htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var mainBowerFiles = require('main-bower-files');

var config = require('./gulp-config.json');
// config.paths
// DIST_PATH DEBUG_SOURCE_PATH DEBUG_SCRIPTS_PATH HTML_PATHS HTML_PATHS_FOR_LITE_SERVER STYLES_PATH


// HTML - asset pipeline!
gulp.task('html', function(){
  gulp.src('app/index.html')
    .pipe(htmlreplace({
      'css': 'styles.css',
      'lib-styles': 'lib-styles.css',
      'lib-scripts': 'lib-scripts.css',
      'lib-js-angular': 'lib/angular-1.4.8.min.js',
      'lib-js-angular-cookies': 'lib/angular-cookies-1.4.8.min.js',
      'lib-js-ui-bootstrap': 'lib/ui-bootstrap-tpls-0.14.3.min.js',
      'app-js': 'app.js'
    }))
    .pipe(gulp.dest('app/dist'));
});

// Styles for SCSS
gulp.task('styles', function(){
  console.log('Starting styles task');
  
  return gulp.src('app/scss/styles.scss')
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
    .pipe(gulp.dest(config.paths.DIST_PATH))
});

// Bower css
gulp.task('lib-styles', function(){
  gulp.src(mainBowerFiles("**/*.css"))
//  a.on('data', chunkOut);
   .pipe(concat('lib-styles.css'))
   .pipe(minifyCss())
   .pipe(gulp.dest(config.paths.DIST_PATH))
});

// Bower js
gulp.task('lib-scripts', function(){
  gulp.src(mainBowerFiles("**/*.js"))
//  a.on('data', chunkOut);
    .pipe(uglify())
    .pipe(concat('lib-scripts.js'))
    .pipe(gulp.dest(config.paths.DIST_PATH))
});

// Debug Scripts
gulp.task('debug-scripts', function(){
  console.log('Starting scripts task');
  
  return gulp.src([config.paths.DEBUG_SOURCE_PATH])
    .pipe(plumber(function(error){
      console.log('Scripts task error: ');
      console.log(error);
      this.emit('end');
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.paths.DEBUG_SCRIPTS_PATH));
});

// Prod Scripts
gulp.task('prod-scripts', function(){
  console.log('Starting scripts task');
  gulp.start('minify-libraries');
  
  return gulp.src([config.paths.DEBUG_SOURCE_PATH])
    .pipe(plumber(function(error){
      console.log('Scripts task error: ');
      console.log(error);
      this.emit('end');
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.paths.DIST_PATH))
});

// Minify libraries
gulp.task('minify-libraries', function(){
  return gulp.src('app/lib/**/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.paths.DIST_PATH + '/lib'));
});

// Images
gulp.task('images', function(){
  console.log('Starting build images task');
  gulp.src('app/images/**/*')
    .pipe(gulp.dest('app/dist/images'));
});

// Templates
gulp.task('templates', function(){
  console.log('Starting template task');
  gulp.src('app/templates/**/*.html')
    .pipe(gulp.dest('app/dist/templates'));
});

// Dev Build
gulp.task('dev-build', function(){
  console.log('Starting dev build task');
  gulp.start('styles');
  gulp.start('lib-styles');
  gulp.start('lib-scripts');
  gulp.start('debug-scripts');
  gulp.watch(config.paths.DEBUG_SOURCE_PATH, ['debug-scripts', 'prod-scripts']);
  gulp.watch('app/scss/**/*.scss', ['styles']);
});

// WATCH
gulp.task('watch', function(){
  console.log('Starting watch task');
  gulp.start('styles');
  gulp.start('lib-styles');
  gulp.start('lib-scripts');
  gulp.start('debug-scripts');
  setTimeout(()=>{ gulp.start('start-dev-server') }, 3000);


  gulp.watch(config.paths.DEBUG_SOURCE_PATH, ['debug-scripts', 'prod-scripts']);
  gulp.watch('app/scss/**/*.scss', ['styles']);
  // gulp.watch(HTML_PATHS, function(){
  //   gulp.src(HTML_PATHS).pipe(livereload());
  // });
});

  // Old server
  // require('./server.js')();
  // livereload.listen({port: 35729, host: 'localhost'});

// Copy images
gulp.task('copy-images', function(){
  console.log('Starting image copy task...');
  gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('app/dist/images'));
});

// Build
gulp.task('build', function(){
  console.log('Starting build task...');
  gulp.start('html');
  gulp.start('styles');
  gulp.start('lib-styles');
  gulp.start('lib-scripts');
  gulp.start('images');
  gulp.start('prod-scripts');
  gulp.start('templates');
});

// Build and Run
gulp.task('build-run', function(){
  console.log('Starting build and run prod');
  gulp.start('build');
  gulp.start('start-prod-server');
});

gulp.task('start-prod-server', shell.task([
  "lite-server --baseDir './app/dist'"
]));

gulp.task('start-dev-server', shell.task([
  "lite-server --baseDir './app' --files " + config.paths.HTML_PATHS_FOR_LITE_SERVER
]));

// DEFAULT
gulp.task('default', function(){
  console.log('Starting default task');
  gulp.start('watch');
});

gulp.task('test', function(){
  console.log(config.vendorcss);
});


// for basic css...

// Styles for CSS 
// gulp.task('styles', function(){
//   console.log('Starting styles task');
  
//   return gulp.src(['app/css/reset.css', STYLES_PATH])
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

