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
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
    ],
    externals:[
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
    ],
    optional:optional
  }
}
