'use strict';

module.exports = function(grunt) {
    var path = require('path');
    
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        init: true, //auto grunt.initConfig
        config: {
            pkg: grunt.file.readJSON('package.json'),
            yeoman: {
                // configurable paths
                src: 'src',
                dist: 'dist',
                build: '.tmp',
                currentDir: path.resolve(__dirname),
                banner: '/*!\n' +
                    ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
                    ' * https://github.com/<%= pkg.author %>/<%= pkg.name %>\n' +
                    ' */\n'
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

    grunt.registerTask('serve', [
        'clean:server',
        'express:livereload',
        'watch:livereload'
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
