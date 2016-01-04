(function(){
  function RoomsCtrl($scope, $uibModal, $location, RoomFactory){
    var roomsCtrl = this;
    
    this.allRooms = RoomFactory.all;
    
    this.createRoom = function(room){
      RoomFactory.createRoom(room);
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
    
    this.changeRoom = function(roomId){
      $location.path('/room/' + roomId);
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomsCtrl', ['$scope', '$uibModal', '$location', 'RoomFactory', RoomsCtrl]);

}());

