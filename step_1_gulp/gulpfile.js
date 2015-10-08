/// <reference path="./typings/tsd.d.ts" />

var gulp = require('gulp'); 
var gts = require('gulp-typescript');


gulp.task("transpile", function(){
	gulp.src("src/*.ts").pipe(gts({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       })).pipe(gulp.dest("dest/"));
});

gulp.task('default', function() {
  gulp.watch("src/*.ts", ['transpile']);
});
  
