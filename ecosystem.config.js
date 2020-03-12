
        module.exports = {
            apps: [
                {
                name: 'st-static',
                script: '/home/fardous/tmp/st-static/releases/20200312173710/server.js',
                watch: true,
                autorestart: true,
                restart_delay: 1000,
                env: {
                    NODE_ENV: 'development'
                },
                env_production: {
                    NODE_ENV: 'production'
                }
                }
            ]
        };