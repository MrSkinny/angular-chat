/* global Firebase */

(function(){
  function RoomFactory($firebaseArray, $rootScope){
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    let rooms = $firebaseArray(firebaseRef.child('rooms'));
    
    return {
      all: rooms,
      
      createRoom: function(roomId){
        rooms.$add({name: roomId});
      },
      
      deleteRoom: function(roomId){
        let room = rooms.$getRecord(roomId);
        rooms.$remove(room);
      },
      
      listMessages: function(roomId=""){
        return $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
      }
    }
        
  }
  
  angular
    .module('dialogg')
    .factory('RoomFactory', ['$firebaseArray', '$rootScope', RoomFactory]);

}());


