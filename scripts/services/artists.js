app.factory('artists', ['$http', function($http) {
	return $http.get('http://crud.www.cardshirt.org/api/index.php/Artists')
		.success(function(data) {
			console.log(data);
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);