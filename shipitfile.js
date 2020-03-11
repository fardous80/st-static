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
  
  };