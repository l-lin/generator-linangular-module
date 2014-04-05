module.exports = {
    livereload: {
        options: {
            livereload: '<%= express.options.livereload %>'
        },
        files: [
	    '<%= yeoman.currentDir %>',
            '<%= yeoman.src %>/**/*.html',
            '<%= yeoman.src %>/styles/{,*/}*.css',
            '<%= yeoman.src %>/{,*/}*.js',
            '<%= yeoman.src %>/{,*/}*.css',
            '<%= yeoman.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    },
    test: {
        options: {
            livereload: {
                port: 35728
            }
        },
        files: [
            '<%= yeoman.src %>/{,*/}*.html',
            '{<%= yeoman.build %>,<%= yeoman.src %>}/app/{,*/}*.js'
        ],
        tasks: ['test']
    }
};
