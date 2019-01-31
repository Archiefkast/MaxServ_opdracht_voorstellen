
module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({

    //Read the package.json (optional)
    pkg: grunt.file.readJSON('package.json'),

    // Metadata
    meta: {
      srcPath: 'src',
      distPath: 'dist'
    },

    // Task configuration
    sass: { // Task
      dist: {
        files: [{
          expand: true,
          cwd: '<%= meta.srcPath %>/scss/',
          src: '*.scss',
          dest: '<%= meta.srcPath %>/css/',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({browsers: ['last 1 version']})
        ]
      },
      dist: {
        src: '<%= meta.srcPath %>/css/*.css'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= meta.srcPath %>/css/',
          src: '*.css',
          dest: '<%= meta.distPath %>/css/',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      css: {
        files: '<%= meta.srcPath %>/scss/*.scss',
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass', 'postcss', 'cssmin']);

  grunt.registerTask('default', ['watch', 'sass']);
}