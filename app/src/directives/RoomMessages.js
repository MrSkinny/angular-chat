(function(){
  function roomMessages(){
    
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/room-messages.html',
      scope: {
        'roomId': '='
      },
      link: function(scope,el,attrs){
      }
    };
     
  }
  
  angular
    .module('dialogg')
    .directive('roomMessages', [roomMessages]);

}());


