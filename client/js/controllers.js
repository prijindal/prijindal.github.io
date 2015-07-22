'use strict';

portfolioApp.controller('globalController', function($scope, menuHandler) {
  var loading = function(element) {
    if(!$scope.loader[element]){
      $scope.loader.loading = true;
    }
  }

  var loaded = function(element) {
    $scope.loader.loading = false;
    $scope.loader[element] = true
  }

  $scope.loader = {
     loading : true,
     loadPage : loading,
     loaded: loaded
   }

  for (var i = 0; i < SITES.length; i++) {
    $scope.loader[SITES[i]] = false
  }
})

portfolioApp.controller('homeController', function($scope, menuHandler, homeDetails) {
  $scope.loader.loaded('home')
  menuHandler.onPage('home')

  $scope.homeDetails = homeDetails.details
})

portfolioApp.controller('aboutController', function($scope, menuHandler) {
  $scope.loader.loaded('about')
  menuHandler.onPage('about')
})

portfolioApp.controller('worksController', function($scope, menuHandler) {
  $scope.loader.loaded('works')
  menuHandler.onPage('works')
})

portfolioApp.controller('contactsController', function($scope, menuHandler, submitForm, contactDetails) {
  $scope.loader.loaded('contact')
  menuHandler.onPage('contact')

  $scope.submit = submitForm.submit
  $scope.resetForm = function() {
    submitForm.reset()
    delete $scope.form
  }

  $scope.myDetails = contactDetails.details
  $scope.form = submitForm.getDetails()

  $scope.$watch('form.name', function(newValue) {
    submitForm.saveDetails(newValue, 'name')
  })

  $scope.$watch('form.email', function(newValue) {
    submitForm.saveDetails(newValue, 'email')
  })
})

portfolioApp.controller('footerController', function($scope, contactDetails) {
  $scope.footerContact = contactDetails.details
  delete $scope.footerContact.email
})
