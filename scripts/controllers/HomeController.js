app.controller('HomeController', ['$scope', 'copy', function($scope, copy) {
	copy.success(function(data) {
		$scope.hello = data["hello!"];
		$scope.artists = data["3"];
		$scope.merch = data["4"];
		$scope.sponsors = data["5"];
		$scope.events = data["6"];
	});
}]);