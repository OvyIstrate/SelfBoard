(function() {
'use strict';

    // Usage: The Side Menu Controller, Responsible with the menu Actions
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('menu', {
            templateUrl: 'views/components/menu.html',
            controller: menuCtrl,
            bindings: {
                items: '<',
            },
        });

    function menuCtrl() {
        var ctrl = this;
        ctrl.onInit = function() {
         };
        ctrl.onChanges = function(changesObj) { };
        ctrl.onDestory = function() { };
    }
})();