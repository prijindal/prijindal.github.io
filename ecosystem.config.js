module.exports = {
  apps: [
    {
      name: 'SERVER',
      script: 'node',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'dist/server.js',
      instances: 1,
      env: {
        watch: true,
        NODE_ENV: 'development',
      },
      env_production: {
        watch: false,
        NODE_ENV: 'production',
        autorestart: true,
      },
    },
  ],

  deploy: {
    production: {
      key: '~/Downloads/newsapp.pem',
      user: 'ubuntu',
      host: '13.126.205.26',
      ref: 'origin/development',
      ssh_options: "StrictHostKeyChecking=no",
      repo: 'ssh://git@github.com/prijindal/prijindal.github.io.git',
      path: '/home/ubuntu/prijindal',
      'post-deploy':
        'yarn install && npm run build:ssr && pm2 reload ecosystem.config.js --env production',
    },
  },
};
