/**
 * Created by irkalla on 14.04.16.
 */
angular.module('App').controller('subjectsCtl', ['$scope', '$http', function($scope, $http) {


$scope.hello = "Hello from subjectsController";



    $http.get('/subjects').success(function(response){
            console.log("He obtenido lo que pedia");
            $scope.subjects = response;
    });

    var refresh = function(){
        $http.get('/subjects').success(function(response){
            console.log("He obtenido lo que pedia");
            $scope.subjects = response;

        });

    };

    $scope.createSubject = function(){

        $http.post('/subjects', $scope.subject).success(function(response){
            console.log(response);
            refresh();
        });
    };



}]);