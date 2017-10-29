const path = require('path');

module.exports = function(wallaby) {
  return {
    files: [
      {
        pattern: 'packages/**'
      },
      {
        pattern: 'packages/**/node_modules/**',
        ignore: true
      },
      {
        pattern: 'packages/**/__tests__/**',
        ignore: true
      }
    ],

    tests: [
      {
        pattern: 'packages/**/__tests__/**'
      },
      {
        pattern: 'packages/**/node_modules/**',
        ignore: true
      }
    ],

    env: {
      type: 'node'
    },

    setup: w => {
      const moduleAlias = require('module-alias');
      moduleAlias.addAliases({
        '@foo/bar1': w.projectCacheDir + '/packages/foo-bar1'
      });
    },

    debug: true
  };
};
