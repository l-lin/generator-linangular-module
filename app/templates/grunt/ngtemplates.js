module.exports = {
    main: {
        options: {
            module: '<%= ngModuleName %>',
            base: '<%= yeoman.src %>'
        },
        src: '<%= yeoman.src %>/*.html',
        dest: '<%= yeoman.build %>/<%= moduleName %>.template.js'
    }
};
