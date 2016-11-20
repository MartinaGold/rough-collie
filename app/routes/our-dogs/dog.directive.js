angular.module('MainApplication').directive('dog', function (){

	return {
		templateUrl: 'app/routes/our-dogs/dog.directive.template.html',
		restrict: 'E',
		scope: {
			name: '=',
			imgSource: '=',
			imgUrl: '='
		},
		controller: function(){
			
		}
	};

});