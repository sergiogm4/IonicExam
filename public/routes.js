/**
 * Created by irkalla on 14.04.16.
 */


// configure our routes
angular.module('App', ['ngRoute']).config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'views/subjects.html',
            controller  : 'subjectsCtl'
        })
        .when('/subjects', {
            templateUrl : 'views/subjects.html',
            controller  : 'subjectsCtl'
        })
        .when('/subjects/:name', {
            templateUrl : 'views/seesubject.html',
            controller  : 'seesubjCtl'
        })
        .when('/users/:name', {
            templateUrl : 'views/seeuser.html',
            controller  : 'seeuserCtl'
        })

        // route for the about page
        .when('/adduser', {
            templateUrl : 'views/adduser.html',
            controller  : 'addUserCtl'
        });

});