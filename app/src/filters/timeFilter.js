(function(){
  function TimeFilter(){
    return function(input){
      
      function doubleDigits(stamp){
        if (Number(stamp) < 10) {
          return "0" + stamp;
        } else {
          return stamp;
        } 
      }
      
      let date = new Date(input);
      let h = doubleDigits(date.getHours());
      let m = doubleDigits(date.getMinutes());
      let s = doubleDigits(date.getSeconds());
      
      return `${h}:${m}:${s}`;
    };
  }
  
  angular
    .module('dialogg')
    .filter('time', [TimeFilter]);
}());