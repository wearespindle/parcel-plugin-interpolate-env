module.exports = parseInt(process.versions.node, 10) < 8
    ? require('parcel-bundler/lib/assets/WebManifestAsset.js')
    : require('parcel-bundler/src/assets/WebManifestAsset.js');
