var headTags = require('./head-config.common')

var optional = []

headTags.link.forEach((link) => {
  optional.push(link.href)
})

module.exports = {
  AppCache:{
    caches:['main','additional'],
    FALLBACK:{
      '*':'/'
    }
  },
  ServiceWorker:{
    navigateFallbackURL:'/'
  },
  version:'[hash]',
  updateStrategy:'all',
  safeToUseOptionalCaches:true,
  caches:{
    main:[
      'polyfills.*.js',
      'vendor.*.js',
      'main.*.js',
      '/',
      'assets/img/angular-logo.png',
      'assets/css/loading.css',
      'assets/css/styles.css',
      'assets/css/forms.css'
    ],
    additional:[
      'assets/service-worker.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
      'https://code.jquery.com/jquery-2.2.4.min.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
    ],
    externals:[
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
      'https://code.jquery.com/jquery-2.2.4.min.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
    ],
    optional:optional
  }
}
