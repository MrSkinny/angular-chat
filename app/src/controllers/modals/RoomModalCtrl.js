
(function(){
  function RoomModalCtrl($uibModalInstance){
    this.roomName = null;

    this.ok = function(){
      $uibModalInstance.close(this.roomName);
    };
    
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }
  
  angular
    .module('dialogg')
    .controller('RoomModalCtrl', ['$uibModalInstance', RoomModalCtrl])
    
}());
