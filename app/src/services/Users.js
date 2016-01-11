/* global Firebase */

(function(){
  function Users($firebaseArray, $rootScope){
    let Users = {};
    
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    
    let currentUser = null;
    
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
    
    Users.signIn = function(email,pw){
      return new Promise( (reject,resolve) => {
        
        firebaseRef.authWithPassword({
          email: email,
          password: pw  
        }, (error, authData) => {
          if (error){
            currentUser = null;
            reject(error);
          } else {
            currentUser = authData;
          }
        });
        
      });
    };
    
    Users.currentUser = function(){
      return currentUser;
    };
    
    return Users; 

  }
        
  angular
    .module('dialogg')
    .factory('Users', ['$firebaseArray', '$rootScope', Users]);

}());


