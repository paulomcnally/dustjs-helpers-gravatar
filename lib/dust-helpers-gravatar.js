var gravatar = require('gravatar');

module.exports = function (dust) {
  // format
  dust.helpers.gravatar = function (chunk, context, bodies, params) {
    var s = context.resolve(params.s, chunk, context) || '200';
    var r = context.resolve(params.r, chunk, context) || 'g';
    var d = context.resolve(params.d, chunk, context) || 'identicon';
    var secure = context.resolve(params.secure, chunk, context) || 'true';
    var email = context.resolve(params.email, chunk, context) || 'foo@bar.com';

    var url = '';
    if (secure === 'true') {
      url = gravatar.url(email, {s: s, r: r, d: d}, true);
    }
    else {
      url = gravatar.url(email, {s: s, r: r, d: d});
    }

    return chunk.write(url);
  };
};

module.exports.registerWith = module.exports;
