(function(){
  function MainCtrl($scope, $routeParams, $location, $route, Users){
    var ctrl = this;
    
    $scope.params = $routeParams;
    
    ctrl.path = $location.path();
    ctrl.currentUser = {};
    ctrl.currentUser.info = Users.getCurrentUser();
    
  }
  
  angular
    .module('dialogg')
    .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$route', 'Users', MainCtrl]);

}());


