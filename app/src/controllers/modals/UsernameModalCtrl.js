
(function(){
  function UsernameModalCtrl($uibModalInstance){
    this.username = null;

    this.ok = function(){
      if (this.username) $uibModalInstance.close(this.username);
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('UsernameModalCtrl', ['$uibModalInstance', UsernameModalCtrl])
    
}());
