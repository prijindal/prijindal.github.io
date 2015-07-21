'use strict';
var SITES = ['home', 'about', 'works', 'contact'];

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute'
]);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }).
      when('/about', {
        templateUrl : 'templates/about.html',
        controller : 'aboutController'
      }).
      when('/contact', {
        templateUrl : 'templates/contact.html',
        controller : 'contactsController'
      }).
      when('/works', {
        templateUrl: 'templates/works.html',
        controller: 'worksController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);


// Preventing selection of element
document.addEventListener('mousedown', function(event) {
  //event.preventDefault()
})
