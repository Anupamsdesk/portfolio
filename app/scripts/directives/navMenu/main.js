'use strict';
app.directive('navMenu', function(){
	return {
		templateUrl: 'scripts/directives/navMenu/template.html',
		restrict: 'A',
		replace: 'true',
		transclude: 'true',
		controller: function($scope){
			$scope.active = 0;
			$scope.setActive = function(index){
				$scope.active = index;
			};
			$scope.activated = function (index){
				if (index === $scope.active){
					return 'active';
				} else {
					return '';
				}
			}
		},
		scope: {
			title: '=',
			links: '=',
			callback: '='
		},
		link: function(){//scope, element, attrs
		}
	};
});