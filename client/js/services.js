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

portfolioApp.factory('contactDetails', function() {
  var details = {
    email:'priyanshujindal1995@gmail.com',
    fb:{
      user:'prijindal',
      link:'http://facebook.com/prijindal'
    },
    github:{
      user:'prijindal',
      link:'http://github.com/prijindal'
    },
    tweet:{
      user:'@prijindal',
      link:'http://twitter.com/prijindal'
    }
  }

  return {
    details:details
  }
})
