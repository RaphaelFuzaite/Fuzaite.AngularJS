'use strict';

var ApplicationConfiguration = (function () {  
  var applicationModuleName = 'AngularWebApp';
  var applicationModuleVendorDependencies = ['LocalStorageModule', 'ngTable'];
  
  var registerModule = function (moduleName, dependencies) {
    angular.module(moduleName, dependencies || []);
    angular.module(applicationModuleName).requires.push(moduleName);
  };
  
  return {
    ModuleName:                applicationModuleName,
    ModuleVendorDependencies:  applicationModuleVendorDependencies,
    RegisterModule:            registerModule
  };
})();