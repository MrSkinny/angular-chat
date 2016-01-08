(function(){
  function RoomsCtrl($scope, $uibModal, $location, $cookies, RoomFactory){
    var roomsCtrl = this;
    
    this.allRooms = RoomFactory.all;
    
    this.createRoom = function(room){
      RoomFactory.createRoom(room);
    };
    
    this.deleteRoom = function(room){
      RoomFactory.deleteRoom(room);
    };
    
    this.openModal = function (size) {
      console.log('clicked');

      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/modals/roomModal.html',
        controller: 'RoomModalCtrl as roomModal',
        size: size
      });

      modalInstance.result.then(function (roomName) {
        roomsCtrl.createRoom(roomName);
      });
      
    };
    
    this.changeUsername = function(){
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/modals/usernameModal.html',
        controller: 'UsernameModalCtrl as modal',
        backdrop: 'static'
      });
    
      modalInstance.result.then(function (username) {
        $cookies.put('blocChatCurrentUser', username);
      });
    }
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomsCtrl', ['$scope', '$uibModal', '$location', '$cookies', 'RoomFactory', RoomsCtrl]);

}());

