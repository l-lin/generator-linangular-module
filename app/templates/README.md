<%= moduleName %> [![Build Status](https://travis-ci.org/<%= authorName %>/<%= moduleName %>.png?branch=master)](https://travis-ci.org/<%= authorName %>/<%= moduleName %>) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
================
> <%= moduleName %>


Getting started
================
Dependencies
----------------
The required dependencies are:
* [AngularJS](http://angularjs.org/)

Download
----------------
### Manually
The files can be downloaded from:
* Minified [JS](https://github.com/<%= authorName %>/<%= moduleName %>/dist/<%= moduleName %>.min.js) and [CSS](https://github.com/<%= authorName %>/<%= moduleName %>/dist/<%= moduleName %>.min.css) for production usage
* Un-minified [JS](https://github.com/<%= authorName %>/<%= moduleName %>/dist/<%= moduleName %>.js) and [CSS](https://github.com/<%= authorName %>/<%= moduleName %>/dist/<%= moduleName %>.css) for development

### With BowerJS
```
$ bower install <%= moduleName %>
```

Installation
----------------
Include the JS and CSS file in your index.html file: 
```
<link rel="stylesheet" href="<%= moduleName %>.min.css">
<script src="<%= moduleName %>.min.js"></script>
```
Declare dependencies on your module app like this:
```
angular.module('myModule', ['<%= ngModuleName %>']);
```

Usage
================
> TODO

License
================
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
