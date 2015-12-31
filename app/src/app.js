angular.module('starterApp', [])
  .controller('mainCtrl', function(){
    
    // ES6 deconstructed variables, interpolation in string templates, etc.
    let dude = { firstName: 'John', lastName: 'Doe' };
    let {firstName, lastName} = dude;
    
    this.message = `Hello from ${firstName} ${lastName} in the controller using ES6.`;
    
  });

console.log(`This app is loaded!`);
