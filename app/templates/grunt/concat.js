module.exports = {
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
};
