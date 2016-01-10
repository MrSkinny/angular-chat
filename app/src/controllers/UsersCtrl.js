(function(){
  function UsersCtrl($scope, $routeParams, $location, $route, Users){
    var ctrl = this;
    
    $scope.params = $routeParams;
    
    ctrl.path = $location.path();
    
    ctrl.createUser = function(){
      Users.createUser(ctrl.newUserEmail, ctrl.newUserPw)
        .then((msg)=>{ console.log(msg) })
        .catch((err)=>{ console.log(err) });
    };
    
  }
  
  angular
    .module('dialogg')
    .controller('UsersCtrl', ['$scope', '$routeParams', '$location', '$route', 'Users', UsersCtrl]);

}());


