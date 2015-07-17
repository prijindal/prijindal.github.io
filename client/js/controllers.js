'use strict';

portfolioApp.controller('globalController', function($scope) {
  $scope.loader = {

             loading : true ,

            };
})

portfolioApp.controller('homeController', function($scope) {
  $scope.loader.loading = false;
})

portfolioApp.controller('aboutController', function($scope) {
  $scope.loader.loading = false;
})

portfolioApp.controller('contactsController', function($scope) {
  $scope.loader.loading = false;
})
