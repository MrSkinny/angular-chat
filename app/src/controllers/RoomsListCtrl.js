(function(){
  function RoomsListCtrl($scope, $uibModal, $location, $cookies, RoomFactory){
    var roomsListCtrl = this;
    
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
        templateUrl: 'templates/modals/roomModal.html',
        controller: 'RoomModalCtrl as roomModal',
        size: size
      });

      modalInstance.result.then(function (roomName) {
        roomsListCtrl.createRoom(roomName);
      });
      
    };
    
    this.changeUsername = function(){
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/modals/usernameModal.html',
        controller: 'UsernameModalCtrl as modal',
        backdrop: 'static'
      });
    
      modalInstance.result.then(function (username) {
        $cookies.put('tempUsername', username);
      });
    }
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomsListCtrl', ['$scope', '$uibModal', '$location', '$cookies', 'RoomFactory', RoomsListCtrl]);

}());

