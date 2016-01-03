(function(){
  function RoomCtrl($stateParams){
    this.id = $stateParams.id;
    
    
  }
  
  angular
    .module('dialogg')
    .controller('RoomCtrl', ['$stateParams', RoomCtrl]);

}());


