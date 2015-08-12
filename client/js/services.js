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

portfolioApp.factory('homeDetails', function($http) {
  var details = {}

  $http.get('json/home.json')
  .success(function(data) {
    for (var variable in data) {
      details[variable] = data[variable]
    }
  })

  return {
    details:details
  }
})

portfolioApp.factory('aboutDetails', function($http) {
  var about = {}

  $http.get('json/about.json')
  .success(function(data) {
    for (var variable in data) {
      about[variable] = data[variable]
    }
  })

  return {
    details:about
  }
})

portfolioApp.factory('worksDetails', function($http) {

  var works = []

  $http.get('json/works.json')
  .success(function(data) {
    for (var i = 0; i < data.length; i++) {
      works.push(data[i])
    }
  })

  return {
    details:works
  }
})

portfolioApp.factory('submitForm', function($cookies) {
  var submit = function(formDetails) {
    console.log('Submitting...' , formDetails);
    alert("Submitted");
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

portfolioApp.factory('contactDetails', function($http) {
  var details = {}

  $http.get('json/contact.json')
  .success(function(data) {
    for (var variable in data) {
      details[variable] = data[variable]
    }
  })

  return {
    details:details
  }
})
