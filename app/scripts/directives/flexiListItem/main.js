'use strict';
app.directive('flexiListItem', function(){
	return {
		templateUrl: 'scripts/directives/flexiListItem/template.html',
		restrict: 'C',
		replace: 'true',
		transclude: 'true',
		scope: {
			model: '=',
		},
		link: function(scope){//scope, element, attrs
			scope.years = new Array(scope.model.year);
			scope.hide=true;
		}
	};
});