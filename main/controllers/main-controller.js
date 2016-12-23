(function() {
'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    // mainCtrl.inject = [];
    function mainCtrl() {
        var vm = this;
        
        vm.layoutMessage = "Layout Message";
        vm.menuItems = ['About', 'Software', 'Gaming', 'Recomandations'];
        activate();

        ////////////////

        function activate() { }
    }
})();