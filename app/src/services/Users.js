/* global Firebase */

(function(){
  function Users($firebaseArray, $firebaseAuth, $rootScope, $cookies){
    let Users = {};
    
    let firebaseRef = new Firebase('https://brilliant-inferno-6177.firebaseio.com');
    
    let currentUser = {};
    
    Users.createUser = function(email, password){
      return new Promise( (reject,resolve) => {
        
        firebaseRef.createUser({
          email: email,
          password: password
        }, 
        
        (error, userData) => {
          if(error){
            reject(error)
          } else {
            let users = $firebaseArray(firebaseRef.child('users'));
            users.$add({
              email: email,
              uid: userData.uid
            }).then(()=> resolve(userData.uid) );
                        
          } 
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
            currentUser = {};
            reject(error);
          } else {
            console.log(authData);
            currentUser.authData = authData;
            let usersRef = firebaseRef.child('users');
            let query = usersRef.orderByChild('uid').equalTo(authData.uid);
            $firebaseArray(query).$loaded().then((data)=>{
              currentUser.info = data[0];
            })
          }
        });
        
      });
    };
    
    Users.getCurrentUser = function(){
      return currentUser;
    };
    
    return Users; 

  }
        
  angular
    .module('dialogg')
    .factory('Users', ['$firebaseArray', '$firebaseAuth', '$rootScope', '$cookies', Users]);

}());


