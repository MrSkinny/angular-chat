(function(){
  function Messages($firebaseArray){
    let Messages = {};
    
    let ref = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    let messages = $firebaseArray(ref.child('messages'));
    
    Messages.listMessages = function(roomId=""){
      return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId));
    };
    
    Messages.send = function(msg){
      return messages.$add(msg);
    };
    
    Messages.deleteAllInRoom = function(roomId){
      let a = confirm("Are you sure?");
      if (a){
        return messages.$loaded().then(
          (data) => {
            angular.forEach(data, (value, key) => {
              messages.$remove(key);
            })
          }
        );
      } else {
        return new Promise((res, rej) => {
          rej("Didn't confirm!");
        });
      }
      
    };
    
    return Messages;
  }
  
  angular
    .module('dialogg')
    .factory('Messages', ['$firebaseArray', Messages]);
}());