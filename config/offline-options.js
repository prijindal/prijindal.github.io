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
      'assets/css/loading.css',
      'assets/css/styles.css'
    ],
    additional:[
      'assets/img/*.png',
      'assets/service-worker.js',
      'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css'
    ],
    externals:[
      'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css'
    ],
    optional:optional
  }
}
