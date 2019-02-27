const escapeStringRegexp = require('escape-string-regexp');

module.exports = function (Asset) {
  return class InterpolateAsset extends Asset {
    async pretransform() {
        this.contents = this.interpolate(this.contents);
        return super.pretransform();
    }

    interpolate(code) {
        const env = this.options.env;

        Object.keys(env).forEach((envKey) => {
            const replacement = env[envKey];
            code = code.replace(
                new RegExp('%%' + escapeStringRegexp(envKey) + '%%', 'g'),
                replacement,
            )
        });
        return code;
    }
  }
}
