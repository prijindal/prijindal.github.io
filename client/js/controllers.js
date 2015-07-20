'use strict';

portfolioApp.controller('globalController', function($scope) {
  $scope.loader = {

             loading : true ,
             home: false,
             about: false,
             contact: false

           };

  $scope.loading = function(element) {
    if(!$scope.loader[element]){
      $scope.loader.loading = true;
    }
  }

  $scope.loaded = function(element) {
    $scope.loader.loading = false;
    $scope.loader[element] = true
  }
})

portfolioApp.controller('homeController', function($scope, menuHandler) {
  $scope.loaded('home')
  menuHandler.onPage('home')
})

portfolioApp.controller('aboutController', function($scope, menuHandler) {
  $scope.loaded('about')
  menuHandler.onPage('about')
})

portfolioApp.controller('contactsController', function($scope, menuHandler, submitForm) {
  $scope.loaded('contact')
  menuHandler.onPage('contact')

  $scope.submit = submitForm.submit
})
