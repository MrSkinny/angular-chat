(function(){
  function RoomCtrl($scope, $routeParams, RoomFactory){
    var ctrl = this;
    
    ctrl.id = $routeParams.id;
    
    ctrl.messages = RoomFactory.listMessages(ctrl.id);
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', 'RoomFactory', RoomCtrl]);

}());


