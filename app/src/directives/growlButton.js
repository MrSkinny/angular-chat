(function(){
  function growlButton(){
    return {
      restrict: 'E',
      template:
      `
      <button>
        Open Growl
      </button>
      `,
      link: function(scope,el,attrs){
        $(el).on('click', function(){
          $('.top-right').notify({
            message: {text: "hi there"}
          }).show();
        });
        
      }
    };
  }
  
  angular
    .module('dialogg')
    .directive('growlButton', [growlButton]);
}());