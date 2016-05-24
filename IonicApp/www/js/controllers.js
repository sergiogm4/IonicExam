var base_url = "http://10.193.81.51:3000";

angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope,$http) {

  $http.get(base_url+'/subjects').success(function(response){
    console.log("He obtenido lo que pedia");
    $scope.subjects = response;
  });
})

.controller('SubjectDetailCtrl', function($scope, $stateParams,$http,$ionicHistory) {

  $http.get(base_url+'/subjects/' + $stateParams.name).success(function (response) {


    console.log(response);
    if(response.students == ''){
      $scope.noData = true;
    }
    else $scope.noData = false;
    $scope.subject = response;;


  });

  $scope.goback= function(){
    $ionicHistory.goBack();
  }


  })



.controller('ChatsCtrl', function($scope, $http) {

  $http.get(base_url+'/students').success(function(response){
    console.log("He obtenido lo que pedia");
    $scope.students = response;
  });

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('ChatDetailCtrl', function($scope, $stateParams,$http,$ionicHistory) {
  console.log($stateParams);
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
  $http.get(base_url + '/student/' + $stateParams.name).success(function (response) {


    console.log(response);

    $scope.user = response;
    $scope.phonename = response.phones[0].name;
    $scope.phonenum= response.phones[0].number;

  });


  $scope.goback= function(){
    $state.go('tab.students');
  }
})

.controller('AccountCtrl', function($scope,$ionicPopup,$http) {

  $http.get(base_url+'/subjects').success(function(response){
    console.log("He obtenido lo que pedia");
    $scope.subjects = response;
  });

  $scope.goback= function(){
    $ionicHistory.goBack();
  }

  $http.get(base_url+'/students').success(function(response){
    console.log("He obtenido lo que pedia");
    $scope.students = response;
  });

  $scope.newstudent={};

  $scope.addStudent = function(){
    $http.post(base_url+'/student/', $scope.newstudent).success(function(response){
      console.log(response);
      $scope.newstudent={};
      $ionicPopup.alert({
        title: 'NICE!',
        template: 'User created'
      });

    });
  };

  $scope.createSubject = function(subject){

    $http.post(base_url+'/subjects', subject).success(function(response){
      console.log(response);
      $scope.subject = '';
      $ionicPopup.alert({
        title: 'NICE!',
        template: 'Subject created'
      });

    });
  };

  $scope.tojoin={};

  $scope.joinSubject = function(){

  console.log($scope.tojoin);
    $http.put(base_url+'/subjects', $scope.tojoin).success(function(response){
      console.log(response);
      $ionicPopup.alert({
        title: 'NICE!',
        template: 'User joined to the subject'
      });

    });
  };


});
