(function(){
  function RoomsCtrl($uibModal, RoomFactory){
    this.allRooms = RoomFactory.all;
    
    this.createRoom = function(room){
      RoomFactory.createRoom(room);
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomsCtrl', ['$uibModal', 'RoomFactory', RoomsCtrl]);

}());


