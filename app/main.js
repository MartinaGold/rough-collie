angular.module('MainApplication').controller('Main', function($scope, $http){
	
	$scope.menuItems = [
		{
			name: 'Home',
			linkSource: '#/'
		},
		{
			name: 'Novinky',
			linkSource: '#news'
		},
		{
			name: 'Úvod',
			linkSource: '#introduction'
		},
		{
			name: 'Standard',
			linkSource: '#standard'
		},
		{
			name: 'Historie',
			linkSource: '#history'
		},
		{
			name: 'Naši psi',
			linkSource: '#our-dogs'
		},
		{
			name: 'Vzkazy',
			linkSource: '#messages'
		},
		{
			name: 'Kontakty',
			linkSource: '#contacts'
		}
	];

	$scope.selectMenuItem = function (item){
		$scope.resetMenuItems();
		item.selected = true;
	};

	$scope.resetMenuItems = function (){
		for (var i = 0; i < $scope.menuItems.length; i++) {
			$scope.menuItems[i].selected = false;
		};
	};

});