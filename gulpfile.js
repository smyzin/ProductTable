'use strict';

const	gulp 		= require('gulp'),
		pug 		= require('gulp-pug'),
		stylus 		= require('gulp-stylus'),
		uglify 		= require('gulp-uglify'),
		myth 		= require('gulp-myth'),
		browserSync = require('browser-sync'),
		reload 		= browserSync.reload,
		babel 		= require('gulp-babel'),
		livereload 	= require('gulp-livereload'), // Livereload для Gulp
		concat 		= require('gulp-concat'), // Склейка файлов
		pump 		= require('pump');

// gulp.task('pages', function() {
// 	return gulp.src('*.pug')
// 		.pipe(pug())
// 		.pipe( gulp.dest('./') )
// 		.pipe(reload({stream: true})); // даем команду на перезагрузку
// });

gulp.task('js', function(){
	return gulp.src('assets/js/*.js')
		.pipe(concat('index.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(reload({stream: true}))
});

gulp.task('stylus', function(){
	return gulp.src('assets/stylus/*.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(myth())
		.pipe(gulp.dest('./public/css'))
		.pipe(reload({stream: true}))
});

gulp.task('default',
	[
		'js',
		'stylus'
	]);