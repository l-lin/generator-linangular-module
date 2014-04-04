module.exports = {
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
};
