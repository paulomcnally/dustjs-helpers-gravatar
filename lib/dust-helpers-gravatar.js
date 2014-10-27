var gravatar = require('gravatar');

(function(dust) {
  // format
  dust.helpers.gravatar = function(chunk, context, bodies, params) {
    var s = dust.helpers.tap(params.s, chunk, context) || '200';
    var r = dust.helpers.tap(params.r, chunk, context) || 'pg';
    var d = dust.helpers.tap(params.d, chunk, context) || '404';
    var secure = dust.helpers.tap(params.secure, chunk, context) || 'true';
    var email = dust.helpers.tap(params.email, chunk, context) || 'foo@bar.com';

    var url = '';
    if (secure === 'true') {
      url = gravatar.url(email, {s: s, r: r, d: d}, true);
    }
    else {
      url = gravatar.url(email, {s: s, r: r, d: d});
    }

    return chunk.write(url);
  };
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust));
