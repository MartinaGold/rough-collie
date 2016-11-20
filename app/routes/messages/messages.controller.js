angular.module('MainApplication').controller('MessagesController', function($scope, MessageService){
	$scope.messages = [];

	MessageService.getAllMessages(function(data){
		$scope.messages = data;
	});

	$scope.message = {
		name: '',
		text: ''
	};

	$scope.addMessage = function(){
		if (isSomeFieldMissing()){
			alert('Vyplňte všechna pole');
		} else{
			var message = angular.copy($scope.message);
			var d = new Date();
			var day = d.getDate();
			var month = d.getMonth() + 1;
			var year = d.getFullYear();
			message.date = day + '. ' + month + '. '+ year 
			$scope.message.name = '';
			$scope.message.text = '';
			MessageService.saveMessage(message, function(){
				$scope.messages.unshift(message);
			});
		}
	};

	function isSomeFieldMissing(){
		return ($scope.message.name.length == 0 || $scope.message.text.length == 0)
	}

});