'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var camelCaseAngularModuleName = function camelCaseAngularModuleName(appName) {
	var ngModuleName = appName.replace(/-([a-z])/g, function(v) {
		return v.replace('-', '').toUpperCase();
	});
	return ngModuleName ;
}

var LinangularModuleGenerator = module.exports = function LinangularModuleGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);
	
	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});
	
	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LinangularModuleGenerator, yeoman.generators.Base);

LinangularModuleGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	this.moduleName = this._.slugify(this.appname);
	this.ngModuleName = camelCaseAngularModuleName(this.moduleName);
	console.log('Module name: ' + this.moduleName);
	console.log('Angular Module name: ' + this.ngModuleName);
	
    this.pkg = {
    	name: '<%= pkg.name %>',
    	author: '<%= pkg.author %>',
    	version: '<%= pkg.version %>'
    }

	// have Yeoman greet the user.
	console.log(this.yeoman);

	this.yeoman = {
        // configurable paths
        src: '<%= yeoman.src %>',
        dist: '<%= yeoman.dist %>',
        build: '<%= yeoman.build %>',
        banner: '<%= yeoman.banner %>'
    };
	
	var prompts = [{
		name: 'authorName',
		message: 'What is your name?',
		default: 'foobar'
	}];
	
	this.prompt(prompts, function (props) {
		this.authorName = props.authorName;
		
		cb();
	}.bind(this));
};

LinangularModuleGenerator.prototype.app = function app() {
	this.copy('_package.json', 'package.json');
	this.copy('_bower.json', 'bower.json');
};

LinangularModuleGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
	this.copy('bowerrc', '.bowerrc');
	this.copy('gitignore', '.gitignore');
	this.copy('gitattributes', '.gitattributes');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.copy('src/app.js', 'src/' + this.moduleName + '.js');
	this.copy('src/app.css', 'src/' + this.moduleName + '.css');
	this.copy('src/app.html', 'src/' + this.moduleName + '.html');
	this.copy('test/spec/app.spec.js', 'test/spec/' + this.moduleName + '.spec.js');
	this.copy('test/karma.conf.js', 'test/karma.conf.js');
	this.copy('README.md', 'README.md');
};
