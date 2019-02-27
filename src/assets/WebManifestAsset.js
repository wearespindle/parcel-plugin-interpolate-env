const directory = require('../helpers/directory.js');
const createInterpolater = require('../helpers/createInterpolater.js');
const Asset = require(`parcel-bundler/${directory}/assets/WebManifestAsset.js`)

module.exports = createInterpolater(Asset);
