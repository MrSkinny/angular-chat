(function(){
  function MainCtrl($scope, $routeParams, $location, $route){
    var ctrl = this;
    
    $scope.params = $routeParams;
    
    ctrl.path = $location.path();
    
  }
  
  angular
    .module('dialogg')
    .controller('MainCtrl', ['$scope', '$routeParams', '$location', '$route', MainCtrl]);

}());


