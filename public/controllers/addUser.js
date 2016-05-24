/**
 * Created by irkalla on 09.03.16.
 */

angular.module('App').controller('addUserCtl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");



    $http.get('/students').success(function(response){
        console.log("He obtenido lo que pedia");
        $scope.students = response;
    });

    var refresh = function(){
        $http.get('/students').success(function(response){
                console.log("Refresh");
            $scope.students = response;

        });

    };

    $http.get('/subjects').success(function(response){
        console.log("He obtenido lo que pedia");
        $scope.subjects = response;
    });

    $scope.joinSubject = function(){

        $http.put('/subjects', $scope.tojoin).success(function(response){
            console.log(response);

        });
    };

    $scope.addStudent = function(){

        $http.post('/student', $scope.newstudent).success(function(response){
            console.log(response);
            refresh();

        });
    };



}]);