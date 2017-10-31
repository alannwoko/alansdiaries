var gulp = require("gulp"),  //require gulp
watch = require("gulp-watch"), //require gulp-watch
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");
 
gulp.task("default", function(){
	console.log("testing gulp");
});

gulp.task("html", function(){
	console.log("other useful stuffs");
});

//gulp css task
gulp.task("styles", function(){
	//gulp src to css file 
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest("./app/temp/styles")); //gulp pipe 
});

gulp.task("watch", function(){
	watch("./app/assets/index.html", function(){
		gulp.start('html');
	}); //gulp index.html watch call

	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("styles");
	}); //gulp css watch call
});