var app = angular.module('MainApplication', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/routes/home/home.view.html',
		controller: 'HomeController'
	})
	.when('/news', {
		templateUrl: 'app/routes/news/news.view.html',
		controller: 'NewsController'
	})
	.when('/introduction', {
		templateUrl: 'app/routes/introduction/introduction.view.html',
		controller: 'IntroductionController'
	})
	.when('/standard', {
		templateUrl: 'app/routes/standard/standard.view.html',
		controller: 'StandardController'
	})
	.when('/history', {
		templateUrl: 'app/routes/history/history.view.html',
		controller: 'HistoryController'
	})
	.when('/our-dogs', {
		templateUrl: 'app/routes/our-dogs/our-dogs.view.html',
		controller: 'OurDogsController'
	})
	.when('/our-dogs/lilian', {
		templateUrl: 'app/routes/our-dogs/lilian/lilian.view.html',
		controller: 'LilianController'
	})
	.when('/our-dogs/barma', {
		templateUrl: 'app/routes/our-dogs/barma/barma.view.html',
		controller: 'BarmaController'
	})
	.when('/our-dogs/panama', {
		templateUrl: 'app/routes/our-dogs/panama/panama.view.html',
		controller: 'PanamaController'
	})
	.when('/our-dogs/nia', {
		templateUrl: 'app/routes/our-dogs/nia/nia.view.html',
		controller: 'NiaController'
	})
	.when('/messages', {
		templateUrl: 'app/routes/messages/messages.view.html',
		controller: 'MessagesController'
	})
	.when('/contacts', {
		templateUrl: 'app/routes/contacts/contacts.view.html',
		controller: 'ContactsController'
	})

})