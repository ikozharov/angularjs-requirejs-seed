module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * <%= pkg.license %> licensed.\n' +
        ' */\n'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      '<%= paths.app %>': {
        src: ['source/js/**/*.js']
      }
    },

    sass: {
      development: {
        options: {
          loadPath: ["source/scss", "vendor/bootstrap-sass/lib", "vendor/bourbon/dist"],
          banner: '<%= meta.banner %>'
        },
        files: {
          "build/css/style.css": "source/scss/style.scss"
        }
      },
      production: {
        options: {
          loadPath: ["source/scss", "vendor/bootstrap-sass/lib", "vendor/bourbon/dist"],
          style: "compress",
          banner: '<%= meta.banner %>'
        },
        files: {
          "build/css/style.css": "source/scss/style.scss"
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'source/js',
          mainConfigFile: 'source/js/main.js',
          out: 'build/js/script.js',
          name: 'main',
          useStrict: true,
          wrap: {
            start: '<%= meta.banner %>' + '\n;(function(window, document, undefined){',
            end: '})(this, document);'
          },
        }
      },
      build: {
        options: {
          baseUrl: 'source/js',
          mainConfigFile: 'source/js/main.js',
          out: 'build/js/script.js',
          name: 'main',
          optimize: 'uglify',
          useStrict: true,
          wrap: {
            start: '<%= meta.banner %>' + '\n;(function(window, document, undefined){',
            end: '})(this, document);'
          },
        }
      }
    },

    watch: {
      js: {
        files: ['source/js/{,*/}*.js'],
        tasks: ['jshint', 'requirejs:build']
      },
      sass: {
        files: ['source/scss/{,*/}*.{scss,sass}'],
        tasks: ['sass:development']
      }
    },

    clean: ["build"],

    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    },

    copy: {
      index: {
        files: [{
          expand: true,
          cwd: 'vendor/bootstrap-sass/',
          src: ['fonts/**/*.*'],
          dest: 'build/',
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'vendor/requirejs/',
          src: ['require.js'],
          dest: 'build/js',
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'source/js/modules/',
          src: ['*/templates/**/*.*'],
          flatten: true,
          dest: 'build/templates',
          filter: 'isFile'
        }]
      }
    },
    'string-replace': {
      inline: {
        options: {
          replacements: [{
            pattern: '<script data-main="js/main" src="../vendor/requirejs/require.js"></script>',
            replacement: '<script data-main="js/script" src="js/require.js"></script>'
          }]
        },
        files: {
          'build/index.html': 'source/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', [
    'build',
    'connect'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'string-replace',
    'jshint',
    'sass:development',
    'requirejs'
  ]);
};
