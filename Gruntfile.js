module.exports = function(grunt) {

  grunt.initConfig({
  	
    bower: {
      dev: {
        dest: './public/assets',
        js_dest: './public/assets/js',
        css_dest: './public/assets/css',
        fonts_dest: './public/assets/font',
        png_dest: './public/assets/img',
        gif_dest: './public/assets/img',
        options: {
          keepExpandedHierarchy: false
        }
      }
    },

    concat: {
      css: {
        src: [
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './src/style.css'
        ],
        dest: './public/assets/css/style.css'
      },
      js: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './src/site.js'
        ],
        dest: './public/assets/js/site.js'
      }
    },
    cssmin: {
      css: {
        src: './public/assets/css/style.css',
        dest: './public/assets/css/style.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          './public/assets/js/site.js': './public/assets/js/site.js'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : '**/*.*'
        },
        options: {
          server: {
            baseDir: "./"
          },
          watchTask: true
        }
      }
    },

    watch: {
	  css: {
        files: [
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './src/app.css'
        ],
        tasks: ['concat:css', 'cssmin:css']
      },
      js: {
        files: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './src/site.js'
        ],
        tasks: ['concat:js', 'uglify:js']
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('link', ['concat', 'cssmin', 'uglify']);
  grunt.registerTask('copy', ['bower']);

}