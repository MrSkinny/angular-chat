(function(){
  function config($routeProvider){
    
    $routeProvider
      .when('/room/:id', {
        templateUrl: '/templates/main.html',
        controller: 'MainCtrl as main'
      })
      
      .when('/', {
        templateUrl: '/templates/main.html',
        controller: 'MainCtrl as main'
      })
      
      .otherwise({
        redirectTo: '/'
      });
      
      

	}

	angular
		.module('dialogg', ['ngRoute', 'ui.bootstrap', 'firebase'])
		.config(['$routeProvider', config]);
    
}());
