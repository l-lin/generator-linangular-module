// Generated on 2013-11-23 using generator-angular 0.6.0-rc.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            // configurable paths
            src: 'src',
            dist: 'dist',
            build: '.tmp',
            banner: '/*!\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
                ' * https://github.com/<%= pkg.author %>/<%= pkg.name %>\n' +
                ' */\n'
        },
        /** ------------- CLEAN TMP FOLDERS ------------- */
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.build %>',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '<%= yeoman.build %>'
        },
        /** ------------- FORMAT JS CODES ------------- */
        jsbeautifier: {
            files: [
                '<%= yeoman.src %>/{,*/}*.js',
                'test/{,*/}*.js',
                'Gruntfile.js'
            ],
            options: {}
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.src %>/{,*/}*.js'
            ]
        },
        /** ------------- SOURCE CODES MINIMIZATION ------------- */
        ngtemplates: {
            main: {
                options: {
                    module: '<%= ngModuleName %>',
                    base: '<%= yeoman.src %>'
                },
                src: '<%= yeoman.src %>/*.html',
                dest: '<%= yeoman.build %>/<%= moduleName %>.template.js'
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= yeoman.banner %>'
            },
            build: {
                options: {
                    stripBanners: false
                },
                src: ['<%= yeoman.src %>/*.js',
                    '<%= yeoman.build %>/<%= moduleName %>.template.js'
                ],
                dest: '<%= yeoman.build %>/<%= moduleName %>.js'
            },
            // Copy the source files with the banner in dist folder
            banner: {
                src: ['<%= yeoman.build %>/<%= moduleName %>.js'],
                dest: '<%= yeoman.dist %>/<%= moduleName %>.js'
            },
            bannerCSS: {
                src: ['<%= yeoman.src %>/<%= moduleName %>.css'],
                dest: '<%= yeoman.dist %>/<%= moduleName %>.css'
            }
        },
        cssmin: {
            options: {
                banner: '<%= yeoman.banner %>'
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/<%= moduleName %>.min.css': [
                        '<%= yeoman.src %>/*.css'
                    ]
                }
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.build %>',
                    src: '*.js',
                    dest: '<%= yeoman.build %>'
                }]
            }
        },
        uglify: {
            options: {
                banner: '<%= yeoman.banner %>'
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/<%= moduleName %>.min.js': [
                        '<%= yeoman.build %>/<%= moduleName %>.js'
                    ]
                }
            }
        },
        /** ------------- JS UNIT TESTING + CODE COVERAGE ------------- */
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    /** ---------------------------------------------------- */
    /** ------------- GRUNT TASKS REGISTRATION ------------- */
    /** ---------------------------------------------------- */

    // Task to format js source code
    grunt.registerTask('format', [
        'jsbeautifier'
    ]);

    grunt.registerTask('test', [
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'ngtemplates',
        'concat:build',
        'ngmin',
        'cssmin',
        'uglify',
        'concat:banner',
        'concat:bannerCSS'
    ]);

    grunt.registerTask('default', [
        'format',
        'jshint',
        'test',
        'build'
    ]);
};
