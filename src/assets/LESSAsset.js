const directory = require('../helpers/directory.js');
const createInterpolater = require('../helpers/createInterpolater.js');
const Asset = require(`parcel-bundler/${directory}/assets/LESSAsset.js`)

module.exports = createInterpolater(Asset);
