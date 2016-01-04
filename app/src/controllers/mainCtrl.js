(function(){
  function MainCtrl($scope, $routeParams){
    
    $scope.params = $routeParams;
    
  }
  
  angular
    .module('dialogg')
    .controller('MainCtrl', ['$scope', '$routeParams', MainCtrl]);

}());


