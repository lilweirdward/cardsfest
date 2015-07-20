app.factory('copy', ['$http', function($http) {
	return $http.get('http://crud.www.cardshirt.org/api/index.php/Copy')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);