'use strict';

portfolioApp.controller('globalController', function($scope, loadingHandler) {
  $scope.loading = loadingHandler.loader.loadPage
})

portfolioApp.controller('homeController', function($scope, menuHandler, loadingHandler) {
  loadingHandler.loader.loaded('home')
  menuHandler.onPage('home')
})

portfolioApp.controller('aboutController', function($scope, menuHandler, loadingHandler) {
  loadingHandler.loader.loaded('about')
  menuHandler.onPage('about')
})

portfolioApp.controller('worksController', function($scope, menuHandler, loadingHandler) {
  loadingHandler.loader.loaded('works')
  menuHandler.onPage('works')
})

portfolioApp.controller('contactsController', function($scope, menuHandler, submitForm, contactDetails) {
  loader.loaded('contact')
  menuHandler.onPage('contact')

  $scope.submit = submitForm.submit
  $scope.myDetails = contactDetails.details

  $scope.$watch('form.name', function(newValue) {
    submitForm.saveDetails(newValue, 'name')
  })

  $scope.$watch('form.emails', function(newValue) {
    submitForm.saveDetails(newValue, 'emails')
  })
})
