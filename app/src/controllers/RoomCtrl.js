(function(){
  function RoomCtrl($scope, $routeParams, $timeout, RoomFactory){
    
    $scope.id = $routeParams.id;

    if ($scope.id){
      RoomFactory.all.$loaded()
        .then(function(rooms){
          $scope.name = rooms.$getRecord($scope.id).name;
          $scope.messages = RoomFactory.listMessages($scope.id);
        })
        .catch(function(err){
          $scope.name = "(click again!)";
        });

    }
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', '$timeout', 'RoomFactory', RoomCtrl]);

}());


