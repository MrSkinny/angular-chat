
(function(){
  function UsernameModalCtrl($uibModalInstance, $cookies){
    this.username = $cookies.get('currentUser');

    this.ok = function(){
      if (this.username) $uibModalInstance.close(this.username);
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies', UsernameModalCtrl])
    
}());
