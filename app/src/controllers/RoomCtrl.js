(function(){
  function RoomCtrl($scope, $routeParams, RoomFactory){
    var ctrl = this;
    
    ctrl.id = $routeParams.id;
    
    $scope.$watch('ctrl.id', function(data){
      console.log('changed route');
      $scope.messages = RoomFactory.listMessages();
    });
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', 'RoomFactory', RoomCtrl]);

}());


