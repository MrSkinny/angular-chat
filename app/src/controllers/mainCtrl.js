(function(){
  function MainCtrl($scope, $routeParams){
    var ctrl = this;
    
    $scope.params = $routeParams;
    
  }
  
  angular
    .module('dialogg')
    .controller('MainCtrl', ['$scope', '$routeParams', MainCtrl]);

}());


