app.controller('ArtistsController', ['$scope', 'artists', function($scope, artists) {
	artists.success(function(data) {
		console.log(data);
		$scope.artists = data;
	});
}]);