portfolioApp.factory('loadingHandler', function() {

    var loading = function(element) {
      if(loader[element]){
        loader.loading = true;
      }
    }

    var loaded = function(element) {
      loader.loading = false;
      loader[element] = true
    }

    loader = {
       loading : true,
       loadPage : loading,
       loaded: loaded
     }
     for (var i = 0; i < SITES.length; i++) {
       loader[SITES[i]] = false
     }

    return {
      loader:loader
    }
})

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

portfolioApp.factory('submitForm', function($cookies) {
  var submit = function(formDetails) {
    console.log(formDetails);
  }

  var formData = {
    name:"",
    emails:[]
  }

  var saveDetails = function(formDetails, type) {
    formData[type] = formDetails
    $cookies.put('formData', formData)
  }

  return {
    submit:submit,
    saveDetails:saveDetails
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
