(function() {
    'use strict';
    angular.module('<%= ngModuleName %>', []).
    value('<%= ngModuleName %>TemplateUrl', 'src/<%= moduleName %>.html');
})();
