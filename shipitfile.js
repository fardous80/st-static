module.exports = shipit => {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);
  
    const appName = 'st-static';
  
    shipit.initConfig({
      default: {
        deployTo: '/home/fardous/tmp/st-static',
        repositoryUrl: 'https://github.com/fardous80/st-static.git',
        keepReleases: 5,
        ignores: ['.git', 'node_modules'],
        key: '~/.ssh/id_rsa',
        branch : 'master',
        shared: {
          overwrite: true,
          dirs: ['node_modules']
        }
      },
      production: {
        servers: 'fardous@ks-1.saletag'
      }
    });
  
    const path = require('path');
    const ecosystemFilePath = path.join(
      shipit.config.deployTo,
      'shared',
      'ecosystem.config.js'
    );

    // Our listeners and tasks will go here
    shipit.on('updated', async () => {
        // one update fire these 2 events
        shipit.start('npm-install', 'copy-config');
    });

    shipit.on('published', async () => {
        shipit.start('pm2-server');
    });


    // on event `copy-config` do this blocking task
    shipit.blTask('copy-config', async () => {
        const fs = require('fs');
        const ecosystem = `
        module.exports = {
            apps: [
                {
                name: '${appName}',
                script: '${shipit.releasePath}/server.js',
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
        };`;

        fs.writeFileSync('ecosystem.config.js', ecosystem, function(err) {
            if (err) throw err;
            console.log('File created successfully.');
          });
      
          await shipit.copyToRemote('ecosystem.config.js', ecosystemFilePath);
    });

    shipit.blTask('npm-install', async () => {
        shipit.remote(`cd ${shipit.releasePath} && npm install --production`);
    });

    shipit.blTask('pm2-server', async () => {
        await shipit.remote(`pm2 delete -s ${appName} || :`);
        await shipit.remote(
            `pm2 start ${ecosystemFilePath} --env production --watch true`
        );
    });
  
  };