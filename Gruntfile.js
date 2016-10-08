module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // CSS
    sass: {
      dist: {
        options: {
          style: 'expanded',
          precision: 15
        },
        files: [{
          expand: true,
          cwd: 'src/style/',
          src: ['**/*.scss'],
          dest: 'src/style/',
          ext: '.css'
        }]
      }
    },
    concat: {
      css: {
        files: {
          'assets/combined.css': ['src/style/*.css']
        }
      },
      js: {
        files: {
          'assets/combined.js': ['src/js/*.js']
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'assets/combined.min.css': ['assets/combined.css']
        }
      }
    },
    uglify: {
      js: {
        files: {
          'assets/combined.min.js': ['assets/combined.js']
        }
      }
    },
    compress: {
      css: {
        options: {
          mode: 'gzip'
        },
        files: [
          {expand: true, src: ['assets/combined.min.css'], dest: '', ext: '.gz.css'}
        ]
      },
      js: {
        options: {
          mode: 'gzip'
        },
        files: [
          {expand: true, src: ['assets/combined.min.js'], dest: '', ext: '.gz.js'}
        ]
      }
    },
    // Browser Sync
    browserSync: {
      bsFiles: {
        src: ['assets/*.css', '*.html']
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
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/style/*.css'],
        tasks: ['concat:css', 'cssmin', 'compress:css'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['concat:js', 'uglify', 'compress:js'],
        options: {
          livereload: true,
        }
      }
    },
    // Linting
    postcss: {
      scsslint: {
        options: {
          writeDest: false,
          syntax: require('postcss-scss'),
          processors: [
            require('stylelint')(),
            require('postcss-reporter')({ clearMessages: true })
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/style',
          src: ['*.scss']
        }]
      },
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
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', [ 'browserSync', 'watch' ]);
  grunt.registerTask('lint', [ 'postcss:scsslint' ]);
};
