const path = require('path');

module.exports = function(wallaby) {

  // Use this is if not using scoped packages
  // process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'packages');

  return {
    files: [
      'packages/**',
      '!packages/**/node_modules/**',
      '!packages/**/__tests__/**'
    ],

    tests: [
      'packages/**/__tests__/**',
      '!packages/**/node_modules/**'
    ],

    env: {
      type: 'node'
    },

    setup: w => {
      // Use this is if using scoped packages (or any custom folder structure)
      const moduleAlias = require('module-alias');
      moduleAlias.addAliases({
        '@foo/bar1': w.projectCacheDir + '/packages/foo-bar1'
      });
    },

    debug: true
  };
};
