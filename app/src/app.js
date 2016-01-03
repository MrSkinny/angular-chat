(function(){
  function config($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('main', {
				url: '',
				controller: 'MainCtrl as main',
				templateUrl: '/templates/main.html',
			})
      
      .state('main.room', {
        url: 'room/:id',
        controller: 'RoomCtrl as roomCtrl',
        templateUrl: '/templates/room.html'
      });
      
      
      

	}

	angular
		.module('dialogg', ['ui.router', 'ui.bootstrap', 'firebase'])
		.config(['$stateProvider','$urlRouterProvider', config]);
    
}());
