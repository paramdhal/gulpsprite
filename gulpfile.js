'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function () {
	var spriteData = gulp.src('app/images/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprites.scss',
		cssFormat: 'scss',
		imgPath: '/images/sprite.png',
		cssTemplate: 'templates/css.template.mustache'
	}));
	spriteData.img.pipe(gulp.dest('app/images/'));
	spriteData.css.pipe(gulp.dest('app/scss/'));
});