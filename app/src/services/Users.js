/* global Firebase */

(function(){
  function Users($firebaseArray, $rootScope){
    let Users = {};
    
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    
    Users.createUser = function(email, password){
      return new Promise( (reject,resolve) => {
        
        firebaseRef.createUser({
          email: email,
          password: password
        }, 
        
        (error, userData) => {
          error ? reject(error) : resolve(userData.uid);
        })
        
      });
    };
    
    return Users; 

  }
        
  angular
    .module('dialogg')
    .factory('Users', ['$firebaseArray', '$rootScope', Users]);

}());


