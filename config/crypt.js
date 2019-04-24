const config = {
  development: {
    cryptKey: 'thisisatEst',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  },
  staging: {
    cryptKey: 'thisisatEst',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  },
  production: {
  	cryptKey: 'thisisatEst',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  }
};

module.exports = function(env) {
  var c = config[env];
  return c;
};
