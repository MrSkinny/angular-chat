/* global Firebase */

(function(){
  function RoomFactory($firebaseArray, $rootScope){
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    let rooms = $firebaseArray(firebaseRef.child('rooms'))
    
    return {
      all: rooms,
      createRoom: function(room){
        rooms.$add({name: room});
      }
    }
        
  }
  
  angular
    .module('dialogg')
    .factory('RoomFactory', ['$firebaseArray', '$rootScope', RoomFactory]);

}());


