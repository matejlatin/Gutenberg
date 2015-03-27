module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CSS
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
			        expand: true,
			        cwd: 'assets/style/',
			        src: ['**/*.scss'],
			        dest: 'assets/style/',
			        ext: '.css'
				}]
			}
		},
		concat: {
			css: {
				files: {
					'src/combined.css': ['assets/style/*.css']
				}
			},
			js: {
				files: {
					'src/combined.js': ['assets/js/*.js']
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					'src/combined.min.css': ['src/combined.css']
				}
			}
		},
		uglify: {
			js: {
				files: {
					'src/combined.min.js': ['src/combined.js']
				}
			}
		},
		compress: {
			css: {
				options: {
					mode: 'gzip'
				},
				files: [
					{expand: true, src: ['src/combined.min.css'], dest: '', ext: '.gz.css'}
				]
			},
			js: {
				options: {
					mode: 'gzip'
				},
				files: [
					{expand: true, src: ['src/combined.min.js'], dest: '', ext: '.gz.js'}
				]
			}
		},
		// Browser Sync
		browserSync: {
			bsFiles: {
				src: ['src/*.css', '*.html']
			},
			options: {
				server: {
					baseDir: "./"
				},
				// xip: true,
				ghostMode: true,
				watchTask: true
			}
		},

		// Image Compress
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
			        cwd: 'assets/images/',
			        src: ['**/*.{png,jpg,gif}'],
			        dest: 'assets/images/'
				}]
			}
		},
		// Watch
		watch: {
			html: {
				files: ['*.html'],
				options: {
					livereload: true,
				}
			},
			scss: {
				files: ['assets/style/*.scss'],
				tasks: ['sass', 'concat:css', 'cssmin', 'compress:css'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['assets/style/*.css'],
				tasks: ['concat:css', 'cssmin', 'compress:css'],
				options: {
					livereload: true,
				}
			},
			js: {
				files: ['assets/js/*.js'],
				tasks: ['concat:js', 'uglify', 'compress:js'],
				options: {
					livereload: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'browserSync', 'watch' ]);
};