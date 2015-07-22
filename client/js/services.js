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

portfolioApp.factory('homeDetails', function() {
  var details = {
    title:'Priyanshu Jindal',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
  }

  return {
    details:details
  }
})

portfolioApp.factory('submitForm', function($cookies) {
  var submit = function(formDetails) {
    console.log('Submitting...' + formDetails);
  }

  var formData = {}

  var saveDetails = function(formDetails, type) {
    formData[type] = formDetails

    $cookies.putObject('formData', formData)
  }

  var getDetails = function() {
    return $cookies.getObject('formData')
  }

  var reset = function() {
    formData = {}
    $cookies.remove('formData')
  }

  return {
    submit:submit,
    saveDetails:saveDetails,
    getDetails:getDetails,
    reset:reset
  }
})

portfolioApp.factory('contactDetails', function() {
  var details = {
    email:'priyanshujindal1995@gmail.com',
    fb:{
      type:'facebook',
      user:'prijindal',
      link:'http://facebook.com/prijindal'
    },
    github:{
      type:'github',
      user:'prijindal',
      link:'http://github.com/prijindal'
    },
    tweet:{
      type:'twitter',
      user:'@prijindal',
      link:'http://twitter.com/prijindal'
    }
  }

  return {
    details:details
  }
})
