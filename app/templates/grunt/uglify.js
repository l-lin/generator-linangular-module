module.exports = {
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
};
