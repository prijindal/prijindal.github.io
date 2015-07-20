portfolioApp.factory('menuHandler', function() {

  var showAll = function() {
    var allLists = document.getElementsByClassName('menu-list')
    for (var i = 0; i < allLists.length; i++) {
      angular.element(allLists[i]).removeClass('active')
    }
  }

  var hide = function(element) {
    angular.element(document.getElementsByClassName(element)).addClass('active')
  }

  var onPage = function(pageName) {
    showAll()
    hide(pageName)
  }

  return {
    value:true,
    onPage: onPage
  }
})

portfolioApp.factory('submitForm', function() {
  var submit = function() {
    console.log('Submitting...');
  }

  return {
    submit:submit
  }
})
