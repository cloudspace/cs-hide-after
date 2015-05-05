/* global angular */

// Hide an element after a specified number of milliseconds
// <div class='message' hide-after='3000'>Hello!</div>
 
angular.module('csHideAfter').directive('csHideAfter', [
  '$timeout',
  function($timeout) {
    return {
      restrict: 'A',
      scope: {
        csHideAfter: '@'
      },
      link: function(scope, element) {
        $timeout(function() {
          element.css('display', 'none');
        }, parseInt(scope.hideAfter));
      }
    };
  }]);