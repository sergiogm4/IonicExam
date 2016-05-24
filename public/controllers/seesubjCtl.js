/**
 * Created by irkalla on 18.04.16.
 */


angular.module('App').controller('seesubjCtl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {




    console.log("Hello World from seesubjCtl");





    $http.get('/subjects/' + $routeParams.name).success(function (response) {


        console.log(response);

        $scope.subject = response;;

    });



}]);