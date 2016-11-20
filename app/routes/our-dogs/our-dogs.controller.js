angular.module('MainApplication').controller('OurDogsController', function($scope){
	$scope.dogs = [
		{
			name: 'Lilian Leawrey',
			imgSource: 'images/lilian.jpg',
			imgUrl: '#our-dogs/lilian'
		},
		{
			name: 'Panama Kalis z Třeště',
			imgSource: 'images/panama.jpg',
			imgUrl: '#our-dogs/panama'
		},
		{
			name: 'Anthonia Chlupatý Poklad',
			imgSource: 'images/nia.jpg',
			imgUrl: '#our-dogs/nia'
		},
		{
			name: 'Barma Chlupatý Poklad',
			imgSource: 'images/barma.jpg',
			imgUrl: '#our-dogs/barma'
		}

	];
});