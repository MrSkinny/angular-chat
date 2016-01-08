(function(){
  function RoomCtrl($scope, $routeParams, $timeout, RoomFactory){
    
    $scope.id = $routeParams.id;
    $scope.name = RoomFactory.all.$getRecord($scope.id).name;
    $scope.messages = RoomFactory.listMessages($scope.id);
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', '$timeout', 'RoomFactory', RoomCtrl]);

}());


