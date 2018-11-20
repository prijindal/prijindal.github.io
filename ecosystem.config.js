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
  ]
};
