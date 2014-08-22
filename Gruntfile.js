// Generated on 2014-01-15 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);


  // Define the configuration for all the tasks
  grunt.initConfig({


    // project base config
    yeoman: {
      app: 'app',
      dist: 'dist',
      tmp: 'tmp'
    },


    // for auto run bower install
    // shell: {
    //   bower: {
    //     options: {
    //         stderr: false
    //     },
    //     command: 'bower install --allow-root'
    //   },

    //   stop_dev_server: {
    //     options: {
    //       stderr: false
    //     },
    //     command: 'ps aux | grep grunt | awk \'{print $2}\' | xargs kill -9; sleep 0.5'
    //   }
    // },


    // grunt connect
    connect: {
      server: {
        options: {
          base: '<%= yeoman.app %>',
          keepalive: true, 
          port: 8000,
          hostname: '*',
          debug: true,
        },
        // grunt-connect-proxy
        proxies: [
            {
                context: '/api/',
                host: '127.0.0.1:3333/api/',
                changeOrigin: true
            }
        ]
        //   middleware: function (connect, options) {
        //     var optBase = (typeof options.base === 'string') ? [options.base] : options.base;

        //     // add new reverse proxy uri
        //     return [
        //       require('connect-modrewrite')([
        //         // 順序有影響(前面的會先配置)
        //         '^/api/(.*)$ http://127.0.0.1:3333/api/$1 [P,L]'
        //       ])
        //     ]

        //     // add local html file
        //     .concat(optBase.map(function(path){
        //       return connect.static(path);
        //     }));
        //   }
        // }
      }
    },

  });


  // loading tasks provided by plugin
  grunt.loadNpmTasks('grunt-shell');


  // add plugin task
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-rewrite');


  // for development
  grunt.registerTask('lift', function(target) {
    return grunt.task.run([
      'connect'
    ]);
  });


  // for stoping grunt server
  grunt.registerTask('halt', function(target) {
    return grunt.task.run([
      'shell:stop_dev_server'
    ]);
  });

};
