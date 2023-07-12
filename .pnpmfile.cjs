// noinspection JSUnusedGlobalSymbols

function readPackage(pkg) {
  /** @type {object} */
  if (pkg.name === 'openstamanager') {
    pkg.dependencies = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
