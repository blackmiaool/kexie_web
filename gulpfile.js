var gulp = require( 'gulp' );
var less = require('gulp-less');
var path = require('path');
var livereload = require('gulp-livereload');
//	gulpLoadPlugins = require( 'gulp-load-plugins' ),
//	p = gulpLoadPlugins(),
//	src = 'src/',
//	temp = src + 'temp/',
//	dest = 'build/';
//
//
//gulp.task( 'css', function() {
//	return gulp.src( src + 'css/main.css' )
//		.pipe( p.minifyCss() )
//		.pipe( p.rename( '_.css' ) )
//		.pipe( gulp.dest( temp ) );
//});
//
//gulp.task( 'jshint', function() {
//	return gulp.src( [ src + 'js/**/*.js', '!' + src + 'js/vendor/*.js' ] )
//		.pipe( p.jshint() )
//		.pipe( p.jshint.reporter( 'jshint-stylish' ) );
//});
//
//gulp.task( 'js', [ 'jshint' ], function() {
//	return gulp.src( src + 'js/imports.js' )
//		.pipe( p.imports() )
//		.pipe( p.rename( '_full.js' ) )
//		.pipe( gulp.dest( temp ) )
//		.pipe( p.uglify() )
//		.pipe( p.rename( '_.js' ) )
//		.pipe( gulp.dest( temp ) );
//});
//
//gulp.task( 'html', [ 'css', 'js' ], function() {
//	return gulp.src( src + 'index.php' )
//		.pipe( p.php2html( { getData:{ prod: 1 } } ) )
//		.pipe( p.htmlmin( {
//			removeComments: true,
//			collapseWhitespace: true,
//			conservativeCollapse: true,
//			removeAttributeQuotes: true
//		}))
//		.pipe( gulp.dest( dest ) );
//});
//
//gulp.task('build', [ 'html' ], function() {
//	return gulp.src( dest + 'index.html' )
//		.pipe( p.zip( 'game.zip' ) )
//		.pipe( p.size() )
//		//.pipe( p.micro( { limit: 13 * 1024 } ) )
//		.pipe( gulp.dest( dest ) )
//		.pipe( p.notify( 'Build Complete' ) );
//});
//
//gulp.task( 'clean', function() {
//	return gulp.src( [ dest ], { read: false } )
//		.pipe( p.rimraf() );
//});
//
//
//
//gulp.task( 'watch', function() {
//	gulp.watch( src + '*.php', [ 'build' ] );
//	gulp.watch( src + 'css/**/*.css', [ 'build' ] );
//	gulp.watch( src + 'js/**/*.js', [ 'build' ] );
//});
gulp.task('less', function () {
  return gulp.src('./src/theme/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./wp-content/themes/kexie/'));
});
gulp.task('default', function() {
   livereload() livereload.listen({port:35729,reloadPage:"./wp-content/themes/kexie/header.php"});
	gulp.start(["less"]);
});
gulp.watch('./src/theme/*', ['default']); 