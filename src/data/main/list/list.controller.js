/**
 * List Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

  angular
    .module('app.list')
    .controller('ListController', ListController);

  /**
   * @namespace List
   * @desc List to physiotherapist
   * @memberOf Controllers
   * @ngInject
   */
  function ListController($firebaseObject) {
    var vm = this;

    // Data
    vm.users = [];

    //////////
    var ref = new Firebase('https://sizzling-heat-3505.firebaseio.com/');

    $firebaseObject(ref)
      .$loaded()
      .then(function(response) {
        vm.users = [];
        Object.keys(response.data).forEach(function(key) {
          vm.users.push(response.data[key]);
        });

      })
      .catch(function(err) {
        console.error(err);
      });
  }
})();
