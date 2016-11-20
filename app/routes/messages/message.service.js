var app = angular.module('MainApplication');

app.factory('MessageService', function($http){
	var messageService = {};

	messageService.getAllMessages = function (callback){
		$http.get('http://46.28.109.174:9005/messages').success(function(data){
			callback(data);
		}).error(function(error){
			console.log(error);
		});
	};

	messageService.saveMessage = function (message, callback){
		$http.post('http://46.28.109.174:9005/messages', message).success(function(){
			callback();
		}).error(function(error){
			alert(error);
		});
	};

	return messageService;
});