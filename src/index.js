module.exports = (bundler) => {
    bundler.addAssetType('.webmanifest', require.resolve('./asset.js'));
};
