// DEPENDENCIAS
// sudo npm install -g
// sudo npm install --global gulp
// sudo aptitude install ruby1.9.1-dev
// sudo gem install jekyll
//sudo gem install jekyll-sitemap


var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
// var plugins = require('gulp-load-plugins')();




/***********************************************************
 * concat
 * contact js files to make two js calls: main.js y scripts.js
 ************************************************************/
 var concat = require('gulp-concat');

 gulp.task('concatjs', function() {
  //  return gulp.src([
  //    './js/modernizr.custom.js',
  //    './js/jquery-2.1.3.min.js',
  //    './js/velocity.js',
  //    './js/velocity.ui.js',
  //    './js/jquery.fitvids.js',
  //    './js/jquery.mobile-events.min.js',
  //    './js/jquery.history.js',
  //    './js/owl.carousel.min.js',
  //    './js/jquery.ajaxchimp.js',
  //    './js/ease.min.js',
  //    './js/jquery.li-scroller.1.0.js',
  //    './js/texteffects.js',
  //    './js/jekyll-search.js',
  //    './js/vegas.min.js'
  //  ])
  //    .pipe(concat('all.js'))
  //    .pipe(gulp.dest('dist/'));
 });

/***********************************************************
 * svgstore
 ************************************************************/
 // var gulp = require('gulp');
// var svgmin = require('gulp-svgmin');
gulp.task('svgstore', function () {
    return gulp
        .src('svg-orig/*.svg')
        // .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest('svg'));
});


/***********************************************************
 * Build the Jekyll Site
 ************************************************************/
 var messages = {
     jekyllBuild: '<span style="color: red">Running:</span> $ jekyll build'
 };

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/*************************************************************
 * Rebuild Jekyll & do page reload
 ************************************************************/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


/*************************************************************
 * do something with js files
 ************************************************************/
gulp.task('scripts', function () {
    browserSync.reload();
});


/*************************************************************
 * Wait for jekyll-build, then launch the Server
 ************************************************************/
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/*************************************************************
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 ************************************************************/
gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_includes/css'))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});
/*************************************************************
imagemin
************************************************************/

gulp.task('images-opt', function () {
  gulp.src('images-orig/**/**')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
});

/*************************************************************
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 ************************************************************/
gulp.task('watch', function () {
  gulp.watch('_sass/*.scss', ['sass']);
    gulp.watch('svg-orig/*.svg', ['svgstore', 'jekyll-rebuild']);
    gulp.watch('js/*.js', ['jekyll-rebuild']);
    gulp.watch(['index.html','music/index.html','blog/index.html', 'about/index.html','links/index.html','contact/index.html','_includes/*.html','_layouts/*.html', 'pages/*', '_posts/*'], ['jekyll-rebuild']);
    // gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});



/*************************************************************
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 ************************************************************/
// gulp.task('default', ['browser-sync', 'watch']);
gulp.task('default', [ 'concatjs' ,  'browser-sync','watch']);
gulp.task('img', ['images-opt','svgstore',]);
gulp.task('svg', ['svgstore']);
// gulp.task('concat', ['scripts']);
