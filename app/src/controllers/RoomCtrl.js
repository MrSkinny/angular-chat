(function(){
  function RoomCtrl($scope, $routeParams){
    var ctrl = this;
    
    ctrl.id = $routeParams.id;
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', RoomCtrl]);

}());


