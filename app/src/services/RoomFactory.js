/* global Firebase */

(function(){
  function RoomFactory($firebaseArray, $rootScope){
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    let rooms = $firebaseArray(firebaseRef.child('rooms'))
    
    return {
      all: rooms,
      
      createRoom: function(roomId){
        rooms.$add({name: roomId});
      },
      
      listMessages: function(roomId){
        let data = firebaseRef
          .child('messages')
          .orderByChild('roomId')
          .equalTo(roomId);
          
        return $firebaseArray(data);
      }
    }
        
  }
  
  angular
    .module('dialogg')
    .factory('RoomFactory', ['$firebaseArray', '$rootScope', RoomFactory]);

}());


