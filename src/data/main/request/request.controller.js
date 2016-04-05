/**
 * Request Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

  angular
    .module('app.request')
    .controller('RequestController', RequestController);

  /**
   * @namespace Request
   * @desc Request to physiotherapist
   * @memberOf Controllers
   * @ngInject
   */
  function RequestController(firebase) {
    var vm = this;
    var ref = new Firebase(firebase.host + '/data');

    // Data
    vm.data = {};

    // Methods
    vm.send = send;

    ////////

    /**
     * Send message
     */
    function send() {
      var newMessageRef = ref.push();
      newMessageRef.set(vm.data);
      vm.data = {};
    }
  }
})();
