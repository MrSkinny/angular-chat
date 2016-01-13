(function(){
  function RoomCtrl($scope, $routeParams, $timeout, $cookies, RoomFactory, Messages){
    var ctrl = this;
    
    $scope.id = $routeParams.id;
    ctrl.msgInput = null;

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
    
    $scope.deleteAll = function(){
      Messages.deleteAllInRoom($scope.id)
        .then( () => console.log('Messages deleted') )
        .catch( (err) => console.log(err) );
    }
    
    $scope.send = function(msg){
      Messages.send({
        content: msg,
        username: $cookies.get('tempUsername') || $cookies.get('currentUser.username'),
        sentAt: new Date().toString(),
        roomId: $scope.id
      })
        .then( () => ctrl.msgInput = "" );
      
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$scope', '$routeParams', '$timeout', '$cookies', 'RoomFactory', 'Messages', RoomCtrl]);

}());


