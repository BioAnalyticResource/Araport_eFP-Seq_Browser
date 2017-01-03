module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      spec: {
        files: ['agaveapi.json'],
        tasks: ['swaggertools']
      },
      livereload: {
        files: ['agaveapi.json', 'ui/*'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/ui/',
          middleware: function(connect) {
            return [
              connect.static('.')
            ];
          }
        }
      },
    },

    swaggertools: {
      options: {
        version: 'v2'
      },
      agaveapi: {
        specFile: 'agaveapi.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-swaggertools');


  grunt.registerTask('test', ['swaggertools']);

  grunt.registerTask('serve', function() {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['test']);
};
