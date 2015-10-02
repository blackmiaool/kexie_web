var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var replace = require('gulp-replace')
var livereload = require('gulp-livereload');
var _ = require('underscore');
var template = require('angular-template');
var fs = require("fs");

gulp.task('less', function () {
    return gulp.src('./src/theme/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./wp-content/themes/kexie/')).pipe(livereload());
});
var tmpl = fs.readFileSync('src/theme/kxheader.html', "utf8");
var header_config = {
    list: [{
        name:"header-home",
        text: "首页",
        icon: "glyphicon-home",
        href: "/",
    }, {
        name:"header-wiki",
        text: "资料",
        icon: "glyphicon-book",
        href: "mediawiki/",
    }, {
        text: "留言板",
        icon: "glyphicon-blackboard",
        href: "mediawiki/",
    }, {
        text: "学长们",
        icon: "glyphicon-user",
        href: "mediawiki/",
    }],
    title: "UESTC-IC科协官方网站",
}
gulp.task("injectHeader", function () {
    return gulp.src('./src/theme/header.php')
        .pipe(replace(/<!--placeHolderForHeader .+-->/, function (todo) {
            var choose = new RegExp("[^-<>! ]+");
            choose = choose.exec(todo.replace("placeHolderForHeader", ""))[0];
            header_config.list.every(function (li) {
                if (li.text == choose) {
                    console.log("found!!!")
                    header_config.current = li;
                    return false;
                }
                return true;
            })
            console.log("choose", choose);
//            header_config.current = choose;
            return template(tmpl, header_config);
        }))
        .pipe(gulp.dest('./wp-content/themes/kexie/'));

});
gulp.task('default', function () {

    gulp.start(["injectHeader", "less"]);
    livereload.listen({
        reloadPage: "./wp-content/themes/kexie/header.php"
    });
});
gulp.watch('./src/theme/*', ['default']);
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