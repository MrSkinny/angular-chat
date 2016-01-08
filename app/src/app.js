(function(){
  function config($routeProvider){
    
    $routeProvider
      .when('/room/:id', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl as main'
      })
      
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl as main'
      })
      
      .otherwise({
        redirectTo: '/'
      });

	}
  
  function run($cookies, $uibModal){
    
    if (!$cookies.get('currentUser')) {

      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'templates/modals/usernameModal.html',
        controller: 'UsernameModalCtrl as modal',
        backdrop: 'static'
      });
    
      modalInstance.result.then(function (username) {
        $cookies.put('currentUser', username);
      });
    }
    
  }

	angular
		.module('dialogg', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'firebase'])
		.config(['$routeProvider', config])
    .run(['$cookies', '$uibModal', run]);
    
}());
