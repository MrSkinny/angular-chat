(function(){
  function RoomsCtrl(RoomFactory){
    this.allRooms = RoomFactory.all;
    
    this.createRoom = function(room){
      RoomFactory.createRoom(room);
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomsCtrl', ['RoomFactory', RoomsCtrl]);

}());


