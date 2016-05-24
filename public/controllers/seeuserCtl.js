/**
 * Created by irkalla on 18.04.16.
 */


angular.module('App').controller('seeuserCtl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    console.log("Hello World from controller");



    console.log("Hello World from userCtl");




    console.log('/students/' + $routeParams.name);
    $http.get('/student/' + $routeParams.name).success(function (response) {


        console.log(response);

        $scope.user = response;
        $scope.phonename = response.phones[0].name;
        $scope.phonenum= response.phones[0].number;

    });



}]);