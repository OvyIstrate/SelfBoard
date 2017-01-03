(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('headerBackground', {
            templateUrl: 'views/shared/header.html',
            controller: headerController,
            bindings: {
                Binding: '=',
            },
        });

    function headerController() {
        var ctrl = this;
        
        ////////////////

        ctrl.onInit = function() { };
        ctrl.onChanges = function(changesObj) { };
        ctrl.onDestory = function() { };
    }
})();