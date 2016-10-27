myApp.controller("main", function($scope, $http){
	$scope.demo = "hello everybody";
	$scope.table = true;
	$scope.test = function(){
		$http.get('/getAllUsers')
            .success(function(data) {
                $scope.table = false;
                $scope.data = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
	}
})